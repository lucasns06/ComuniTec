import React from "react";
import playImg from '../assets/img/playstore.svg'
import macImg from '../assets/img/mac.svg'
import appLogo from '../assets/img/aplicativologo.png'
import gsap from "gsap";
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
        </div>
        <div className="ProductText" style={{textAlign: 'center', marginBottom: '2rem'}}>
            <p>Quer saber mais da nossa empresa?</p> <br />
            <a href='QuemSomos'>
            <button style={{fontSize: '22px', width: 'max-content'}}>Quem somos</button> <br />
            </a>
        </div>
        </>
    );
}
export default Produto;