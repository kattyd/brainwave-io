import React from "react";
import "../styles/CategoryCard.css";

const CategoryCard = ({ title, count, image }) => {
    return (
        <div className="category-card">
            <h4>{title}</h4>
            <p>{count} items</p>
            <img src={image} alt={title} />
        </div>
    );
};

export default CategoryCard;