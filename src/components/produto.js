import React from "react";
import playImg from '../assets/img/playstore.svg'
import macImg from '../assets/img/mac.svg'
import appLogo from '../assets/img/aplicativologo.png'
import appTela from '../assets/img/TelaApp.png'
import appTela2 from '../assets/img/Necessidades.png'
import appTela3 from '../assets/img/TelaApp3.png'
import pitch from '../assets/videos/PitchComunica.mp4'
import '../styles/produto.css'
import gsap from "gsap";
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import ScrollTrigger from "gsap/ScrollTrigger";

const Produto = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const productSection = document.querySelector('.sectionProduct');

        gsap.fromTo(productSection, { opacity: 0, },
            {
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    start: "top 60%",
                    trigger: productSection
                },
            });

    }, []);


    return (
        <>
            <div className="sectionProduct" id="sectionProduct">

                <img src={appLogo} className="sectionProductImg1" width="400px" />
                <div className="ProductText">
                    <h1 className="Product-title destaque">Comunica</h1>
                    <br />
                    <p>Nós desenvolvemos um aplicativo com o intuito de ajudar <br />
                        pessoas com dificuldade de se comunicar </p><br /> <br />

                    <ul style={{ textAlign: 'left' }}>
                        <li>Transforme audio e voz usando nosso sintetizador</li>
                        <li>Mostre o que você quer com as imagens selecionadas</li>
                        <li>Peça ajuda em situações de desespero</li>
                    </ul>


                </div>
            </div>
            <div className="ProductText">
                <p style={{ textAlign: 'center' }}>Veja abaixo como funciona o aplicativo</p>  <br /> <br />
            </div>
            <div className="sectionProduct2">

            </div>
            <div className="sectionProduct3">
                <video controls>
                    <source src={pitch} type="video/mp4" />
                        Seu navegador não suporta a tag de vídeo.
                </video>
                <div className="downloadButtons">
                    <a href="https://play.google.com/store/apps?hl=pt-BR" target="_blank" className="downloadBtn">
                        <img src={playImg} className="downloadIcon" />
                        <div>
                            DISPONÍVEL NO <br />
                            <strong>Google Play</strong>
                        </div>
                    </a>
                    <a href="https://www.apple.com/br/app-store/" target="_blank" className="downloadBtn">
                        <img src={macImg} className="downloadIcon" />
                        <div>
                            Baixar na <br />
                            <strong>App Store</strong>
                        </div>
                    </a>
                </div>
            </div>
            <div className="ProductText" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <p>Quer saber mais da nossa empresa?</p> <br />
                <Link to="/QuemSomos">
                    <button style={{ fontSize: '22px', width: 'max-content' }}>Quem somos</button>
                </Link>
                <br />
            </div>
        </>
    );
}
export default Produto;