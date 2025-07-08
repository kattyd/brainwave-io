import React from "react";
import "../styles/FinalCTA.css";
import BG from "../assets/finalbg.png";

const FinalCTA = () => {
    return (
        <section className="cta-contain" style={{ backgroundImage: `url(${BG})` }}>
            <div className="cta-txt">
                <h1>Ready to have a decorated lifestyle?</h1>
                <button>Start Shopping</button>
            </div>
        </section>
    );
};

export default FinalCTA;