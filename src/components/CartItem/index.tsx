import React, { MouseEventHandler, useContext } from "react";
import { CartContext } from "../../components/Context/index";

type Product = {
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
};

interface cartItem {
  product: Product;
  quantity: number;
}

const СartItem: React.FC<cartItem> = ({ product, quantity }) => {
  const { cartItems, removeFromCart, changeQuantity } = useContext(CartContext);

  const onClickPlus = () => {
    changeQuantity(product.id, quantity + 1);
  };

  const onClickMinus = () => {
    if (quantity > 1) {
      changeQuantity(product.id, quantity - 1);
    } else {
      removeFromCart(product.id);
    }
  };

  return (
    <li>
      <article className="card flex-row shadow p-3 mb-5 bg-white rounded d-flex gap-3 position-relative">
        <img
          src={product.image}
          className="img-fluid"
          alt={product.title}
          style={{ maxWidth: "150px" }}
        />
        <div className="d-flex flex-column justify-content-center">
          <h3 className="h5 font-weight-bold text-dark">{product.title}</h3>
          <p className="h5">${product.price.toFixed(2)}</p>
          <div className="d-flex flex-wrap align-items-center">
            <button className="btn btn-outline-danger" onClick={onClickMinus}>
              -
            </button>
            <p className="m-3">{quantity}</p>
            <button className="btn btn-outline-success" onClick={onClickPlus}>
              +
            </button>
          </div>
        </div>
        <button
          className="btn-close position-absolute m-1 top-0 end-0"
          onClick={() => removeFromCart(product.id)}
        ></button>
        <p className="h5 font-weight-bold position-absolute m-3 end-0 bottom-0">
          ${(Number(product.price) * quantity).toFixed(2)}
        </p>
      </article>
    </li>
  );
};

export default СartItem;
