import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCharacters } from "./redux/actions";
import styled from "styled-components";

function App({ characters }) {
  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <Container>
      <ul>
        {characters?.map(({ name, id, image }) => (
          <li key={id}>
            <img src={image} alt={name} />
          </li>
        ))}
      </ul>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    characters: state.allCharacters,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getCharacters: dispatch(getCharacters()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px;
  ul{
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }
`;
