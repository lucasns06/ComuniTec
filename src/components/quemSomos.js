import React from "react";
import flag from "../assets/img/flag.svg";
import mission from "../assets/img/mission.svg";
import heart from "../assets/img/heart.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/quemSomos.css";
import { useRef } from "react";

const QuemSomos = () => {
  const heroH1 = useRef();
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.fromTo(
      heroH1.current,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
      }
    );
  });
  useEffect(() => {
    const cards = document.querySelectorAll(".containerproposito");
    const icons = document.querySelectorAll(".icon");
    var tl = gsap.timeline({
      scrollTrigger: {
        start: "top bottom",
        trigger: cards,
      },
    });
    tl.fromTo(
      cards,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.8,
        duration: 0.5,
      }
    )
      .to(icons, {
        scale: 1.2,
        stagger: 0.2,
        duration: 0.5,
      })
      .to(icons, {
        scale: 1,
        stagger: 0.2,
        duration: 0.1,
        clearProps: "all",
      });
  }, []);

  return (
    <div className="quemSomosBody">
      <div className="quem-somos" id="quemSomos">
        <div className="quem-somos-hero">
        <div className="headerBackgroundQS"></div>
          <div className="hero-background">
          </div>
          <h1 ref={heroH1}>Facilitando a comunicação</h1>
          <div className="waveBottom">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                class="shape-fill a1"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                class="shape-fill a2"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                class="shape-fill a3"
              ></path>
            </svg>
          </div>
        </div>
        <br />
        <br />
        {/* <img src={logo} className="QSLogo" alt="logoQM" /> */}
        <div className="quem-somos-texto">
          <p>
            Na ComuniTec, acreditamos que a tecnologia tem o poder de
            transformar a maneira como as pessoas se comunicam. Fundada em 2024,
            somos uma empresa dedicada ao desenvolvimento de soluções de
            software inovadoras, com foco na criação de ferramentas que
            facilitam a comunicação, especialmente para públicos com
            necessidades específicas. <br /> <br />
            Nossa história começa na ETEC Horácio Augusto da Silveira, onde
            surgiu a ideia de desenvolver um projeto para o Trabalho de
            Conclusão de Curso (TCC) em Desenvolvimento de Sistemas. Foi nesse
            ambiente acadêmico que nasceu a{" "}
            <span style={{ color: "var(--cor-destaque)" }}>ComuniTec</span>, com
            a missão de transformar a comunicação em uma experiência mais
            acessível e inclusiva. <br /> <br />
            Nosso compromisso é criar softwares que não só atendam, mas superem
            as expectativas de nossos clientes, com soluções criativas, eficazes
            e sempre em sintonia com as necessidades de um mundo cada vez mais
            conectado e digital.
          </p>
        </div>
        <h1>Identidade</h1> <br />
      </div>

      <div className="empresaMissao">
        <div className="containerproposito">
          <svg
            width="128px"
            height="128px"
            className="icon iconMission"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
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
            Facilitar a comunicação e a inclusão de pessoas neurodivergentes não
            verbais por meio de tecnologia inovadora, proporcionando ferramentas
            que promovam a expressão, o entendimento e a conexão com o mundo ao
            seu redor.
          </p>
        </div>
        <div className="containerproposito">
          <img className="icon" src={flag} alt="flag" />
          <h1 style={{ color: "rgb(79, 81, 255)" }}>Visão</h1>
          <br />
          <br />
          <p>
            Ser a referência global em soluções de comunicação para pessoas
            neurodivergentes, transformando a forma como interagem com o
            ambiente e entre si, e contribuindo para uma sociedade mais
            inclusiva e empática.
          </p>
        </div>
        <div className="containerproposito">
          <img className="icon" src={heart} alt="iconHeart" />
          <h1 style={{ color: "red" }}>Valores</h1>
          <br />
          <br />
          <p>Inclusão</p>
          <p>Inovação</p>
          <p>Empatia</p>
          <p>Acessibilidade</p>
        </div>
      </div>
      <br />
      <Link to="/Contato" className="ContatoQuemsomosA">
        <button className="ContatoQuemsomosBtn">Contato</button>
      </Link>
    </div>
  );
};

export default QuemSomos;
