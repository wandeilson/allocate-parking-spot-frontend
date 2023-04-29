import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function sendLoginRequest(){
    console.log("Enviando dados de login")
      fetch("http://localhost:8080/api/auth/authenticate",{
        method:'post',
        body:JSON.stringify({email, password}),
        headers:{
          'Content-type':'application/json',
          'Accept':'application/json'
        }
      })
  }

  return (
    <div className="container">
      <header className="header">
        <img className="logoImg" />
        <span>Por favor digite suas informações de login</span>
      </header>

      <form>
        <div className="inputContainer">
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

        <button className="button" type="button" onClick={ () => sendLoginRequest()} >
          Entrar 
        </button>
        <div className="footer">
          <p>Você não tem uma conta?</p>
          <Link to="/register">Crie a sua conta aqui</Link>
        </div>
      </form>
    </div>
  );
}
export default Login;