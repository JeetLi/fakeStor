import React from "react";
import { Container as BootstrapContainer } from "react-bootstrap";

type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <BootstrapContainer>{children}</BootstrapContainer>;
};

export default Container;
