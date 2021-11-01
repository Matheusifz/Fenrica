import React from "react";
import styled from "styled-components";
import { NavItems, Header } from "./styles";

interface Navbar {}

const Navbar: React.FC = () => {
  return (
    <Header>
      <NavItems>Home</NavItems>
      <NavItems>Services</NavItems>
      <NavItems>Contact</NavItems>
    </Header>
  );
};
export default Navbar;
