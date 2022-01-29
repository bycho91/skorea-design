import styled from "styled-components";
import React from "react";

const Container = styled.div`
  position: absolute;
  font-size: 3vw;
  right: 0;
  top: 50%;
  transform-origin: top right;
  transform: rotate(90deg) translateX(50%);
`;

const SectionHeader = ({ title }) => {
  return <Container>{title}</Container>;
};

export default SectionHeader;
