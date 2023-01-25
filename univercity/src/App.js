import React from 'react';
import Header from './components/Header';
import CampusHead from './components/campus.js';
import DescriptionPage from './pages/Description';
import ActuPage from './pages/Actus.js';
import Inscription from "./components/inscription";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.js";
import AccueilPage from "./pages/Accueil.js";
import ContactPage from "./pages/Contact.js";

import './App.css';
import './font-awesome-4.7.0/css/font-awesome.min.css';

function App() {
  return (
    <div className="App bg-[#F1F1F0]">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AccueilPage />} />
          <Route path="description" element={<DescriptionPage />} />
          <Route path="actus" element={<ActuPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="inscription" element={<Inscription />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
