import React from "react";
import styled from "styled-components";
import CardContext from "../components/CardContext";

export const Home = () => {
  return (
    <Container>
      <CardContext />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
