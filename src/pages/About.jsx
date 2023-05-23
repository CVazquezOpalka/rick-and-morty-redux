import React from "react";
import styled from "styled-components";
import heroImage from "../assets/hero.png";

export const About = () => {
  return (
    <Container>
      <picture>
        <img src={heroImage} alt="imagen de cristian" />
      </picture>
      <div className="title">
        <h1>
          Creado por: <span>Cristian Miguel Vazquez Opalka</span>
        </h1>
      </div>
      <section className="content">
        <p>
          Esta pagina fue creadacon el fin de ser evaluado para la plataforma
          soy henry, sean libres de disfrtarla, como yo disfrute el hacerla, en
          este{" "}
          <a href="#" target="_blank">
            Link
          </a>{" "}
          encontraran el codigo fuente de la misma.
          <br />
          Los estilos de la pagina, fueron creados con styled components, para
          ver mas de mi contenido, puedes visitar este{" "}
          <a href="#" target="_blank">
            Link
          </a>{" "}
          para ir a mi pagina de portfolio
        </p>
      </section>
    </Container>
  );
};

const Container = styled.div`
  color: rgb(32, 233, 5);
  width: 100vw;
  height: 75vh;
  border: 1px solid rgb(32, 233, 5);
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  padding: 30px 50px;
  picture {
    width: 250px;
    height: 250px;
    border: 1px solid rgb(32, 233, 5);
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      backdrop-filter: contain;
    }
  }
  .title {
    h1 {
      width: 100%;
      text-align: center;
      font-size: 1.3em;
    }
  }
  .content {
    p {
      width: 600px;
      a {
        text-decoration: none;
        color: rgb(32, 233, 5);
        font-weight: 700;
        transition: 0.5s;
        &:hover {
          border-bottom: 1px solid rgb(32, 233, 5);
        }
      }
    }
  }
`;
