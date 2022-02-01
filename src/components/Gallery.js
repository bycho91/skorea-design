import React, { useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";
import styled from "styled-components";
import { images } from "../data";
import GalleryItem from "./GalleryItem";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Container = styled.section`
  width: 400%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: unset;
  background-color: black;
`;

const GalleryWrapper = styled.div`
  height: 80%;
  display: flex;
  flex-wrap: none;
  background-color: white;
  align-items: center;
`;

const Gallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".gallery-item-wrapper");

    gsap.to(sections, {
      xPercent: -100 * (sections - 1),
      ease: "none",
      scrollTrigger: {
        start: "top top",
        trigger: galleryRef.current,
        scroller: "#scroller",
        pin: false,
        scrub: 0.5,
        snap: 1 / (sections.length - 1),
        end: () => `+=${galleryRef.current.offsetWidth}`,
      },
    });
    ScrollTrigger.refresh();
  }, []);

  return (
    <Container data-scroll-section id="scroller">
      <GalleryWrapper ref={galleryRef}>
        {images.map((image, index) => (
          <GalleryItem key={image.title} index={index} image={image} />
        ))}
      </GalleryWrapper>
    </Container>
  );
};

export default Gallery;
