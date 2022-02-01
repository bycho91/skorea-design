import React from "react";
import styled from "styled-components";
import SectionHeader from "./SectionHeader";

const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
`;
const Wrapper = styled.div`
  width: 85%;
`;
const Content = styled.p`
  font-size: 2vw;

  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
`;

const About = () => {
  return (
    <Container data-scroll-section>
      <SectionHeader title="About" />
      <Wrapper className="wrapper">
        <Content>
          <strong>South Korea</strong> is an extraordinary country filled with
          beautiful beaches, thriving cities, ancient temples, remarkable
          natural scenery and most importantly, friendly people. South Korea has
          come a long way since The Korean War ended in 1953. Almost all of
          South Korea was completely leveled during the war which is hard to
          imagine if you have seen Korea recently.
          <br />
          <br />
          It is home to an endless number of world class attractions and annual
          festivals that foreigners and locals alike enjoy each year. There’s
          something for everyone in Korea and a person could easily spend years
          traveling around the country exploring all that it has to offer.
        </Content>
      </Wrapper>
    </Container>
  );
};

export default About;
