import React from "react";
import "../styles/Hero.css";
import BG from "../assets/BG.png";

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
            <img src={BG} alt="Main hero banner" className="hero-image" />
                <div className="hero-text">
                    <p>MINIMAL INTERRIOR DESIGN</p>
                    <h1>We minimize your waste in every step of the process</h1>
                </div>
            </div>
        </section>
    );
};

export default Hero;