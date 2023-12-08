//importar Hooks para serem utilizados no meu React APP
import { createContext, useState, useEffect, useContext } from "react";
//informação sobre o texto
const ThemeContext = createContext();

const ThemeProvider=(props)=>{
    const[tema, setTema] = useState(JSON.parse(localStorage.getItem('tema'))|| false);
    //Armazenamento da string theme dentro do local Storage json está sendo um intermediador
    useEffect(()=>{
        localStorage.setItem('tema',JSON.stringify(tema));
        //retorno de uma string que foi passado no localStorage
    },[tema])
    const setTemamodo = mode =>setTema(mode);
    return(
        <ThemeContext.Provider value={{tema,setTemamodo}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
const usarTema= () =>{
    const {tema}= useContext(ThemeContext)
    return[tema];
}
export {ThemeProvider,ThemeContext,usarTema};