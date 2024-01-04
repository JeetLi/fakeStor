
import React, { useContext } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { CartContext } from "../../components/Context/index";
import { StyledHeader } from "./style";
import { Link } from "react-router-dom";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const { cartItems } = useContext(CartContext);

  return (
    <StyledHeader className="header w-100 bg-dark py-4">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            FakeStor
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav className=" align-items-end ml-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/product">
                <Nav.Link>Product</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <img
                    src={"assets/img/icons/basket.png"}
                    alt="basket"
                    style={{ maxWidth: "24px" }}
                  />
                  {cartItems.length > 0 && (
                    <Badge pill bg="success" text="dark">
                      {cartItems.length}
                    </Badge>
                  )}
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </StyledHeader>
  );
};

export default Header;
