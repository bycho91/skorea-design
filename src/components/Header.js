import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  position: relative;
  height: calc(100vh - 180px);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 2em;
  }
`;

const SideMenu = styled.ul`
  position: absolute;
  left: 10vw;
  top: 10vh;
  text-transform: lowercase;

  li {
    font-size: 1.3rem;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.02);
      color: gray;
    }
  }

  @media (max-width: 800px) {
    left: 50%;
    top: 10%;
    transform: translateX(-50%);
  }
`;

const MainContent = styled.div`
  text-transform: uppercase;
  text-align: right;
  font-size: 15vw;
  line-height: 0.8em;
  font-weight: 500;
  cursor: default;
  overflow-wrap: anywhere;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <SideMenu>
        <li>Home</li>
        <li>Products</li>
        <li>About Us</li>
      </SideMenu>
      <MainContent>
        Style
        <br />
        <span style={{ color: "#dc2f02" }}>&</span>
        <br />
        culture
      </MainContent>
    </HeaderContainer>
  );
};

export default Header;
