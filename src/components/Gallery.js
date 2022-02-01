import React, { useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";
import styled from "styled-components";
import { images } from "../data";
import GalleryItem from "./GalleryItem";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Container = styled.section`
  overflow-x: hidden;
  overflow-y: scroll;
  margin-bottom: 0;
`;

const GalleryWrapper = styled.div`
  width: 400% !important;
  height: 80vh;
  display: flex;
  flex-wrap: nowrap;
  margin: auto 0;
  /* height: 80%; */
  /* align-items: center; */
`;

const Gallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".gallery-item-wrapper");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: galleryRef.current,
        pin: true,
        scrub: 0.5,
        snap: 1 / (sections.length - 1),
        end: () => `+=${galleryRef.current.offsetWidth}`,
      },
    });

    // ScrollTrigger.refresh();
  }, []);

  return (
    <Container data-scroll-section>
      <GalleryWrapper ref={galleryRef}>
        {images.map((image, index) => (
          <GalleryItem key={image.title} index={index} image={image} />
        ))}
      </GalleryWrapper>
    </Container>
  );
};

export default Gallery;
