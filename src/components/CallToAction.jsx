import React from "react";
import "../styles/CallToAction.css";

 function CallToAction() {
    return (
        <div className="cta-container">
            <div className="cta-image">
                <img src="src/assets/cta.png"/>
                <div className="bitmap">
                    <img src="src/assets/bitmapss.png" />
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