import React, { useState } from "react";
import MyRoutes from "./routers/routes";
import { LoginAccount } from "./components";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>{!isLogin ? <LoginAccount setIsLogin={setIsLogin} /> : <MyRoutes />}</>
  );
}

export default App;
