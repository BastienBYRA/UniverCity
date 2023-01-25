import React from 'react';
import Header from './components/Header';
import CampusHead from './components/campus.js';
import DescriptionPage from './pages/Description';
import ActuPage from './pages/Actus.js';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer.js";
import AccueilPage from "./pages/Accueil.js";

import './App.css';

function App() {
    return (
        <div className="App bg-[#F1F1F0]">
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AccueilPage/>}/>
                    <Route path="description" element={<DescriptionPage/>}/>
                    <Route path="actus" element={<ActuPage/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    );
}

export default App;
