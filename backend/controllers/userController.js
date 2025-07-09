import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import { User } from "../models/userSchema.js";
import ErrorHandler from "../middlewares/error.js";
import { sendToken } from "../utils/jwtToken.js";

export const register = catchAsyncErrors(async (req, res, next) => {
    const { name, email, phone, password, role } = req.body;
    if (!name || !email || !phone || !password || !role) {
        return next(new ErrorHandler("Please fill full form!"));
    }
    const isEmail = await User.findOne({ email });
    if (isEmail) {
        return next(new ErrorHandler("Email already registered!"));
    }
    const user = await User.create({
        name,
        email,
        phone,
        password,
        role,
    });
    sendToken(user, 201, res, "User Registered!");
});

export const login = catchAsyncErrors(async (req, res, next) => {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
        return next(new ErrorHandler("Please provide email ,password and role."));
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        return next(new ErrorHandler("Invalid Email Or Password.", 400));
    }
    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) {
        return next(new ErrorHandler("Invalid Email Or Password.", 400));
    }
    if (user.role !== role) {
        if (user.role === "Owner" && role === "Admin") {
            // Special case: Owners can access admin routes
            req.user.role = "Admin"; // Temporary override for compatibility
        } else {
            return next(
                new ErrorHandler(`User with provided email and ${role} not found!`, 404)
            );
        }
    }
    sendToken(user, 201, res, "User Logged In!");
});

export const logout = catchAsyncErrors(async (req, res, next) => {
    res
        .status(201)
        .cookie("token", "", {
            httpOnly: true,
            expires: new Date(Date.now()),
        })
        .json({
            success: true,
            message: "Logged Out Successfully.",
        });
});

export const getUser = catchAsyncErrors(async (req, res, next) => {
    if (!req.user) {
        return next(new ErrorHandler("User not authenticated", 401));
    }
    
    // Fetch fresh user data from database
    const user = await User.findById(req.user._id);
    if (!user) {
        return next(new ErrorHandler("User not found", 404));
    }

    res.status(200).json({
        success: true,
        user,
    });
});

// --- New User Management Controller Functions ---

export const getAllUsers = catchAsyncErrors(async (req, res, next) => {
    const users = await User.find();
    res.status(200).json({
        success: true,
        users,
    });
});

export const getUserDetails = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        return next(
            new ErrorHandler(`User with ID: ${req.params.id} not found!`, 404)
        );
    }
    res.status(200).json({
        success: true,
        user,
    });
});

export const updateUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, phone, role } = req.body; // Define editable fields
    const userData = {};
    if (name) userData.name = name;
    if (email) userData.email = email;
    if (phone) userData.phone = phone;
    if (role) userData.role = role;

    const user = await User.findByIdAndUpdate(req.params.id, userData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    if (!user) {
        return next(
            new ErrorHandler(`User with ID: ${req.params.id} not found!`, 404)
        );
    }

    res.status(200).json({
        success: true,
        message: "User updated successfully!",
        user,
    });
});

export const deleteUser = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
        return next(
            new ErrorHandler(`User with ID: ${req.params.id} not found!`, 404)
        );
    }

    res.status(200).json({
        success: true,
        message: "User deleted successfully!",
    });
});