import React from "react";
import SectionHeader from "./SectionHeader";
import styled from "styled-components";
import { images } from "../data";
import GalleryItem from "./GalleryItem";

const Container = styled.section`
  width: 400%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: unset;
`;

const GalleryWrapper = styled.div`
  height: 60%;
  display: flex;
  flex-wrap: none;
  background-color: black;
`;

const Gallery = () => {
  return (
    <Container data-scroll-section>
      {images.map((image, index) => (
        <GalleryItem key={image.title} index={index} image={image} />
      ))}
    </Container>
  );
};

export default Gallery;
