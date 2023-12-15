import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Component/screens/login/login";
import CadastroUser from "../Component/screens/cadastro/cadastro";
import HomePage from "../Component/screens/home";

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />}/>
                <Route path="login" element={<Login />} />
                <Route path="cadastro" element={<CadastroUser />}/>
            </Routes>
        
        </BrowserRouter>
        
    )
}