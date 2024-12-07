import React from "react";
import logo from "../assets/img/logo.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import '../styles/quemSomos.css'
import { useRef } from "react";

const QuemSomos = () => {
  
  useLayoutEffect(() => {
    
    const contProp1 = document.querySelector('.contProp1')
    const contProp2 = document.querySelector('.contProp2')
    const contProp3 = document.querySelector('.contProp3')

    const iconMission = document.querySelector('.iconMission')
    const iconFlag = document.querySelector('.iconFlag')
    const iconHeart = document.querySelector('.iconHeart')

    const QuemSomosH1 = document.querySelector('.QuemSomosH1')

    gsap.to(QuemSomosH1, {scale: 1, opacity: 1, duration: 1.5})

    gsap.registerPlugin(ScrollTrigger)
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".containerproposito",
      }
    });
    const timeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".sugestaoContainer",
      }
    });
    const timeline3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".toProduto",
      }
    });

    timeline
      .from(contProp1, { y: 100, opacity: 0 })
      .from(iconMission, { y: -20 })
      .to(contProp1, { y: 0, opacity: 1, duration: 1 }, "<")
      .to(iconMission, { y: 0, duration: 1, clearProps: "all" }, "<0.1")

      .from(contProp2, { y: 100, opacity: 0 })
      .from(iconFlag, { y: -20 })
      .to(contProp2, { y: 0, opacity: 1, duration: 1 }, "<")
      .to(iconFlag, { y: 0, duration: 1, clearProps: "all" }, "<0.1")

      .from(contProp3, { y: 100, opacity: 0 })
      .from(iconHeart, { y: -20 })
      .to(contProp3, { y: 0, opacity: 1, duration: 1 }, "<")
      .to(iconHeart, { y: 0, duration: 1, clearProps: "all" }, "<0.1")

    timeline2
      .from(".sugestaoContainer ", { y: 100, opacity: 0 })
      .to(".sugestaoContainer ", { y: 0, opacity: 1, duration: 1 })

    timeline3
      .from(".toProduto ", { y: 100, opacity: 0 })
      .to(".toProduto ", { y: 0, opacity: 1, duration: 1 })
  }, [])

  return (
    <>
      <div className="quem-somos" id="quemSomos">
      <br />
      <br />
      <h1>Sobre a ComuniTec</h1>
      <p>A comunicação é um direito para todos!</p>
      <br />
        <div className="quem-somos-hero"></div>
        <br />
        <br />
        <img src={logo} className="QSLogo" />
        <p>
          Nós somos a ComuniTec, uma <br />
          empresa de tecnologia de Desenvolvimento <br />
          de Softwares.<br />
           Facilitamos a sua comunicação!
        </p>
      <p>Fundada em 2024</p>
        <p>
          Nossa origem foi na ETEC Horácio Augusto da Silveira, para o TCC em Desenvolvimento de Sistemas.
        </p>
        <h1>Identidade</h1> <br/>
      </div>

      <div className="empresaMissao">
        <div className="containerproposito contProp1">
          <svg
            width="128px"
            height="128px"
            className="iconMission"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <style>
              {`.st0 {
            fill: none;
            stroke: rgb(255, 203, 108);
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          }`}
            </style>
            <line className="st0" x1="16" y1="16" x2="22" y2="10" />
            <polygon className="st0" points="30,6 26,6 26,2 22,6 22,10 26,10" />
            <circle className="st0" cx="16" cy="16" r="6" />
            <path
              className="st0"
              d="M27,9c1.3,2,2,4.4,2,7c0,7.2-5.8,13-13,13S3,23.2,3,16S8.8,3,16,3c2.6,0,5,0.7,7,2"
            />
          </svg>
          <h1 style={{ color: "rgb(255, 203, 108)" }}>Missão</h1>
          <br />
          <br />
          <p>
            Facilitar a comunicação e a inclusão de pessoas neurodivergentes não verbais por meio de tecnologia inovadora,
            proporcionando ferramentas que promovam a expressão, o entendimento e a conexão com o mundo ao seu redor.
          </p>
        </div>
        <div className="containerproposito contProp2">
          <svg
            width="128px"
            height="128px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="iconFlag"
          >
            <path
              className="iconFlagFill"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 1.25C5.41421 1.25 5.75 1.58579 5.75 2V3.08515L7.32358 2.77043C9.11678 2.41179 10.9756 2.58245 12.6735 3.26161L13.0868 3.42693C14.3652 3.93832 15.7724 4.03382 17.1082 3.69986C18.3875 3.38005 19.4147 4.76652 18.7363 5.89719L17.4578 8.02808C17.0814 8.65542 17.021 8.78483 17.0056 8.90275C16.9972 8.96731 16.9972 9.03269 17.0056 9.09725C17.021 9.21517 17.0814 9.34458 17.4578 9.97192L19.0184 12.573C19.5884 13.5229 19.0787 14.7534 18.004 15.0221L17.9039 15.0471C15.9814 15.5277 13.9563 15.3903 12.1164 14.6543C10.6886 14.0832 9.12562 13.9397 7.61776 14.2413L5.75 14.6149V22C5.75 22.4142 5.41421 22.75 5 22.75C4.58579 22.75 4.25 22.4142 4.25 22V2C4.25 1.58579 4.58579 1.25 5 1.25Z"
              fill="rgb(79, 81, 255)"
            />
          </svg>
          <h1 style={{ color: "rgb(79, 81, 255)" }}>Visão</h1>
          <br />
          <br />
          <p>
            Ser a referência global em soluções de comunicação para pessoas neurodivergentes, transformando a forma como
            interagem com o ambiente e entre si, e contribuindo para uma sociedade mais inclusiva e empática.
          </p>
        </div>
        <div className="containerproposito contProp3">
          <svg
            width="128px"
            height="128px"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="iconHeart"
          >
            <path
              className="iconHeartFill"
              d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z"
              fill="red"
            />
          </svg>
          <h1 style={{ color: "red" }}>Valores</h1>
          <br />
          <br />
          <p>Inclusão</p>
          <p>Inovação</p>
          <p>Empatia</p>
          <p>Acessibilidade</p>
        </div>
      </div>
      <Link to="/Contato"><button className="ContatoQuemsomosBtn">Contato</button></Link>
    </>
  );
};

export default QuemSomos;
