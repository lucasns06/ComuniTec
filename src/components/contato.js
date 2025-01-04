import React from "react";
import { Link } from 'react-router-dom'; // Importando Link para navegação interna
import '../styles/contato.css'

const Contato = () => {

   return (
      <div className="Contato">
            <div className="contato-texto">
               <h1>Quer <span style={{ color: 'var(--cor-destaque)' }}>entrar em contato?</span></h1>
               <h2>Vamos criar algo juntos! </h2> <br />
               <h2>Estamos aqui para ajudar você a encontrar as melhores soluções para suas necessidades.</h2> <br />
            </div>
            <form>
               <label>Nome</label>
               <br />
               <input type="text" placeholder="Nome Completo" required />
               <br /><br />

               <label>E-mail</label>
               <br />
               <input type="email" placeholder="Endereço de Email" required />
               <br /><br />

               <label>Mensagem</label>
               <br />
               <textarea required placeholder="Sua mensagem" rows={8}></textarea>
               <br /><br />

               <input type="submit" className="contatoSubmit" />
            </form>
      </div>
   )
}
export default Contato;