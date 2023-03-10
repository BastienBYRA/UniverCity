import React from "react";
import Header from "./components/Header";
import DescriptionPage from "./pages/Description";
import ActuPage from "./pages/Actus.js";
import Inscription from "./pages/inscription.js";
import LeanCanvas from "./components/lean-canvas.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.js";
import AccueilPage from "./pages/Accueil.js";
import ContactPage from "./pages/Contact.js";

import "./App.css";
import "./font-awesome-4.7.0/css/font-awesome.min.css";
import FormationPage from "./pages/Formation";
import EntreprisesPage from "./pages/Entreprises";
import Mentions from "./components/mentions";

function App() {
  return (
    <div className="App bg-[#F1F1F0]">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AccueilPage />} />
          <Route path="description" element={<DescriptionPage />} />
          <Route path="formation" element={<FormationPage />} />
          <Route path="actus" element={<ActuPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="inscription" element={<Inscription />} />
          <Route path="entreprises" element={<EntreprisesPage/>} />
          <Route path="canva" element={<LeanCanvas/>} />
          <Route path="mentions-legales" element={<Mentions />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
