import React from "react";
import "../styles/Testimonials.css";
import test from "../assets/test.png";
const Testimonials = () => {
    return (
         <div className="t-container">
            <div className="t-text">
                <h1>''</h1>
                <p className="rate">★★★★★</p>
                <div className="testimony">
                    <p>"OMG! I cannot believe i got a brand <br />new room after getting your services. It was super<br /> easy and get started."</p>
                </div>
            </div>
            <div className="t-image">
                <img src={test} />
            </div>
         </div>
    );
};

export default Testimonials;