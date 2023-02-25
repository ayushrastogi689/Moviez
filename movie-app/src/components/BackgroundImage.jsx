import React from "react";
import styled from "styled-components";
import background from "../assets/signup.jpg";

export default function BackgroundImage() {
  return (
    <Container>
      <img src={background} alt="background" />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  img {
    height: 100vh;
    width: 100vw;
  }
`;
