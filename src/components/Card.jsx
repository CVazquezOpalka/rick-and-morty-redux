import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

export const Card = ({ image, name, id }) => {
  return (
    <Container>
      <Link to={`/character/${id}`}>
        <div className="topcard">
          <picture>
            <img src={image} alt={name} />
          </picture>
        </div>
        <div className="contentcard">
          <h3>
            <span>{name.length < 15 ? name : `${name.slice(0, 15)} ...`}</span>
          </h3>
        </div>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  width: 200px;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  transition: 0.5s;
  margin: 10px auto;
  overflow: hidde;
  border: 1px solid rgb(32, 233, 5);
  opacity: 0.7;
  transition: 0.3s;
  &:hover {
    transform: translateY(-10px);
    opacity: 1;
    box-shadow: 1px 5px 10px #fff;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
  .topcard {
    width: 100%;
    height: 100%;
    picture {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      overflow: hidden;
      img {
        width: 150px;
        height: 150px;
        object-fit: cover;
        border-radius: 50%;
      }
    }
  }
  .contentcard {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 13px;
    transition: 0.5s;
    h3 {
      width: 100%;
      text-align: center;
      font-size: 16px;
      text-transform: capitalize;
    }
  }
`;
