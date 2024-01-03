import axios from "axios";

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

export const fetchProducts = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products/");
    console.log(response.data);
    return response.data; // Return the data for use in your component
  } catch (error) {
    console.error("There was an error!", error);
  }
};

export const fetchProduct = async (id: number): Promise<Product> => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
  return data;
};
