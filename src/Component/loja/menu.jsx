import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "../carrinho";
import logo from "../../images/pngegg.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';


const MenuPage = () =>{
    return(
        <nav className=" navbar navbar-inverse navbar-dark bg-dark" style={{height:"7rem"}} >
            <div className="container ">
                <div className="navbar-header">
                    <img src={logo} className="navbar-brand" alt="" style={{width:"3em"}} />

                </div>
                <ul className="d-flex p-3 text-white" >
                    <li>home</li>
                    <li>Contato</li>
                    <li>Agencias</li>
                    <li>Fretes</li>
                    <li >
                        <FontAwesomeIcon icon={faUserCircle} />
                    </li>
                    <li><Cart /></li>
                </ul>
            </div>

        </nav>

    )
}
export default MenuPage;