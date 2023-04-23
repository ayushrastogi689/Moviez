import "./App.css";
import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/homepage" element={<HomePage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
