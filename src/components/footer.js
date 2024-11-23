import React from "react";
import logoImg from '../assets/img/logo.png'
import { Link } from 'react-router-dom'; 
import '../styles/footer.css'
const Footer = () => {


    return (
        <footer>
            <div className="logo">
                <a href="index.html">
                    <img src={logoImg} alt="ComuniTec Logo" />
                    <p className="destaque">ComuniTec</p>
                </a>
            </div>
            <div className="container-texto-footer">
                <div className="container-texto-footer-esquerda">
                    <h1>Info</h1>
                    <br />
                    <p>Escola Técnica Estadual Professor Horácio Augusto da Silveira</p>
                    <br />
                    <p>Técnico em Desenvolvimento de Sistemas</p>
                    <br />
                    <div className="container contFooter">
                        <a href="https://github.com/lucasns06/ComuniTec" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <div className="bar"></div>
                    </div>
                </div> <br/>
                <div className="container-texto-footer-meio">
                    <h1>Outros</h1> <br/>
                    <a>FAQ</a>
                </div> <br/>
                <nav className="container-texto-footer-direita">
                    <h1>Seções</h1>
                    <div className="container contFooter">
                        <br />
                        <Link to="/" state={{ scrollTo: 'inicioId' }}>Inicio</Link>
                        <div className="bar"></div>
                    </div>
                    <div className="container contFooter">
                        <br />
                        <Link to="/QuemSomos">Quem Somos</Link>
                        <div className="bar"></div>
                    </div>
                    <div className="container contFooter">
                        <br />
                        <Link to="/" state={{ scrollTo: 'sectionProduct' }}>Produto</Link>
                        <div className="bar"></div>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
