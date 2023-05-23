import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCharacter } from "../redux/actions";
import { Loading } from "../components/Loading";

export const Character = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.character);
  const loading = useSelector((state) => state.isLoading);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getCharacter(id));
  }, []);
  console.log(state)
  return (
    <>
     {loading ? (
        <Loading/>
      ) : (
        <Container>
          <div className="topcard">
            <figure>
              <img src={state.image} alt={state.name} />
            </figure>
          </div>
          <div className="info">
            <h1>{state.name}</h1>
            <h3>Estado del personaje: {state.status}</h3>
            <h3>Especie del personaje: {state.species}</h3>
            <h3>Sexo: {state.gender}</h3>
            <h3>Ubicacion actual: {state.location.name}</h3>
          </div>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  width: 90vw;
  height: 480px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid green;
  margin: 10px auto;
  .topcard {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidde;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 15%;
      left: 15%;
      width: 320px;
      height: 320px;
      border-radius: 50%;
      background: rgb(2, 0, 36);
      background: linear-gradient(
        90deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(99, 12, 43, 0.309943960494354) 30%,
        rgba(0, 212, 255, 1) 100%
      );
    }
    figure {
      position: relative;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      overflow: hidden;
      box-shadow: 1px 5px 10px #fff;
      img {
        backdrop-filter: cover;
      }
    }
  }
  .info {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 50px;
    h1 {
      width: 100%;
      text-align: center;
      font-size: 3em;
      color: rgb(32, 233, 5);
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff, 0 0 60px #fff,
        0 0 80px#fff, 0 0 110px#fff, 0 0 160px#fff;
    }
    h3 {
      color: rgb(32, 233, 5);
    }
  }
`;
