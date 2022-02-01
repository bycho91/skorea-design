import React from "react";
import styled from "styled-components";
import { photos } from "../data";
import SectionHeader from "./SectionHeader";

const Container = styled.section`
  width: 100%;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  flex-basis: 100%;

  img {
    clip-path: inset(0% 0% 0% 0%);
  }

  h6 {
    text-transform: uppercase;
    font-size: 1.5rem;
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const FeaturedCard = styled.div`
  text-align: center;

  flex: 1;
  position: relative;
  transition: all 1s ease;

  img {
    width: 20vw;
    height: 80vh;
    object-fit: cover;
  }
  h6 {
    position: absolute;
    right: 0;
    top: 0;
    transform-origin: top right;
    transform: rotate(90deg) translateX(100%) translateY(50%);
  }

  &:hover {
    color: var(--primary-color);
    img {
      filter: blur(1px);
      transform: scale(1.02);
    }
  }

  @media (max-width: 800px) {
    h6 {
      position: relative;
      transform: unset;
    }
    img {
      width: 400px;
      height: 200px;
      object-fit: cover;
    }
  }
`;

const Image = styled.img``;

const Featured = () => {
  const [first, second, third] = photos;

  return (
    <Container data-scroll-section>
      <SectionHeader title="Featured" />
      <Wrapper className="wrapper">
        <FeaturedCard>
          <h6>history</h6>
          <Image src={first} />
        </FeaturedCard>
        <FeaturedCard>
          <h6>food</h6>
          <Image src={second} />
        </FeaturedCard>
        <FeaturedCard>
          <h6>night</h6>
          <Image src={third} />
        </FeaturedCard>
      </Wrapper>
    </Container>
  );
};

export default Featured;
