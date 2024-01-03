import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../api/fetch";
import { Main } from "./style";

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

const Description: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const getProduct = async () => {
      if (id) {
        const data = await fetchProduct(parseInt(id));
        if (data) {
          setProduct(data);
        }
      }
    };

    getProduct();
  }, [id]);
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Main className="py-5">
      <article className="container mx-auto d-flex flex-column gap-3">
        <a
          className="btn btn-dark text-success px-3 py-2 rounded block col col-lg-3"
          href="/product"
        >
          ← Back to all products
        </a>
        <div className="card shadow-lg">
          <div className="row g-0">
            <div className="justify-content-center row py-5 col-6 col-md-4">
              <img
                src={product.image}
                className="img-fluid rounded-start"
                alt={product.title}
                style={{ maxWidth: "250px" }}
              />
            </div>
            <div className="col ">
              <section className="card-body d-flex flex-column gap-3">
                <h3 className="card-title h2">{product.title}</h3>
                <p className="h1">${product.price.toFixed(2)}</p>
                <p className="card-text">{product.description}</p>
                <button className="btn btn-dark text-success w-100 py-3">
                  Add to cart
                </button>
              </section>
            </div>
          </div>
        </div>
      </article>
    </Main>
  );
};

export default Description;
