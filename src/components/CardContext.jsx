import React, { useEffect } from "react";
import styled from "styled-components";
import { Card } from "./Card";
import { connect, useSelector } from "react-redux";
import { getCharacters } from "../redux/actions";

const CardContext = ({ character }) => {
  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <Container>
      {character?.map((e) => (
        <Card
          key={e.id}
          id={e.id}
          name={e.name}
          image={e.image}
          status={e.status}
        />
      ))}
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCharacters: dispatch(getCharacters()),
  };
};

const mapStateToProps = (state) => {
  return {
    character: state.allCharacters,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardContext);
const Container = styled.div`
  margin: 30px auto;
  width: 90%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
