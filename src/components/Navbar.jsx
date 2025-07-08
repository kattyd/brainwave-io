import React from "react";
import "../styles/Navbar.css";
import cartIcon from "../assets/cart-simple.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Brainwave.io</div>
            <ul className="nav-links">
                <li>Demo</li>
                <li>Pages</li>
                <li>Support</li>
                <li>Contact</li>
            </ul>
            <span className="cart-icon"><img src={cartIcon} alt="Cart" /></span>
        </nav>
    );
};

export default Navbar;