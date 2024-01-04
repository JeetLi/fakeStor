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
    <Main className=" row px-5 sm:px-1 sm:py-8 py-5 align-item-center  mx-0">
      <section className="container row row-cols-1 justify-content-center row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mx-0 ">
        {products.map((product) => (
          <Card key={product.id} product={product} addToCart={addToCart} />
        ))}
      </section>
    </Main>
  );
};

export default ProductList;
