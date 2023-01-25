import CampusHead from "./components/campus.js";
import "./App.css";
import DescriptionPage from "./pages/Description";
import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.js";
import AccueilPage from "./pages/Accueil.js";
import ContactPage from "./pages/Contact.js";

function App() {
  return (
    <div className="App bg-[#F1F1F0]">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AccueilPage />} />
          <Route path="description" element={<DescriptionPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
