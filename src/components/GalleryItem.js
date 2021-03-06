import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const GalleryItemWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 80%;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  flex: 4;
`;

const ImageInfo = styled.div`
  padding: 0 20px;
  flex: 2;
`;

const Title = styled.h1`
  font-size: 3vw;
`;
const Subtitle = styled.h6`
  font-size: 1.5rem;
  color: gray;
`;

const GalleryItem = ({ image: { src, title, subtitle, category }, index }) => {
  return (
    <Container className="gallery-item-wrapper">
      <GalleryItemWrapper>
        <ImageInfo>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </ImageInfo>
        <Image src={src} alt={title} />
      </GalleryItemWrapper>
    </Container>
  );
};

export default GalleryItem;
