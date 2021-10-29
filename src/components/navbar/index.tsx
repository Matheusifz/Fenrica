import React from "react";
import styled from "styled-components";
import { Header } from "./styles";

interface Navbar {}

const Navbar: React.FC = () => {
  return (
    <div className="header">
      <div className="Nav">
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Contact</h3>
      </div>
    </div>
  );
};

export default Navbar;
