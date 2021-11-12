import React from "react";
import { NavItems, Header, Contact } from "./styles";

const Navbar: React.FC = () => {
  return (
    <Header>
      <NavItems>Home</NavItems>
      <NavItems>Services</NavItems>
      <Contact>Contact</Contact>
    </Header>
  );
};
export default Navbar;
