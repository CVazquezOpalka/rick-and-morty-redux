import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Character, Login, Search, MyList } from "../pages/index";
import { Navbar } from "../components/index";

const MyRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<Character />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favorite" element={<MyList />} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
