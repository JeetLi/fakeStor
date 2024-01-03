import { StyledFooter } from "./style";
import Container from "../../common/Container/index";

interface Footer {}

const Footer = ({}: Footer) => {
  return (
    <StyledFooter className="footer bg-dark text-white py-3">
      <Container>
        <div className="row">
          <div className="col text-center">
            <p className="mb-0">Copyright © 2023 Daniil Pinchuk</p>
          </div>
          <div className="col text-center">
            <a
              className="btn btn-outline-light btn-social"
              href="https://github.com/JeetLi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github"
            >
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
