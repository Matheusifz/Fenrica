import styled, { keyframes } from "styled-components";

export const Content = styled.div`
  width: 350px;
  height: 120px;

  background: #f2f9fe;
  background: linear-gradient(top, #f2f9fe 5%, #d6f0fd 100%);
  background: -webkit-linear-gradient(top, #f2f9fe 5%, #d6f0fd 100%);
  background: -moz-linear-gradient(top, #f2f9fe 5%, #d6f0fd 100%);
  background: -ms-linear-gradient(top, #f2f9fe 5%, #d6f0fd 100%);
  background: -o-linear-gradient(top, #f2f9fe 5%, #d6f0fd 100%);

  border-radius: 100px;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;

  position: relative;
  margin: 120px auto 20px;

  &:before {
    width: 180px;
    height: 180px;
    top: -90px;
    right: 50px;
    border-radius: 200px;
    -webkit-border-radius: 200px;
    -moz-border-radius: 200px;

    content: "";
    position: absolute;
    background: #f2f9fe;
    z-index: -1;
  }
  &:after {
    width: 100px;
    height: 100px;
    top: -50px;
    left: 50px;
    border-radius: 100px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;

    content: "";
    position: absolute;
    background: #f2f9fe;
    z-index: -1;
  }
`;
export const Animation = styled.div`
  transition: all 1s ease-in-out;
  -webkit-transition: all 1s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
  -ms-transition: all 1s ease-in-out;
  position: absolute;
  &:hover {
    transform: translate(3em, 0);
    -webkit-transform: translate(3em, 0);
    -moz-transform: translate(3em, 0);
    -o-transform: translate(3em, 0);
    -ms-transform: translate(3em, 0);
  }
`;
