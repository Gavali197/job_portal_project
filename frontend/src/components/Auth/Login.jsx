// import { useState, useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { AuthContext } from "../../main";
// import { FaEnvelope, FaLock, FaUserTag } from "react-icons/fa"; // Added FaUserTag for role

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState(""); // New state for role
//   const navigate = useNavigate();
//   const { login } = useContext(AuthContext);


// //   const location = useLocation();
// //   const from = location.state?.from || "/";
// //   navigate(from);
  


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!role) {
//       toast.error("Please select your role.");
//       return;
//     }
//     try {
//       const { data } = await axios.post(
//         "http://localhost:4000/api/v1/user/login",
//         { email, password, role }, // Include the role in the request body
//         { withCredentials: true }
//       );
//       toast.success(data.message);
//       login(data.user);
//       // Redirect based on role
//       if (data.user.role === "Owner" || data.user.role === "Admin") {
//         navigate("/admin/dashboard");
//       } else {
//         navigate("/");
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Login failed");
//     }
//   };

//   // Removed duplicate navigation - handled in handleSubmit

//   return (
//     <div className="authPage">
//       <div className="container">
//         <div className="header">
//           <img src="/logo.png" alt="Logo" />
//           <h3>Welcome Back!</h3>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="inputTag">
//             <div>
//               <FaEnvelope />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//           </div>
//           <div className="inputTag">
//             <div>
//               <FaLock />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//           </div>
//           <div className="inputTag">
//             <div>
//               <FaUserTag />
//               <select
//                 value={role}
//                 onChange={(e) => setRole(e.target.value)}
//                 required
//               >
//                 <option value="">Select Role</option>
//                 <option value="Job Seeker">Job Seeker</option>
//                 <option value="Employer">Recruiter</option>{" "}
//                 {/* Match the database */}
//                 <option value="Owner">Owner</option> {/* Match the database */}
//                 {/* Add other roles exactly as they are in the database */}
//               </select>
//             </div>
//           </div>
//           <button type="submit">Login</button>
//           <Link to="/register">Register</Link>
//         </form>
//       </div>
//       {/* <div className="banner">
//                 <img src="/path/to/your/banner.jpg" alt="Login Banner" />
//             </div> */}
//     </div>
//   );
// };

// export default Login;


import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { AuthContext } from "../../main";
import { FaEnvelope, FaLock, FaUserTag } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  // Check if special admin login
  const isAdminLogin = email === "admin2006@gmail.com" && password === "Admin@197";

  // Auto-assign role if special admin
  useEffect(() => {
    if (isAdminLogin) {
      setRole("Owner");
    }
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!role) {
      toast.error("Please select your role.");
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        { email, password, role },
        { withCredentials: true }
      );
      toast.success(data.message);
      login(data.user);

      if (data.user.role === "Owner" || data.user.role === "Admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="authPage">
      <div className="container">
        <div className="header">
          <img src="/logo.png" alt="Logo" />
          <h3>Welcome Back!</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputTag">
            <div>
              <FaEnvelope />
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="inputTag">
            <div>
              <FaLock />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Conditionally render role selection only if NOT admin login */}
          {!isAdminLogin && (
            <div className="inputTag">
              <div>
                <FaUserTag />
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option value="">Select Role</option>
                  <option value="Job Seeker">Job Seeker</option>
                  <option value="Employer">Recruiter</option>
                  {/* <option value="Owner">Owner</option> */}
                </select>
              </div>
            </div>
          )}

          <button type="submit">Login</button>
          <Link to="/register">Register</Link>
        </form>
        </div>

        <div className="banner">
               <img src="/login.png" alt="Login Banner" />
          </div>
      
    </div>
  );
};

export default Login;
