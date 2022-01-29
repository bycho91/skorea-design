import React from "react";
import styled from "styled-components";
import SectionHeader from "./SectionHeader";
import Divider from "./Divider";

const HeaderContainer = styled.section`
  position: relative;
  height: calc(100vh - 90px);
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
  line-height: 0.75em;
  font-weight: 500;
  cursor: default;
  overflow-wrap: anywhere;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <SectionHeader title="Home" />
      <SideMenu>
        <li>Home</li>
        <li>Featured</li>
        <li>Gallery</li>
      </SideMenu>
      <MainContent>
        Style
        <br />
        <span style={{ color: "var(--primary-color)" }}>&</span>
        <br />
        culture
      </MainContent>
      <Divider />
    </HeaderContainer>
  );
};

export default Header;
