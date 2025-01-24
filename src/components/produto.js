import React, { useRef } from "react";
import playImg from "../assets/img/play.png";
import macImg from "../assets/img/appstore.png";
import appLogo from "../assets/img/aplicativologo.png";
import appTela from "../assets/img/telaApp.png";
import setaBaixo from "../assets/img/arrow.png";
import pitch from "../assets/videos/PitchComunica.mp4";
import "../styles/produto.css";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
const Produto = () => {
  const produtoVideo = useRef();
  const produtoTexto = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const appHomeImg = document.querySelector(".aplicativo_home > img");
    gsap.fromTo(
      appHomeImg,
      { opacity: 0, x: 60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          start: "top 70%",
          trigger: appHomeImg,
        },
        ease: "expo.out",
      }
    );

    const appH1 = document.querySelector(".aplicativo_home > h1");
    gsap.fromTo(
      appH1,
      { opacity: 0, x: -60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          start: "top 70%",
          trigger: appH1,
        },
        ease: "expo.out",
      }
    );
    setTimeout(() => {
      const setaBaixo = document.querySelectorAll(".setaBaixo");
      setaBaixo.forEach((seta) => {
        gsap.fromTo(
          seta,
          { rotate: 180 },
          {
            rotate: 0,
            duration: 1,
            scrollTrigger: {
              start: "top 90%",
              trigger: seta,
            },
            ease: "expo.out",
            clearProps: "all",
          }
        );
      }, 500);
    });
    const funcionalidades = document.querySelectorAll('.container_texto_funcionalidades');
      if (funcionalidades) {
        gsap.fromTo(
          funcionalidades,
            {opacity: 0, y: 80, },
            {
                scrollTrigger: {
                    trigger: funcionalidades,
                    toggleActions: "play none none none"
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'expo.out',
                stagger: 0.2
            },
        );
    }
    const telaApp = document.querySelector('.telaApp');
    gsap.fromTo(telaApp,
      {
        rotateY: 180
      },
      {
        scrollTrigger: {
            trigger: telaApp,
            toggleActions: "play none none none"
        },
        rotateY: 0,
        duration: 1.2
      }
    )
    gsap.fromTo(
      produtoVideo.current,
      { opacity: 0, x: 60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          start: "top 90%",
          trigger: produtoVideo.current,
        },
        ease: "expo.out",
      }
    );
    gsap.fromTo(
      produtoTexto.current,
      { opacity: 0, x: -60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          start: "top 90%",
          trigger: produtoTexto.current,
        },
        ease: "expo.out",
      }
    );
  }, []);

  return (
    <div className="sectionProductBlock">
      <div className="sectionProduct" id="sectionProduct">
        <h1 className="produto_h1">
          Veja o nosso aplicativo <span className="destaque">COMUNICA</span>
        </h1>
        <div className="aplicativo_home">
          <h1 className="aplicativo_home_title">
            Quebrando as barreiras na{" "}
            <span className="destaque">comunicação</span>.
          </h1>
          <img src={appLogo} alt="aplicativoLogo" />
        </div>
        <Link to="/" state={{ scrollTo: "sectionProduct2" }} className="link">
          <img className="setaBaixo" src={setaBaixo} alt="setaBaixo" />
        </Link>
      </div>
      <div className="sectionProduct2_block">
        <div className="sectionProduct" id="sectionProduct2">
          <h1 className="produto_h1">
            INCRÍVEIS <span className="destaque">FUNCIONALIDADES</span>
          </h1>
          <div className="app_funcionalidades">
            <div className="app_funcionalidades_text textRight">
              <div className="container_texto_funcionalidades">
                <h1>⚡️Text-To-Speech</h1> <br />
                <p>Transforme texto em fala usando o plugin TTS.</p>
              </div>
              <br /> <br />
              <div className="container_texto_funcionalidades">
                <h1>🚨Pedir Ajuda</h1> <br />
                <p>
                  Botão que envia uma mensagem de ajuda para contatos cadastrados.
                </p>
              </div>
            </div>
            <img src={appTela} className="telaApp" alt="telaAplicativo" />
            <div className="app_funcionalidades_text textLeft">
              <div className="container_texto_funcionalidades">
                <h1>🚀Modal de imagem</h1> <br />
                <p>
                  Exiba um modal de uma imagem para a comunicação por troca de
                  figuras.
                </p>
              </div>
              <br /> <br />
              <div className="container_texto_funcionalidades">
                <h1>📝Personalização</h1> <br />
                <p>
                  Você pode adicionar, editar e remover imagens. <br />e escolher
                  o sexo do TTS.
                </p>
              </div>
            </div>
          </div>
        </div>
      <br />
      <Link to="/" state={{ scrollTo: "sectionProduct3" }} className="link centralizar">
        <img className="setaBaixo" src={setaBaixo} alt="setaBaixo" />
      </Link>
      </div>

      <div className="container_section_product_3" id="sectionProduct3">
        <h1 className="produto_h1">
          SOBRE O <span className="destaque">APLICATIVO</span>
        </h1>
        <br />
        <br />
        <div className="sectionProduct3">
          <video controls ref={produtoVideo}>
            <source src={pitch} type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
          <div className="sectionProduct3-texto" ref={produtoTexto}>
            <p>
              O utilizador informa o seu nome e o sexo, 
              depois entra na pagina principal, as categorias, com um design acessível por botões grandes.
              a tela principal já vem com algumas categorias prontas, e o usuário poderá criar mais. <br />
              Baixe o aplicativo e facilite a comunicação de quem precisa!
            </p>
            <br />
            <div className="downloadButtons">
              <a
                href="https://play.google.com/store/apps?hl=pt-BR"
                target="_blank"
                rel="noreferrer noopener"
                className="downloadBtn"
              >
                <img src={playImg} alt="playstore" />
              </a>
              <a
                href="https://www.apple.com/br/app-store/"
                target="_blank"
                rel="noreferrer noopener"
                className="downloadBtn"
              >
                <img src={macImg} alt="mac" />
              </a>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div
          className="ProductText2"
          style={{ textAlign: "center", marginBottom: "2rem" }}
        >
          <p>Quer saber mais da nossa empresa?</p> <br />
          <Link to="/QuemSomos">
            <button style={{ fontSize: "22px", width: "max-content" }}>
              Quem somos
            </button>
          </Link>
          <br />
        </div>
      </div>
    </div>
  );
};
export default Produto;
