import './App.css';
import React, {useEffect} from 'react';
import Header from './components/header';
import Home from './components/home';
import QuemSomos from './components/quemSomos';
import Sugestao from './components/sugestao';
import { BrowserRouter as Router, Routes, Route, useLocation   } from "react-router-dom";
import Produto from './components/produto';
import Footer from './components/footer';

function App() {

  const location = useLocation();

  useEffect(() => {
    // Verificar se o state contém a informação para rolar até um id
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<><Home /><Produto />  </>} />
          <Route path="/QuemSomos" element={<><QuemSomos /> <Sugestao /></>} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
