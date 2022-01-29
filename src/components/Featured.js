import React from "react";
import styled from "styled-components";
import { photos } from "../data";

const Container = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 3em;
  width: 90%;
  margin: 0 auto;

  img {
    clip-path: inset(0% 0% 0% 0%);
  }

  h6 {
    text-transform: uppercase;
    font-size: 1.5rem;
  }
`;

const SmallLayout = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const BigLayout = styled.div`
  text-align: right;

  flex: 2;
  position: relative;

  img {
    width: 70%;
    height: 900px;
    object-fit: cover;
  }
  h6 {
    position: absolute;
    transform: rotate(-90deg);
    right: 70%;
    bottom: 25px;
  }
`;

const Image = styled.img``;

const Featured = () => {
  const [first, second] = photos;

  return (
    <Container>
      <SmallLayout>
        <h6>history</h6>
        <Image src={first} />
      </SmallLayout>
      <BigLayout>
        <h6>night</h6>
        <Image src={second} />
      </BigLayout>
    </Container>
  );
};

export default Featured;
