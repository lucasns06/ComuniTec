import React from "react";
import playImg from '../assets/img/playstore.svg'
import macImg from '../assets/img/mac.svg'
import appLogo from '../assets/img/aplicativologo.png'
import appTela from '../assets/img/TelaApp.png'
import appTela2 from '../assets/img/Necessidades.png'
import appTela3 from '../assets/img/TelaApp3.png'
import '../styles/produto.css'
import gsap from "gsap";
import { Link } from "react-router-dom";
import { useLayoutEffect } from 'react';

const Produto = () => {
    useLayoutEffect(() => {
        const productSection = document.querySelector('.sectionProductImg1')

        gsap.from(productSection, { duration: 1, x: -100 })
        gsap.to(productSection, { duration: 1, x: 0 })
        gsap.from(".ProductText", { duration: 1, y: 100 })
        gsap.to(".ProductText", { duration: 1, y: 0 });

    }, [])

    return (
        <>
            <div className="sectionProduct" id="sectionProduct">

                <img src={appLogo} className="sectionProductImg1" width="400px" />
                <div className="ProductText">
                    <h1 className="Product-title">Comunica</h1>
                    <br />
                    <p>Nós desenvolvemos um aplicativo com o intuito de ajudar <br />
                        pessoas com dificuldade de se comunicar </p><br /> <br />

                    <ul style={{ textAlign: 'left' }}>
                        <li>Transforme audio e voz usando nosso sintetizador</li>
                        <li>Mostre o que você quer com as imagens selecionadas</li>
                        <li>Peça ajuda em situações de desespero</li>
                    </ul>
                    <br /> <br />
                    <p>Veja abaixo como funciona o aplicativo</p>

                </div>
            </div>
            <div className="sectionProduct2">
                <div className="sectionProduct2-texto">
                    <p>O aplicativo utiliza uma interface intuitiva e amigável,
                        onde a comunicação é baseada em imagens categorizadas e
                        mensagens prontas. Com poucos toques na tela, os usuários
                        podem expressar sentimentos, necessidades ou até mesmo pedir
                        ajuda em situações de emergência. Além disso, oferecemos suporte
                        à síntese de voz, transformando texto em áudio para uma personalização ainda maior.</p>
                </div>
                <img src={appTela} className="appTela" />
            </div>
            <div className="sectionProduct3">
                <p>Jornada para se comunicar</p>
                <br />
                <div className="containerappTela">
                    <img src={appTela} className="appTela2" />
                    <img src={appTela2} className="appTela2" />
                    <img src={appTela3} className="appTela2" />
                </div>
                <br />
                <div className="sectionProduct3-texto">
                    <p>Na ComuniTec, acreditamos que a comunicação é um direito de
                        todos. Com o Comunica, queremos quebrar barreiras e criar
                        um mundo onde cada pessoa tenha sua voz, independentemente dos desafios que enfrenta.</p>
                        <br />
                    <p>Baixe agora e descubra como nosso app pode fazer a diferença.</p>
                </div>
                <br />
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
                </Link> <br />
            </div>
        </>
    );
}
export default Produto;