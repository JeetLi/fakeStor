import React, { MouseEventHandler } from "react";
import { CartContextType } from "../Context/index";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface CardProps {
  product: Product;
  addToCart: CartContextType["addToCart"];
}

const Card: React.FC<CardProps> = ({ product, addToCart }) => {
  const handleAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    addToCart(product);
  };

  return (
    <article
      className="card border border-secondary shadow-lg mx-3"
      style={{ cursor: "pointer" }}
    >
      <Link
        className="row justify-content-center border-bottom "
        style={{ minHeight: "250px", maxHeight: "250px" }}
        to={`/product/${product.id}`}
      >
        <img
          src={product.image}
          className="card-img-top img-fluid"
          alt={product.title}
          style={{
            maxWidth: "150px",
            maxHeight: "200px",
            display: "block",
            margin: "auto",
          }}
        />
      </Link>
      <div className="card-body">
        <Link
          to={`/product/${product.id}`}
          className="text-decoration-none text-dark"
        >
          <h3
            className="card-title h5"
            style={{ minHeight: "150px", maxHeight: "150px" }}
          >
            {product.title}
          </h3>
          <p className="h4">${product.price.toFixed(2)}</p>
        </Link>
        <button
          className="btn btn-dark btn-lg w-100 text-success"
          style={{ cursor: "pointer", transition: "opacity.3s" }}
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      </div>
    </article>
  );
};

export default Card;
