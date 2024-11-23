import React, { useState, useEffect } from 'react';
import lightImg from '../assets/img/light.png'
import darkImg from '../assets/img/dark.svg'
import configLightImg from '../assets/img/configLight.png';
import configImg from '../assets/img/config.png'
import logoImg from '../assets/img/logo.png'
import { Link } from 'react-router-dom';
import '../styles/header.css'

const Header = () => {
    const savedTheme = localStorage.getItem("isDarkTheme") === "true";
    const [isDarkTheme, setIsDarkTheme] = useState(savedTheme); // Estado para controlar o tema
    const [currentConfigImg, setCurrentConfigImg] = useState(configImg);
    const [currentthemeImg, setCurrentthemeImg] = useState(darkImg);
    const [currentMenu, setcurrentMenu] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(prevState => !prevState); // Alterna entre true/false
    };
    const toggleMenu = () => {
        setcurrentMenu(prevState => !prevState); 
    };

    useEffect(() => {
        localStorage.setItem("isDarkTheme", isDarkTheme);

        const body = document.body;
        if (isDarkTheme) {
            body.classList.add('dark');
            setCurrentConfigImg(configLightImg);
            setCurrentthemeImg(lightImg)
        } else {
            body.classList.remove('dark');
            setCurrentConfigImg(configImg);
            setCurrentthemeImg(darkImg)
        }
    }, [isDarkTheme]); // O efeito será disparado sempre que isDarkTheme mudar

    useEffect(() =>{

    },[currentMenu])

    return (
        <div className="HeaderBorder">
            <header>
                <div className="logo">
                    <a href="index.html">
                        <img src={logoImg} width="50" />
                        <p className="destaque">ComuniTec</p>
                    </a>
                </div>
                <svg width="28px" height="28px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" className='menuSvg' onClick={toggleMenu}>
                            <path fill="var(--cor-texto)" fill-rule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z" />
                </svg>
                <nav className={`menu ${currentMenu ? 'menu-open' : 'menu-closed'}`}>
                    <ul>
                 
                        <div className="container">
                            <Link to="/" state={{ scrollTo: 'inicioId' }}>Inicio</Link>
                            <div className="bar"></div>
                        </div>
                        <div className="container">
                            <Link to="/" state={{ scrollTo: 'sectionProduct' }}>Produto</Link>
                            <div className="bar"></div>
                        </div>
                        <div className="container">
                            <Link to="/QuemSomos">Sobre Nós</Link>
                            <div className="bar"></div>
                        </div>
                        <div className="container">
                            <Link to="/Contato"><button >Contato</button></Link>
                        </div>
                        <div className="settings">
                            <img src={currentConfigImg} width="28px" style={{ transform: 'translate(0px, 2px)' }} id="configId" />
                            <div className="menu-hidden">
                                <div className="mudar-tema">
                                    <a id="toggle-theme" onClick={toggleTheme} >
                                        <img src={currentthemeImg} id="ImgTheme" alt={isDarkTheme ? 'Tema Claro' : 'Tema Escuro'} />
                                    </a>
                                </div>
                            </div>
                        </div>
                  
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;