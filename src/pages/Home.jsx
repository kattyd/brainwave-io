import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryCards from "../components/CategoryCards";
import ProductGallery from "../components/ProductGallery";
import CallToAction from "../components/CallToAction";
import Testimonials from "../components/Testimonials";
// import FinalCTA from "../components/FinalCTA";
// import Footer from "../components/Footer";


const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <CategoryCards />
            <ProductGallery />
            <CallToAction />
            <Testimonials />
            {/* <FinalCTA />
            <Footer /> */}
        </>
    );
};

export default Home;