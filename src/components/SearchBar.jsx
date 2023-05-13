import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

export const Searchbar = () => {
  return (
    <Container>
      <input type="text" />
      <button>
        <AiOutlineSearch />
      </button>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 40px;
  display:flex;
  align-items:center;
  justify-content:center;
  input{
    border:none;
    outline: none;
    background: transparent;
    width: 80%;
    height: 100%;
    font-size: 1.2rem;
    color: rgb(32, 233, 5);
  }
  button{
    width: 10%;
    height:100%;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    svg{
      font-size: 30px;
      color: rgb(32, 233, 5);
    }
  }
`;
