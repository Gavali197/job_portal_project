import React, { useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { AuthContext } from "../../main"; // Correct import name
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ResumeModal from "./ResumeModal";

const MyApplications = () => {
    const { user } = useContext(AuthContext); // Use AuthContext
    const [applications, setApplications] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [resumeImageUrl, setResumeImageUrl] = useState("");

    const { isAuthenticated } = useContext(AuthContext); // Use AuthContext and isAuthenticated
    const navigateTo = useNavigate();

    useEffect(() => {
        try {
            if (user && user.role === "Employer") {
                axios
                    .get("http://localhost:4000/api/v1/application/employer/getall", {
                        withCredentials: true,
                    })
                    .then((res) => {
                        setApplications(res.data.applications);
                    });
            } else {
                axios
                    .get("http://localhost:4000/api/v1/application/jobseeker/getall", {
                        withCredentials: true,
                    })
                    .then((res) => {
                        setApplications(res.data.applications);
                    })
                    .catch((error) => {
                        toast.error(error.response?.data?.message || "Failed to fetch applications");
                        console.error("Error fetching applications:", error);
                    });
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to fetch applications");
            console.error("Error fetching applications:", error);
        }
    }, [isAuthenticated, user]); // Added user to dependency array

    // if (!isAuthenticated) {
    //     navigateTo("/");
    // }

    



    useEffect(() => {
        if (!isAuthenticated) {
          navigateTo("/");
          return;
        }
      
        if (user?.role === "Job Seeker" && window.location.pathname === "/applications/employer") {
          navigateTo("/applications/me");
        }
      
        if (user?.role === "Employer" && window.location.pathname === "/applications/me") {
          navigateTo("/applications/employer");
        }
      }, [isAuthenticated, user, navigateTo]);
      















    const deleteApplication = (id) => {
        try {
            axios
                .delete(`http://localhost:4000/api/v1/application/delete/${id}`, {
                    withCredentials: true,
                })
                .then((res) => {
                    toast.success(res.data.message);
                    setApplications((prevApplication) =>
                        prevApplication.filter((application) => application._id !== id)
                    );
                });
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    const openModal = (imageUrl) => {
        setResumeImageUrl(imageUrl);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <section className="my_applications page">
            {user && user.role === "Job Seeker" ? (
                <div className="container">
                    <h1>My Applications</h1>
                    {applications.length <= 0 ? (
                        <>
                            {" "}
                            <h4>No Applications Found</h4>{" "}
                        </>
                    ) : (
                        applications.map((element) => (
                            <JobSeekerCard
                                element={element}
                                key={element._id}
                                deleteApplication={deleteApplication}
                                openModal={openModal}
                            />
                        ))
                    )}
                </div>
            ) : (
                <div className="container">
                    <h1>Applications From Job Seekers</h1>
                    {applications.length <= 0 ? (
                        <>
                            <h4>No Applications Found</h4>
                        </>
                    ) : (
                        applications.map((element) => (
                            <EmployerCard
                                element={element}
                                key={element._id}
                                openModal={openModal}
                            />
                        ))
                    )}
                </div>
            )}
            {modalOpen && (
                <ResumeModal imageUrl={resumeImageUrl} onClose={closeModal} />
            )}
        </section>
    );
};

export default MyApplications;

const JobSeekerCard = ({ element, deleteApplication, openModal }) => {
    return (
        <div className="job_seeker_card">
            <div className="detail">
                <p>
                    <span>Name:</span> {element.name}
                </p>
                <p>
                    <span>Email:</span> {element.email}
                </p>
                <p>
                    <span>Phone:</span> {element.phone}
                </p>
                <p>
                    <span>Address:</span> {element.address}
                </p>
                <p>
                    <span>CoverLetter:</span> {element.coverLetter}
                </p>
            </div>
            <div className="resume">
                <img
                    src={element.resume.url}
                    alt="resume"
                    onClick={() => openModal(element.resume.url)}
                />
            </div>
            <div className="btn_area">
                <button onClick={() => deleteApplication(element._id)}>
                    Delete Application
                </button>
            </div>
        </div>
    );
};

JobSeekerCard.propTypes = {
  element: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    coverLetter: PropTypes.string.isRequired,
    resume: PropTypes.shape({
      url: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  deleteApplication: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired
};

const EmployerCard = ({ element, openModal }) => {
    return (
        <div className="job_seeker_card">
            <div className="detail">
                <p>
                    <span>Name:</span> {element.name}
                </p>
                <p>
                    <span>Email:</span> {element.email}
                </p>
                <p>
                    <span>Phone:</span> {element.phone}
                </p>
                <p>
                    <span>Address:</span> {element.address}
                </p>
                <p>
                    <span>CoverLetter:</span> {element.coverLetter}
                </p>
            </div>
            <div className="resume">
                <img
                    src={element.resume.url}
                    alt="resume"
                    onClick={() => openModal(element.resume.url)}
                />
            </div>
        </div>
    );
};

EmployerCard.propTypes = {
  element: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    coverLetter: PropTypes.string.isRequired,
    resume: PropTypes.shape({
      url: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  openModal: PropTypes.func.isRequired
};
