import React from "react";
import "../styles/ProductGallery.css"
import sofas from "../assets/sofas.png";
import basket from "../assets/basket.png";
import sidetable from "../assets/sidetable.png";
import greychair from "../assets/greychair.png";
import stools from "../assets/stools.png";
import orangechair from "../assets/orangechair.png";
import blackchair from "../assets/blackchair.png";
import bluechair from "../assets/bluechair.png";

const products = [
    { title: "Minimal Chair", price: "$120", image: sofas },
    { title: "Minimal Chair", price: "$120", image: basket },
    { title: "Minimal Chair", price: "$120", image: sidetable },
    { title: "Minimal Chair", price: "$120", image: greychair },
    { title: "Minimal Chair", price: "$120", image: stools },
    { title: "Minimal Chair", price: "$120", image: orangechair },
    { title: "Minimal Chair", price: "$120", image: blackchair },
    { title: "Minimal Chair", price: "$120", image: bluechair },
];

const ProductGallery = () => {
    return (
        <section className="product-gallery">
            <div className="gallery-header">
                <h2>Explore All Products</h2>
            </div>

            <div className="product-grid">
                {products.map((product, index) => (
                    <div className="product-card" key={index}>
                        <div className="product-img">
                            <img src={product.image} alt={product.title} />
                        </div>
                        <p>{product.price}</p>
                        <h4>{product.title}</h4>
                        <p className="rate">@@@@@</p>
                    </div>
                ))}
            </div>
            <a href="#" className="check-all">Check all products</a>
        </section>
    );
};

export default ProductGallery;
