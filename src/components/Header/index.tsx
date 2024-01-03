import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Container from "../../common/Container/index";
import { CartContext } from "../../components/Context/index";
import { StyledHeader } from "./style";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const { cartItems } = useContext(CartContext);
  return (
    <StyledHeader className="header w-100 bg-dark py-4">
      <Container>
        <div className="wrapper row align-items-center">
          <h1 className="text-success font-weight-bold display-4 col">
            <Link to="" className="text-reset text-decoration-none display-1">
              FakeStor
            </Link>
          </h1>
          <nav className="col ">
            <ul className="nav align-items-center ">
              <li className="nav-item">
                <Link to="/" className="nav-link active text-white">
                  Home{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/product" className="nav-link text-white">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link text-white">
                  Contact
                </Link>
              </li>
              <li className="nav-item position-relative">
                <Link
                  style={{ padding: "0" }}
                  className="nav-link text-white"
                  to="/cart"
                  aria-label="cart"
                >
                  <img
                    src={"assets/img/icons/basket.png"}
                    className="card-img-top img-fluid"
                    alt="basket"
                    style={{}}
                  />
                  <span className="position-absolute bg-success text-dark rounded-circle">
                    {cartItems.length}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </StyledHeader>
  );
};
export default Header;
