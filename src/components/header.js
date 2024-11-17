import React, { useState, useEffect } from 'react';
import lightImg from '../assets/img/light.png'
import darkImg from '../assets/img/dark.svg'
import configLightImg from '../assets/img/configLight.png';
import configImg from '../assets/img/config.png'
import logoImg from '../assets/img/logo.png'
import { Link } from 'react-router-dom'; // Importando Link para navegação interna
const Header = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false); // Estado para controlar o tema
    const [currentConfigImg, setCurrentConfigImg] = useState(configImg);
    const [currentthemeImg, setCurrentthemeImg] = useState(darkImg);

    const toggleTheme = () => {
        setIsDarkTheme(prevState => !prevState); // Alterna entre true/false
    };
    useEffect(() => {
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


    return (
        <div className="HeaderBorder">
            <header>
                <div className="logo">
                    <a href="index.html">
                        <img src={logoImg} width="50" />
                        <p className="destaque">ComuniTec</p>
                    </a>
                </div>
                <nav>
                    <ul>
                        <div className="container">
                            <Link to="/ComuniTec" state={{ scrollTo: 'inicioId' }}>Inicio</Link>
                            <div className="bar"></div>
                        </div>
                        <div className="container">
                            <a  href='/QuemSomos'> Quem Somos
                                {/* <Link to="/">Quem Somos</Link> */}
                            </a>
                            <div className="bar"></div>
                        </div>
                        <div className="container">
                            <Link to="/ComuniTec" state={{ scrollTo: 'sectionProduct' }}><button >Produto</button></Link>
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