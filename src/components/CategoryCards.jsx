import React from "react";
import "../styles/CategoryCards.css";
import CategoryCard from "../components/CategoryCard";
import sofa from "/public/assets/sofa.png";
import table from "/public/assets/table.png";
import lamp from "/public/assets/lamp.png";
import stool from "/public/assets/stool.png";
import chair from "/public/assets/chair.png";
import plant from "/public/assets/plant.png";

const categories = [
    { title: "Living Room", count: 23, image: sofa },
    { title: "Dining Room", count: 36, image: table },
    { title: "Bed Room", count: 17, image: lamp },
    { title: "Kitchen", count: 11, image: stool },
    { title: "Office", count: 9, image: chair },
    { title: "Outdoor", count: 45, image: plant },
];

const CategoryCards = () => {
  return (
    <div className="category-section">
      <div className="container">
        <div className="category-grid">
          {categories.map((cat, index) => (
            <CategoryCard key={index} {...cat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCards;