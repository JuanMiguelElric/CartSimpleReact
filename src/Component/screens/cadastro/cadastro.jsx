import React, { useState } from "react";
import { SocialIcon } from 'react-social-icons'


const CadastroUser = () =>{

    return(
        <>
            <div className="container">
                <div className="Form text-center bg-dark text-white">
                    <h2>Cadastro</h2>
                    <div className="mb-3 mt-3">
                        <SocialIcon  url="https://linkedin.com/in/couetilc" style={{ height: 50, width: 50 }} />
                        <SocialIcon  network="twitter" />
                        <SocialIcon  network="instagram" />
                        <SocialIcon  network="facebook" />
                        <SocialIcon  network="google" />

                    </div>
                    <form action="" onSubmit={submitSignin}>
                        <input type="text" name="" id="" placeholder="Digite seu nome completo:" />
                        <input type="email" placeholder="Digite seu Email:" />
                        <input type="email" name="" id="" placeholder="Confirme Seu email" />
                        <input type="password" name="" id="" placeholder="Digite uma senha" />
                        <input type="password" name="" id="" placeholder="Confirme sua senha" />
                        <br />
                        <button className="btn btn-warning btn-lg btn-block" type="submit">Cadastrar</button>

                    </form>
                </div>
            </div>
        </>
    )
}
export default CadastroUser;
