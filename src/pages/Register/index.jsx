import { useState } from "react";
import { Link } from "react-router-dom";
import arrowImg from "../../assets/arrow.svg";
import "./styles.css";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFisrtname] = useState("");
  const [lastname, setLastname] = useState("");

  function sendRegistrationRequest(){
    console.log("Enviando dados de registro")
      fetch("http://localhost:8080/api/auth/register",{
        method:'post',
        body:JSON.stringify({firstname, lastname, email, password}),
        headers:{
          'Content-type':'application/json',
          'Accept':'application/json'
        }
      }).then((res) =>{
        console.log(res.data);
        console.log("aqii")
      }

      )
  }


  return (
    <div className="container">
      <header className="header">
        <img className="logoImg" />
        <span>Por favor digite suas informações de cadastro</span>
      </header>

      <form>
        <div className="inputContainer">

        <label >Nome</label>
        <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Fulano"
            onChange={(e) => setFisrtname(e.target.value)}
          />

        <label >Sobrenome</label>
        <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="de tal"
            onChange={(e) => setLastname(e.target.value)}
          />

          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="johndoe@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />

        </div>

        <div className="inputContainer">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********************"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="button" onClick={() => sendRegistrationRequest()}  >
          Cadastrar <img src={arrowImg} alt="->" />
        </button>
        <div className="footer">
          <p>Você já tem uma conta?</p>
          <Link to="/login">Acesse sua conta aqui</Link>
        </div>
      </form>
    </div>
  );
} export default Register;