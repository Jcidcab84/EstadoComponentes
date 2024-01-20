import { useState } from "react";

const Formulario = ({ setAlert }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validatePassword, setValidatePassword] = useState("");

  const validarDatos = (event) => {
    event.preventDefault();

    if (nombre === "" || email === "" || password === "" || validatePassword === "") 
    {
      setAlert({ error: true,  message: "Completa todos los campos!", color: "danger"
      });
      return;
    }

    if (password !== validatePassword) {
      setAlert({error: true, message: "Las contraseñas estan erroneas", color: "danger"
      });
      return;
    }

    setAlert({
      error: false, message: "Haz creado tu cuenta con exito!", color: "success",
    });

    setNombre(""); setEmail(""); setPassword(""); setValidatePassword("");
  };

  return (
    <>
      <form className="formulario" onSubmit={validarDatos}>
        <div className="form-group mb-3">
          <input className="form-control" name="nombre" type="text" placeholder="Nombre" onChange={(event) => setNombre(event.target.value)} value={nombre} />
        </div>
        <div className="form-group mb-3">
          <input className="form-control" name="email" type="email" placeholder="tuemail@ejemplo.com" onChange={(event) => setEmail(event.target.value)} value={email} />
        </div>
        <div className="form-group mb-3">
          <input className="form-control" name="password" type="password" placeholder="Contraseña" onChange={(event) => setPassword(event.target.value)} value={password} />
        </div>
        <div className="form-group mb-3">
          <input className="form-control" name="password" type="password" placeholder="Confirma tu contraseña" onChange={(event) => setValidatePassword(event.target.value)} value={validatePassword} />
        </div>
        <div className="d-grip gap-2">
          <button type="submit" className="btn btn-primary"> Registrarse </button>
        </div>
      </form>
    </>
  );
};
export default Formulario;
