import React from "react";
import styled from "styled-components";
import ErrorImage from "../assets/Error404.jpg";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <picture>
        <img src={ErrorImage} alt="error image" />
      </picture>
      <button onClick={() => navigate("/")}>Get me back home</button>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  picture {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      backdrop-filter: cover;
    }
  }
  button {
    position: absolute;
    bottom: 3.75%;
    left: 42.5%;
    padding: 15px 50px;
    border-radius: 50px;
    border: 1px solid rgb(32, 233, 5);
    background: #000;
    color: rgb(32, 233, 5);
    transition: 0.5s ease;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
