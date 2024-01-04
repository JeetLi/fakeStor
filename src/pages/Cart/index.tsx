import React, { useContext } from "react";
import { CartContext } from "../../components/Context/index";
import { Main } from "./style";
import CartItem from "../../components/CartItem";

interface Cart {}

const Cart = ({}: Cart) => {
  const { cartItems, removeFromCart, changeQuantity } = useContext(CartContext);

  const totalPrice = cartItems.reduce((total, currentItem) => {
    return total + currentItem.product.price * currentItem.quantity;
  }, 0);
  return (
    <Main className="py-5">
      <section className="container d-flex justify-content-between align-items-start my-5 flex-md-row flex-column">
        <ul
          className="d-flex flex-column gap-3 w-100"
          style={{ maxWidth: "600px" }}
        >
          {cartItems.map((item) => (
            <CartItem
              key={item.product.id}
              product={item.product}
              quantity={item.quantity}
            />
          ))}
        </ul>
        <div className="card shadow mx-3  w-100" style={{ maxWidth: "600px" }}>
          <div className="card-body text-center">
            <p className="text-uppercase h4 font-weight-bold mb-4">
              total: ${totalPrice.toFixed(2)}
            </p>
            <button className="btn btn-dark w-100 py-3 text-success h4 font-weight-bold">
              Purchase
            </button>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Cart;
