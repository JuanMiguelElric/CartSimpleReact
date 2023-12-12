import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const MenuPage = () =>{
    return(
        <nav className=" navbar navbar-inverse" style={{backgroundColor:"#e3f2fd"}}>
            <div className="container ">
                <div className="navbar-header">
                    <h1 className="navbar-brand">Loja</h1>

                </div>
                <ul className="d-flex p-3">
                    <li>home</li>
                    <li>Contato</li>
                    <li>Agencias</li>
                    <li>Fretes</li>
                </ul>
            </div>

        </nav>

    )
}
export default MenuPage;