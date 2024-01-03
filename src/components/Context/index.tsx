import React, { createContext, useState, ReactNode } from "react";

type ProductType = {
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

type CartItemType = {
  product: ProductType;
  quantity: number;
};

// Определяем тип для контекста
export type CartContextType = {
  cartItems: CartItemType[];
  addToCart: (product: ProductType) => void;
  removeFromCart: (productId: number) => void;
  changeQuantity: (productId: number, quantity: number) => void;
};

// Создаем контекст с пустым начальным значением
export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  changeQuantity: () => {},
});

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  const addToCart = (product: ProductType) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find(
        (item) => item.product.id === product.id
      );
      if (itemExists) {
        // Increase quantity if product is already in cart
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new card in cart
        return [...prevItems, { product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.product.id !== productId)
    );
  };

  const changeQuantity = (productId: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantity: quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, changeQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
