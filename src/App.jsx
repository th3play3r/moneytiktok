// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home"; // Подключаем компонент Home

const App = () => {
  return (
    <Router>
      <Layout />
      <div style={{ marginTop: "80px" }}> {/* Отступ от навигации */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Главная страница */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
