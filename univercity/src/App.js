import CampusHead from './components/campus.js';
import './App.css';
import DescriptionPage from './pages/Description';
import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CampusHead />} />
          <Route path="description" element={<DescriptionPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
