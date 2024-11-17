import React from "react";
import { Link } from 'react-router-dom'; // Importando Link para navegação interna

const Sugestao = () => {

    return (
        <>
            <div className="sugestao">
                <h1 style={{ textAlign: 'center' }}>Contato</h1>
                <div className="sugestaoContainer">
                    <h1></h1>
                    <p>Tem uma sugestão?</p>
                    <p>Agradecemos seu feedback!</p>
                    <br />
                    <form action="https://api.web3forms.com/submit" method="POST">
                        <input type="hidden" name="access_key" value="41d0ed4f-e2f1-40af-8e7c-9c6aac6f73f8" />
                        <label>
                            Nome <br />
                            <input type="text" name="name" placeholder="Seu nome" required />
                        </label>
                        <br /> <br />
                        <label>
                            Mensagem <br />
                            <textarea name="message" placeholder="Sua mensagem" required></textarea>
                        </label>
                        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                        <br /> <br />
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Sugestao;