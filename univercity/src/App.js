import CampusHead from "./components/campus.js";
import "./App.css";
import DescriptionPage from "./pages/Description";
import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccueilPage from "./pages/Accueil.js";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AccueilPage />} />
          <Route path="description" element={<DescriptionPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
