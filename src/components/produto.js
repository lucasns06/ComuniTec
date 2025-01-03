import React, { useRef } from "react";
import playImg from '../assets/img/play.png'
import macImg from '../assets/img/appstore.png'
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
    const produtoVideo = useRef();
    const produtoTexto = useRef();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const sectionProductImg1 = document.querySelector('.sectionProductImg1');
        gsap.fromTo(sectionProductImg1,
            { opacity: 0, x: 60, },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                scrollTrigger: {
                    start: "top 50%",
                    trigger: sectionProductImg1
                },
                ease: "expo.out"
            });

        const ProductText = document.querySelector('.ProductText');
        gsap.fromTo(ProductText,
            { opacity: 0, x: -60, },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                scrollTrigger: {
                    start: "top 50%",
                    trigger: ProductText
                },
                ease: "expo.out"
            });

        gsap.fromTo(produtoVideo.current,
            { opacity: 0, x: 60, },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                scrollTrigger: {
                    start: "top 70%",
                    trigger: produtoVideo.current
                },
                ease: "expo.out"
            });
        gsap.fromTo(produtoTexto.current,
            { opacity: 0, x: -60, },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                scrollTrigger: {
                    start: "top 70%",
                    trigger: produtoTexto.current
                },
                ease: "expo.out"
            });
    }, []);


    return (
        <div className="sectionProductBlock">
            <div className="wave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill a1"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill a2"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill a3"></path>
                </svg>
            </div>
            <div className="sectionProduct" id="sectionProduct">
                <div className="sectionProductImg1" >
                    <img src={appLogo} />
                </div>
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
            <div className="sectionProduct3">
                <video controls ref={produtoVideo}>
                    <source src={pitch} type="video/mp4" />
                    Seu navegador não suporta a tag de vídeo.
                </video>
                <div className="sectionProduct3-texto" ref={produtoTexto}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <br />
                    <div className="downloadButtons">
                        <a href="https://play.google.com/store/apps?hl=pt-BR" target="_blank" className="downloadBtn">
                            <img src={playImg} />
                        </a>
                        <a href="https://www.apple.com/br/app-store/" target="_blank" className="downloadBtn">
                            <img src={macImg} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="ProductText2" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <p>Quer saber mais da nossa empresa?</p> <br />
                <Link to="/QuemSomos">
                    <button style={{ fontSize: '22px', width: 'max-content' }}>Quem somos</button>
                </Link>
                <br />
            </div>
        </div>
    );
}
export default Produto;