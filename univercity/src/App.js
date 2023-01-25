import React from 'react';
import Header from './components/Header';
import CampusHead from './components/campus.js';
import DescriptionPage from './pages/Description';
import ActuPage from './pages/Actus.js';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div>
        <Header />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CampusHead />}/>
                <Route path="description" element={<DescriptionPage />} />
                <Route path="actus" element={<ActuPage />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;
