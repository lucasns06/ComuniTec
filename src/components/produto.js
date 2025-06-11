import React, { useRef } from "react";
import playImg from "../assets/img/play.png";
import macImg from "../assets/img/appstore.png";
import appLogo from "../assets/img/aplicativologo.png";
import appTela from "../assets/img/TelaApp.png";
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
  const produtoTitulo = useRef();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    //setas
    const setaBaixo = document.querySelectorAll(".setaBaixo");
    const setaDireita = document.querySelector('.setaDireita');

    setaBaixo.forEach((seta) => {
      seta.style.opacity = 0;
      gsap.fromTo(
        seta,
        { rotate: 180 },
        {
          opacity: 1,
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
    });
    gsap.fromTo(setaDireita,
      {
        rotate: 90
      },
      {
        rotate: -90,
        scrollTrigger: {
          start: "top 90%",
          trigger: setaDireita,
        }

      }
    )

  }, []);
  //Fim setas
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const titulo1 = document.querySelectorAll('.titulo1');
    const appHomeImg = document.querySelector(".aplicativo_home > img");
    const appH1 = document.querySelector(".aplicativo_home > h1");
    const funcH1 = document.querySelector('.h1_func');
    const funcionalidades = document.querySelectorAll('.container_texto_funcionalidades');
    const telaApp = document.querySelector('.telaApp');
    //primeira parte 
    gsap.fromTo(
      titulo1,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          start: "top 70%",
          trigger: titulo1,
        },
        ease: "expo.out",
      }
    );
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
    //segunda parte
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: funcH1,
        toggleActions: "play none none none",
        start: "top 70%",
      },
      defaults: {
        ease: "expo.out",
        duration: 1,
      }
    });
    tl.fromTo(funcH1,
      { opacity: 0, y: -60 },
      {
        opacity: 1,
        y: 0,
      }).fromTo(telaApp,
        {
          opacity: 0,
          rotateY: 180
        },
        {
          opacity: 1,
          rotateY: 0,
          duration: 0.5,
        }
      ).fromTo(
        funcionalidades,
        { opacity: 0, y: 80, },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2
        },
      );
    //parte  final
    gsap.fromTo(
      produtoTitulo.current,
      { opacity: 0, y: -60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: produtoTitulo.current,
          toggleActions: "play none none none",
          start: "top 90%",
        },
      }
    )
    gsap.fromTo(
      produtoVideo.current,
      { opacity: 0, x: 60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: produtoVideo.current,
          start: "top 90%",
        },
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
  }, [])
  return (
    <div className="sectionProductBlock">
      <div className="sectionProduct" id="sectionProduct">
        <h1 className="produto_h1 titulo1">
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
          <h1 className="produto_h1 h1_func">
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
        <h1 className="produto_h1" ref={produtoTitulo}>
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
              O utilizador informa seu nome e email, e logo acessa a tela principal com
              categorias visuais, organizadas em botões grandes e acessíveis.
              A página inicial já traz algumas categorias prontas, e o usuário
              pode adicionar novas conforme suas necessidades.
              Baixe o aplicativo e facilite a comunicação de quem mais precisa!"
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
        <div className="ProductText2">
          <img className="setaDireita" src={setaBaixo} alt="setaDireita" />
          <div>
            <p>Quer saber mais da nossa empresa?</p> <br />
            <Link to="/QuemSomos">
              <button style={{ fontSize: "22px", width: "max-content" }}> Quem somos </button>
            </Link>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};
export default Produto;
