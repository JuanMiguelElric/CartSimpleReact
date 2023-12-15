import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "../carrinho";
import logo from "../imagens/logos/logo.png"
import LogineCadastro from "../imagens/logos/cadastroelogin.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faPhone, faHouse } from '@fortawesome/free-solid-svg-icons';


const MenuPage = () =>{
    return(
        <nav className=" navbar navbar-inverse navbar-dark bg-dark" style={{height:"7rem"}} >
            <div className="container ">
                <div className="navbar-header">
                    <img src={logo} className="navbar-brand fa-3x" alt="" style={{width:"3em"}} />

                </div>
                <ul className="d-flex p-3 text-white" >
                    <li>
                        <FontAwesomeIcon className="fa-2x" icon={faHouse}/>
                        home
                    </li>
                    <li>
                        
                        <FontAwesomeIcon className="fa-2x" icon={faPhone}/>
                        <small>contato</small>
                    </li>
                    
                    <li>
                        <FontAwesomeIcon className="fa-2x" icon={faTruck}/>
                        Fretes
                    </li>
                    <li >
                        <img src={LogineCadastro} width={40} alt="" />
                        <small>acessar</small>
                    </li>
                    <li><Cart /></li>
                </ul>
            </div>

        </nav>

    )
}
export default MenuPage;