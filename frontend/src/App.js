import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import LandingPage from "./pages/landingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/home" element={<LandingPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
