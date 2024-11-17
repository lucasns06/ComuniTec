import React from "react";
import logoImg from '../assets/img/logo.png'
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
                        <a href="index.html">Inicio</a>
                        <div className="bar"></div>
                    </div>
                    <div className="container contFooter">
                        <br />
                        <a href="#quemSomosId">Quem Somos</a>
                        <div className="bar"></div>
                    </div>
                    <div className="container contFooter">
                        <br />
                        <a href="Produto.html">Produto</a>
                        <div className="bar"></div>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
