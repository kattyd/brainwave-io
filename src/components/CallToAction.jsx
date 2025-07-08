import React from "react";
import "../styles/CallToAction.css";

 function CallToAction() {
    return (
        <div className="cta-container">
            <div className="cta-image">
                <img src="src/assets/cta.png" className="base-image" />
            <div className="bitmap-card">
                <img src="src/assets/bitmapss.png" className="bitmap-image" />
             </div>
            </div>
            <div className="cta-text">
                <h2>Track your progress with <br />our advanced site.</h2>
                <p>We share common trends and strategies for improving your rental income and making sure you stay in high demand</p>
                <div className="shop-btn">
                    <button>Start shopping</button>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;