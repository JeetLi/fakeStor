import React, { useState, useEffect, useContext } from "react";
import { Main } from "./style";
import Card from "../../components/Card";
import { fetchProducts } from "../../api/fetch";
import { CartContext } from "../../components/Context/index";

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

const ProductList = () => {
  const { cartItems, addToCart, removeFromCart, changeQuantity } =
    useContext(CartContext);
  const [products, setProducts] = useState<Product[]>([]);
  console.log(cartItems);
  useEffect(() => {
    // Fetch the products from the API
    const getProducts = async () => {
      const data = await fetchProducts();
      console.log(data);
      if (data) {
        setProducts(data);
      }
    };

    getProducts();
  }, []);

  return (
    <Main className=" row  py-5">
      <section className="container row row-cols-1 justify-content-center row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {products.map((product) => (
          <Card key={product.id} product={product} addToCart={addToCart} />
        ))}
      </section>
    </Main>
  );
};

export default ProductList;
