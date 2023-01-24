import CampusHead from './components/campus.js';
import './App.css';
import Footer from './components/Footer.js';
import DescriptionPage from './pages/Description';
import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      {/* <CampusHead/> */}
      <DescriptionPage />
      <Footer />
    </>
  );
}

export default App;
