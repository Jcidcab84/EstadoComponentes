import { useState } from "react";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";
import Alert from "./Alert";


const Registro = () =>{
    const [alert, setAlert] = useState({ error: "", message: "", color:"" });
    return(
        <>
        <div className="container  border border-light-primary rounded-5 bg-light p-5">
            <h1 className="text-primary">Crea una cuenta</h1>
            <div className="d-flex gap-3 justify-content-center my-3"> 
                <SocialButton icon="fa-brands fa-facebook" link="https://web.facebook.com"/>
                <SocialButton icon="fa-brands fa-github"link="https://github.com/Jcidcab84/EstadosComponentes"/>
                <SocialButton icon="fa-brands fa-linkedin" link="https://www.linkedin.com/in/juan-jos%C3%A9-cid-b739a061/" />
            </div>
            <p className="text-primary">O usa tu email para registrarte</p>
            <Formulario setAlert={setAlert}/>
            {alert.message && <Alert color={alert.color}>{alert.message}</Alert>}
        </div>
        </>

    );
};
export default Registro;