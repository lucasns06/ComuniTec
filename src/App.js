import './App.css';
import React, { useEffect } from 'react';
import Header from './components/header';
import Home from './components/home.js';
import QuemSomos from './components/quemSomos';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Produto from './components/produto';
import Footer from './components/footer';
import ScrollToTop from './components/ScrollToTop';
import Contato from './components/contato';

function App() {
//push
  const location = useLocation();

  useEffect(() => {

    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route index path="/" element={<><Home /><Produto />  </>} />
        <Route path="/QuemSomos" element={<QuemSomos />} />
        <Route path="/Contato" element={<Contato />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
