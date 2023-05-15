import React from "react";
import styled from "styled-components";
import LoginImage from "../assets/login2.webp";

export const LoginAccount = ({ setIsLogin }) => {
  return (
    <Container>
      <button onClick={() => setIsLogin(true)}>
        toch here, and enjoy this website
      </button>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${LoginImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  backdrop-filter: contain;
  position: relative;
  button {
    position: absolute;
    bottom: 5%;
    left: 35%;
    padding: 15px 30px;
    border-radius: 30px;
    border: 1px solid rgb(32, 233, 5);
    background: #000;
    color: rgb(32, 233, 5);
    font-size: 1.1rem;
    transition: 0.5s ease;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
