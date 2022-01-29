import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
`;

const Span = styled.span`
  width: 20vw;
  height: 2px;
  background-color: var(--primary-color);
`;

const Divider = () => {
  return (
    <Container>
      <Span />
    </Container>
  );
};

export default Divider;
