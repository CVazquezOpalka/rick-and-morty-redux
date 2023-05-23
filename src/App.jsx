import React, { useState } from "react";
import styled from "styled-components";
import MyRoutes from "./routers/routes";
import { LoginAccount } from "./components";
import { Background } from "./components/Background";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Container>
      {!isLogin ? <LoginAccount setIsLogin={setIsLogin} /> : <MyRoutes />}
    </Container>
  );
}

export default App;

const Container = styled.div``;
