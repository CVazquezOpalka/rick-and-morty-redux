import React from "react";
import styled from "styled-components";
import { DotWave } from "@uiball/loaders";

export const Loading = () => {
  return (
    <Container>
      <div className="loader">
        <DotWave size={100} speed={1} color="white" />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  .loader{
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
