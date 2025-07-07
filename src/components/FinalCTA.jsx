import React from "react";
import "../styles/FinalCTA.css";
import BG from "../assets/BG.png";

const FinalCTA = () => {
    return (
        <section className="ctacontainer" style={{ backgroundImage: `url(${BG})` }}>
            <div className="ctatext">
                <h1>Ready to have a decorated lifestyle?</h1>
                <button>Start Shopping</button>
            </div>
        </section>
    );
};

export default FinalCTA;