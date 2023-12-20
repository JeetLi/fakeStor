import React from "react";
import Container from "../../common/Container/index";
// import {} from "./styles";

interface Header {}

const Header = ({}: Header) => {
  return;
  return (
    <Container>
      <h1>Заголовок</h1>
      <p>Этот текст будет внутри контейнера Bootstrap.</p>
    </Container>
  );
};
export default Header;
