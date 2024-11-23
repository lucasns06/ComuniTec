import React from "react";
import { Link } from 'react-router-dom'; // Importando Link para navegação interna
import '../styles/contato.css'

const Contato = () => {

    return (
       <div className="Contato"> <br/>
         <h1>Quer <span style={{ color: 'var(--cor-destaque)' }}>entrar em contato?</span></h1> <br/>
         <h2>Vamos criar algo juntos! </h2> <br/><br/>
         <form>
            <label>Nome</label> <br/>
            <input type="text" placeholder="Nome Completo" required/><br/><br/>

            <label>E-mail</label> <br/>
            <input type="email" placeholder="Endereço de Email" required/> <br/><br/>

            <label>Mensagem</label> <br/>
            <textarea required></textarea>  <br/> <br/>

            <input type="submit" className="contatoSubmit"/>
         </form> <br/> <br/><br/> <br/>
         <Link to="/" state={{ scrollTo: 'inicioId' }} className="contatoSubmit contatoVoltar">Página Inicial</Link>
       </div>
    )
}
export default Contato;