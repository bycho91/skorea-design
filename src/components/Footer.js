import React from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  margin-bottom: 0;
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container data-scroll-section>
      <FooterWrapper>
        <h1>SKorea Designs &copy;</h1>
        <h6>This website was created by Benjamin C</h6>
      </FooterWrapper>
    </Container>
  );
};

export default Footer;
