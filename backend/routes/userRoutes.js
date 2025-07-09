import express from "express";
const router = express.Router();
import {
    register,
    login,
    logout,
    getUser,
    getAllUsers, // Import new controller
    getUserDetails, // Import new controller
    updateUser, // Import new controller
    deleteUser, // Import new controller
} from "../controllers/userController.js";
import { isAuthenticated, authorizeRoles } from "../middlewares/authoriseRole.js";

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(isAuthenticated, logout);
router.route("/me").get(isAuthenticated, getUser);

// --- New User Management Routes (Only accessible to Owners) ---
router.route("/admin/users").get(isAuthenticated, authorizeRoles("Owner", "Admin"), getAllUsers);
router.route("/admin/users/:id")
    .get(isAuthenticated, authorizeRoles("Owner", "Admin"), getUserDetails)
    .put(isAuthenticated, authorizeRoles("Owner", "Admin"), updateUser)
    .delete(isAuthenticated, authorizeRoles("Owner", "Admin"), deleteUser);

export default router;