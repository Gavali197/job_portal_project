import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../main"; // Correct import name
import { Navigate } from "react-router-dom";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import PopularCategories from "./PopularCategories";
import PopularCompanies from "./PopularCompanies";

const Home = () => {
    const { isAuthenticated } = useContext(AuthContext); // Use AuthContext and isAuthenticated
    if (!isAuthenticated) {
        return <Navigate to={"/login"} />;
    }
    return (
        <>
            <section className="homePage page">
                <HeroSection />
                <HowItWorks />
                <PopularCategories />
                <PopularCompanies />
            </section>
        </>
    );
};

export default Home;