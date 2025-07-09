import { useContext, useState } from "react";
import { AuthContext } from "../../main";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [show, setShow] = useState(false);
    const { isAuthenticated, logout, user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            toast.success("Logout successful");
            navigate("/login");
        } catch (error) {
            toast.error("Logout failed");
        }
    };

    if (user?.role === "Owner") return null;


    return (
        <nav className={isAuthenticated ? "navbarShow" : "navbarHide"}>
            <div className="container">
                <div className="logo">
                    <img src="/JobZee-logos__white.png" alt="logo" />
                </div>
                <ul className={!show ? "menu" : "show-menu menu"}>
                    <li>
                        <Link to="/" onClick={() => setShow(false)}>HOME</Link>
                    </li>
                    <li>
                        <Link to="/job/getall" onClick={() => setShow(false)}>ALL JOBS</Link>
                    </li>
                    <li>
                        <Link
                            to={user?.role === "Employer" ? "/applications/employer" : "/applications/me"}
                            onClick={() => setShow(false)}
                        >
                            {user?.role === "Employer" ? "APPLICANT'S APPLICATIONS" : "MY APPLICATIONS"}
                        </Link>
                    </li>
                    {user?.role === "Employer" && (
                        <>
                            <li>
                                <Link to="/job/post" onClick={() => setShow(false)}>POST NEW JOB</Link>
                            </li>
                            <li>
                                <Link to="/job/me" onClick={() => setShow(false)}>VIEW YOUR JOBS</Link>
                            </li>
                        </>
                    )}
                    <button onClick={handleLogout}>LOGOUT</button>
                </ul>
                <div className="hamburger">
                    <GiHamburgerMenu onClick={() => setShow(!show)} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
