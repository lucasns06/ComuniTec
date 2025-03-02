import React, { useState, useEffect, useRef } from 'react';
import logoImg from '../assets/img/logo.png'
import { Link } from 'react-router-dom';
import '../styles/header.css'
import gsap from 'gsap';

const Header = () => {
    const [currentMenu, setcurrentMenu] = useState(false);
    const subMenu = useRef(null)
    const toggleMenu = () => {
        setcurrentMenu(prevState => !prevState);
    };

    useEffect(() => {
        if (subMenu.current) {
            if (currentMenu) {
                const height = subMenu.current.scrollHeight;
                gsap.to(subMenu.current, {
                    height: height,
                    duration: 0.5,
                    ease: "power4.inOut",
                });
            } else {
                gsap.to(subMenu.current, {
                    height: 0,
                    duration: 0.3,
                    ease: "power4.inOut",
                });
            }
        }
    }, [currentMenu])


    return (
        <div className="HeaderBorder">
            <header>
                <div className="logo">
                    <a href="/">
                        <img src={logoImg} width="80" alt='logo' />
                        <p>ComuniTec</p>
                    </a>
                </div>
                <svg width="28px" height="28px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" className='menuSvg' onClick={toggleMenu}>
                    <path fill="var(--cor-texto)" fillRule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z" />
                </svg>
                <nav className="menuPc">
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
                    </ul>
                </nav>
                <nav ref={subMenu} className={`menuMobile ${currentMenu ? 'menu-open' : 'menu-closed'}`}>
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
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;