import React, { useState, useEffect, useRef } from "react";
import { Main } from "./style";
import { fetchProducts } from "../../api/fetch";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  console.log(fetchProducts);

  return (
    <Main className="px-3 px-sm-4 py-5 py-sm-5">
      <section className="w-100 h-100 d-flex align-items-center justify-content-center ">
        <div
          className="left w-100 d-flex flex-column gap-3 "
          style={{ maxWidth: "600px" }}
        >
          <h2 className="text-uppercase text-secondary fs-4 fw-bold">
            best online store of the year
          </h2>
          <h1 className="display-1 fw-bolder title">
            We don't do fashion, we are fashion
            <img
              src="assets/img/icons/smile.png"
              width="50"
              className="align-baseline"
            ></img>
          </h1>
          <a
            className=" rounded-3 bg-dark d-block text-white text-center fw-bold w-100;"
            style={{
              maxWidth: "220px",
              padding: "1.25rem",
              fontSize: "1.75rem",
            }}
            href="/product"
            role="button"
          >
            Shop now
          </a>
        </div>
        <div className="float-end w-100" style={{ maxWidth: "600px" }}>
          <img
            className="img-fluid shadow p-3 mb-5 bg-body-tertiary rounded"
            src="assets/img/main/fashion.jpg"
            alt="Fashion"
          ></img>
        </div>
      </section>
    </Main>
  );
};

export default Home;
