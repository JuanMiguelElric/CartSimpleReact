import React, {useRef, useState } from "react";
import { SocialIcon } from 'react-social-icons'
import { mask } from "./mask"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import  validator  from "validator";


const CadastroUser = () =>{
    const [inputs,setInputs]=useState([])
    const [errorMensagem, setErrorMensagem] = useState('');
    const [emailError, setEmailError] = useState('');
    const [confirmEmailError,setConfirmEmailError]= useState('');
    const [ valor, setValor] = useState(''); //constantes para o input cpf
    const inputRef = useRef(null);
    const [eyeIscClosed, setEyesState]= useState(false);

    const validateEmail = (email, isConfirmation = false) =>{  
        const isValidEmail= validator.isEmail(email);
        if(isConfirmation){
            setConfirmEmailError(isValidEmail ? 'E-mail de confimação valido':'Digite um email de confimação valido!')
        }else{
            setEmailError(isValidEmail ? 'Email valido':'Email invalido')
        }
    }

    const validatePass = (value) => {
        const isStrong = validator.isStrongPassword(value, {
            minLength: 8,
            minLowercase: 1,  // Ajustado para 1 minúscula
            minUppercase: 1,
            minNumbers: 3,
            minSymbols: 1
        });
    
        if (isStrong) {
            setErrorMensagem('Senha forte');
        } else {
            setErrorMensagem('A senha deve conter no mínimo 8 caracteres, 1 letra minúscula, 1 letra maiúscula, 3 números e 1 símbolo.');
        }
    };
    

    const toogleShow = () =>{
        if(inputRef.current.type === "password"){
            setEyesState(true)
            inputRef.current.type ="text"
        }else{
            setEyesState(false);
            inputRef.current.type = 'password'
        }
    }
    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }

    function CampoCpf(event){
        const{value} = event.target
        setValor(mask(value)) //mascara campo cpf
    }

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
                    <form action="" >
                        <input type="text" name="" id="" placeholder="Digite seu nome completo:" onChange={handleChange} />
                        <input 
                            type="email"
                            placeholder="Digite seu Email:"
                            onChange={(e)=> validateEmail(e)}
                        />
                        {/* caso for validado ficará verde se não ficará vermelho */}
                        <span style={{ color: emailError.includes('válido') ? 'green' : 'red' }}>{emailError}</span>
                        <input 
                            type="email"
                             name="" id=""
                            placeholder="Confirme Seu email"
                            onChange={(e)=> validateEmail(e.target.value,true)}

                         />
                         <span style={{ color: confirmEmailError.includes('válido') ? 'green' : 'red' }}>{confirmEmailError}</span>
                        <input onChange={CampoCpf} value={valor} placeholder="  seu cpf: xxx.xxx.xxx-xx"  />

                        <div className="input-group">
                            <input
                                ref={inputRef}
                                type="password"
                                className="form-control"
                                aria-label="Digite uma senha"
                                aria-describedby="button-addon"
                                name=""
                                id=""
                                placeholder="Digite uma senha"
                                onChange={(e) => validatePass(e.target.value)}
                            />
                            <button
                                className="btn btn-outline-secondary"
                                onClick={toogleShow}
                                type="button"
                            >
                                {eyeIscClosed ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                            </button>
                        </div>
                        <span style={{fontWeight:'bold',color:'red'}}>{errorMensagem}</span>
                        


                        <input type="radio" id="scales" style={{width:'1em'}} name="scales" checked  /> <label for="scales">você aceita os termos de proteção de dados ?</label>
                        <br />
                        <button className="btn btn-warning btn-lg btn-block fa-1x" type="submit">Cadastrar</button>

                    </form>
                </div>
            </div>
        </>
    )
}
export default CadastroUser;
