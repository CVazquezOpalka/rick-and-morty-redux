import React from "react";
import styled from "styled-components";

export const Background = () => {
  return (
    <Container>
      <div className="container">
        <div className="bubbles">
          <span style={{ "--i": "11" }}></span>
          <span style={{ "--i": "12" }}></span>
          <span style={{ "--i": "10" }}></span>
          <span style={{ "--i": "14" }}></span>
          <span style={{ "--i": "23" }}></span>
          <span style={{ "--i": "18" }}></span>
          <span style={{ "--i": "16" }}></span>
          <span style={{ "--i": "24" }}></span>
          <span style={{ "--i": "19" }}></span>
          <span style={{ "--i": "20" }}></span>
          <span style={{ "--i": "22" }}></span>
          <span style={{ "--i": "25" }}></span>
          <span style={{ "--i": "18" }}></span>
          <span style={{ "--i": "21" }}></span>
          <span style={{ "--i": "13" }}></span>
          <span style={{ "--i": "15" }}></span>
          <span style={{ "--i": "26" }}></span>
          <span style={{ "--i": "17" }}></span>
          <span style={{ "--i": "13" }}></span>
          <span style={{ "--i": "28" }}></span>
          <span style={{ "--i": "11" }}></span>
          <span style={{ "--i": "12" }}></span>
          <span style={{ "--i": "10" }}></span>
          <span style={{ "--i": "14" }}></span>
          <span style={{ "--i": "23" }}></span>
          <span style={{ "--i": "18" }}></span>
          <span style={{ "--i": "16" }}></span>
          <span style={{ "--i": "24" }}></span>
          <span style={{ "--i": "19" }}></span>
          <span style={{ "--i": "20" }}></span>
          <span style={{ "--i": "22" }}></span>
          <span style={{ "--i": "25" }}></span>
          <span style={{ "--i": "18" }}></span>
          <span style={{ "--i": "21" }}></span>
          <span style={{ "--i": "13" }}></span>
          <span style={{ "--i": "15" }}></span>
          <span style={{ "--i": "26" }}></span>
          <span style={{ "--i": "17" }}></span>
          <span style={{ "--i": "13" }}></span>
          <span style={{ "--i": "28" }}></span>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #1b1b1b;
  .container {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    .bubbles {
      position: relative;
      display: flex;
      span {
        position: relative;
        min-width: 30px;
        height: 30px;
        background: #fff;
        box-shadow: 0 0 0 10px #4fc3dc44, 0 0 50px #705afe, 0 0 100px #4fc3dc;
        margin: 0 4px;
        border-radius: 50%;
        animation: animate 15s linear infinite;
        animation-duration: calc(75s / var(--i));
        &:nth-child(even) {
          background: #ffc107;
          box-shadow: 0 0 0 10px #f0db4f, 0 0 50px #ff2d75, 0 0 100px #f23b00;
        }
      }
    }
  }

  @keyframes animate {
    0% {
      transform: translateY(100vh) scale(0);
    }
    100% {
      transform: translateY(-10vh) scale(1);
    }
  }
`;

/* 

*/
