import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 90px;
  font-weight: 700;
  letter-spacing: 2px;
`;

const Side = styled.div`
  font-size: 1.5rem;
  text-transform: uppercase;
  transition: all 0.3s ease;
  &:hover {
    color: #dc2f02;
    transform: scale(1.02);
    cursor: pointer;
  }

  @media(max-width:500px) {
    font-size: 1rem;
  }
`;

const Center = styled.a`
  font-size: 2.5rem;
  text-transform: uppercase;
  color: #dc2f02;

  transition: all 0.3s ease;

  &:hover {
    text-decoration: line-through;
    cursor: pointer;
    color: black;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Side>Menu</Side>
      <Center>S.Korea</Center>
      <Side>Cart</Side>
    </NavbarContainer>
  );
};

export default Navbar;
