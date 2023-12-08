import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../GlobalComponent/theprovider";
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = () =>{
    const {tema,setTemamodo}=useContext(ThemeContext);
    const [darkMode, setDarkMode]=useState(tema);
    useEffect(()=>{
        setTemamodo(darkMode)
        console.log(darkMode)
    },[darkMode])

    return(
        <Navbar collapseOnSelect expand="md"
                variant={darkMode? 'dark':'light'}
                className={darkMode? 'bg-light-black border-bottom': 'bg-light border-bottom'}
                style={{width:'100%',position:'fixed',zIndex:100}}
        >
            <Container>

            </Container>

        </Navbar>
    )
}