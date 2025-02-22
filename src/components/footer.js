import React from "react";
import logoImg from '../assets/img/logo.png'
import { Link } from 'react-router-dom';
import '../styles/footer.css'
const Footer = () => {


    return (
        <footer>
            <div className="container-footer">
                <div className="logo">
                    <a href="index.html" className="logo">
                        <img src={logoImg} alt="ComuniTec Logo" />
                        <p>ComuniTec</p>
                    </a>
                </div>
                <div >
                    <h1>COMPANIA</h1>

                    <p>ETEC Prof. Horácio Augusto da Silveira</p><br />
                    <p>Técnico em Desenvolvimento de Sistemas</p><br />
                    <a className="credits" href="https://lucasns06.github.io/portfolio" target="_blank" rel="noopener noreferrer">Criado por Lucas Nascimento</a>
                </div> <br />
                <div >
                    <h1>SERVIÇOS</h1>
                    <a href="">FAQ</a>
                    <br /> <br />
                    <a href="">Comunica</a>
                    <br /> <br />
                    <a className="credits" href="https://www.freepik.com/free-photo/smiling-young-blond-girl-posing-against-white-wall_11103809.htm#fromView=search&page=2&position=39&uuid=629caba0-b95c-4e2c-b03e-a36b2acb5658">Image by cookie_studio on Freepik</a>
                </div> <br />
                <div>
                    <h1>SOCIAL</h1>
                    <a href="https://github.com/lucasns06/ComuniTec" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <br /> <br />
                    <a href="">Instagram</a>
                    <br /> <br />
                    <a href="">Linkedin</a>
                </div>
            </div>
            <div className="container-footer-border">
                <p>2025</p>
                <p>Política de privacidade </p>
            </div>
        </footer>
    );
};

export default Footer;
