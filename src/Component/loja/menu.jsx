import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "../carrinho";


const MenuPage = () =>{
    return(
        <nav className=" navbar navbar-inverse navbar-dark bg-dark" >
            <div className="container ">
                <div className="navbar-header">
                    <h1 className="navbar-brand" style={{backgroundColor:"#e3f2fd"}}>Loja</h1>

                </div>
                <ul className="d-flex p-3" >
                    <li>home</li>
                    <li>Contato</li>
                    <li>Agencias</li>
                    <li>Fretes</li>
                    <li><Cart /></li>
                </ul>
            </div>

        </nav>

    )
}
export default MenuPage;