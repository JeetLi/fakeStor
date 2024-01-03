import React, { useContext } from "react";
import { CartContext } from "../../components/Context/index";
import { Main } from "./style";

interface Cart {}

const Cart = ({}: Cart) => {
  const { cartItems, removeFromCart, changeQuantity } = useContext(CartContext);
  // Рендер товаров в корзине и итоговой суммы // ...
  return (
    <Main className="">
      <div>
        {/* Список товаров в корзине */}
        <button>Сделать заказ</button>
      </div>
    </Main>
  );
};

export default Cart;
