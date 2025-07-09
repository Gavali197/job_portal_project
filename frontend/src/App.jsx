import { useContext } from "react";
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./components/Home/Home";
import Jobs from "./components/Job/Jobs";
import JobDetails from "./components/Job/JobDetails";
import Application from "./components/Application/Application";
import MyApplications from "./components/Application/MyApplications";
import PostJob from "./components/Job/PostJob";
import NotFound from "./components/NotFound/NotFound";
import MyJobs from "./components/Job/MyJobs";
import AdminDashboard from "./components/admin/adminDashboard";
import Master from "./components/admin/master";
import { AuthContext } from "./main"; // Correct import
import './app.css';
import Faq from './components/admin/master page Componets/faq.jsx';
import Blog from "./components/admin/master page Componets/blog.jsx";
import About from "./components/admin/master page Componets/about.jsx";

const App = () => {
    const { isAuthenticated, user } = useContext(AuthContext);

const ProtectedRoute = ({ children, roles = [] }) => {
    ProtectedRoute.propTypes = {
        children: PropTypes.node.isRequired,
        roles: PropTypes.arrayOf(PropTypes.string)
    };
        if (!isAuthenticated) {
            return <Navigate to="/login" />;
        }

        if (roles && !roles.includes(user.role)) {
            return <div>Unauthorized</div>; // Or a more user-friendly message
        }

        return children;
    };

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/master" element={<Master />} />
                <Route path="/master/faq" element={<Faq />} />
                <Route path="/master/about" element={<About />} />
                <Route path="/master/blog" element={<Blog />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Home />} />
                <Route path="/job/getall" element={<Jobs />} />
                <Route path="/job/:id" element={<JobDetails />} />

                <Route
                    path="/application/:id"
                    element={<ProtectedRoute roles={["Job Seeker"]}><Application /></ProtectedRoute>}
                />
                <Route
                    path="/applications/me"
                    element={<ProtectedRoute roles={["Job Seeker"]}><MyApplications /></ProtectedRoute>}
                />
                <Route
                    path="/applications/employer"
                    element={<ProtectedRoute roles={["Employer"]}><MyApplications /></ProtectedRoute>}
                />

                {/* Job Seeker Home Page */}
                {/* Admin Route */}
                {/* <Route
                    path="/admin/dashboard"
                    element={
                        isAuthenticated && user && (user.role === 'Owner' || user.role === 'Admin') ? (
                            <AdminDashboard />
                        ) : (
                            <Navigate to="/login" state={{ from: '/admin/dashboard' }} replace />
                        )
                    }
                /> */}


<Route
  path="/admin/dashboard"
  element={
    <ProtectedRoute roles={["Owner", "Admin"]}>
      <AdminDashboard />
    </ProtectedRoute>
  }
/>


                <Route
                    path="/job/post"
                    element={<ProtectedRoute roles={["Employer"]}><PostJob /></ProtectedRoute>}
                />
                <Route
                    path="/job/me"
                    element={<ProtectedRoute roles={["Employer"]}><MyJobs /></ProtectedRoute>}
                />
                {/* <Route
                    path="/master"
                    element={<ProtectedRoute roles={["Admin"]}><Master /></ProtectedRoute>}
                /> */}
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
            <Toaster />
        </BrowserRouter>
    );
};

export default App;