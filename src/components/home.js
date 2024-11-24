import { useEffect } from 'react';
import React from "react";
import gifHome from '../assets/img/QS.gif'
import odsImg from '../assets/img/ods10.svg'
import gsap from "gsap";
import { Link } from 'react-router-dom';
import '../styles/home.css';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Home = () => {

    useEffect(() => {
        const welcome = document.querySelector('.Welcome-title')
        gsap.from(welcome, { x: -50, opacity: 0 })
        gsap.to(welcome, { duration: 2, x: 0, opacity: 1 })

        const welcome2 = document.querySelector('.Welcome-title2')
        gsap.from(welcome2, { x: 50, opacity: 0 })
        gsap.to(welcome2, { duration: 2, x: 0, opacity: 1 })

        const gifHome = document.querySelector('.gifHome')
        gsap.from(gifHome, { opacity: 0 })
        gsap.to(gifHome, { duration: 2, opacity: 1 })

        const text = document.querySelector('.text')
        gsap.from(text, { opacity: 0 })
        gsap.to(text, { duration: 2, opacity: 1 })

        gsap.registerPlugin(ScrollTrigger);

        const odsContainer = document.querySelector('.odsContainer');

        gsap.fromTo(odsContainer, { opacity: 0, },
            {
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    start: "top 60%",
                    trigger: odsContainer
                },
            });


    }, [])

    return (
        <>
            <section id="inicioId">
                <div className="text">
                    <h1 className="Welcome-title">Bem vindo à</h1>
                    <h1 className="destaque Welcome-title2">ComuniTec</h1>
                    <br />
                    <p>Onde sua comunicação se torna mais acessível! <br />
                        Conheça nossa historia e nossas soluções!! </p>

                    <br /> <br /> <br /> <br />
                    <Link to="/" state={{ scrollTo: 'odsContainer' }} className="link">
                        <button>Saber Mais</button>
                        </Link>
                </div>
                <img src={gifHome} alt="imagem home" className='gifHome' />
            </section>
            <section className='odsContainer' id='odsContainer'>
                <img src={odsImg} width={200} />
                <p className='odsTexto'>Estamos comprometidos em contribuir
                    diretamente para o Objetivo de Desenvolvimento
                    Sustentável 10: Reduzir as Desigualdades,
                    ao oferecer uma solução que elimina barreiras na
                    comunicação e promove a integração social de um
                    grupo frequentemente marginalizado. Com
                    Comunica, indivíduos neurodivergentes
                    têm a possibilidade de expressar sentimentos,
                    necessidades e ideias de forma prática e eficiente,
                    reduzindo desigualdades e fortalecendo sua autonomia.</p>
            </section>
        </>
    );
}
export default Home;