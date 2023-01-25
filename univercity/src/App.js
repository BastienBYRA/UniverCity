import React from 'react';
import Header from './components/Header';
import CampusHead from './components/campus.js';
import DescriptionPage from './pages/Description';
import ActuPage from './pages/Actus.js';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.js";
import AccueilPage from "./pages/Accueil.js";

import './App.css';

function App() {
  return (
<<<<<<< HEAD
    <div>
        <Header />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CampusHead />}/>
                <Route path="description" element={<DescriptionPage />} />
                <Route path="actus" element={<ActuPage />} />
            </Routes>
        </BrowserRouter>
=======
    <div className="App bg-[#F1F1F0]">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AccueilPage />} />
          <Route path="description" element={<DescriptionPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
>>>>>>> e78ec0bfa9aea7568db667bd94248145b4563e5d
    </div>
  );
};

export default App;
