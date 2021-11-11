import * as React from "react";
import { Container } from "./style";
import Tree from "../../assets/img/tree.svg";

const Hero: React.FC = () => {
  return (
    <Container>
      <img src={Tree} alt="Arvore" />
    </Container>
  );
};

export default Hero;
