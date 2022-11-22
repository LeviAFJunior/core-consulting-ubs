import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie, faKey } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../../contexts/auth';
import './styles.css';

const LoginPage = () => {
  const { login } = useContext(AuthContext); 

  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    // console.log("submit", {name, password});
    login(name, password);
  }
  
  
  return(
    <div id="login">
      <h1 className="title">Login</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="col-sm-6 col-lg-4 mb-3">
          <label htmlFor="name">Nome</label>
          <FontAwesomeIcon icon={faUserTie}></FontAwesomeIcon>
          <input type="text" name="name" id="name" value={name} onChange={(e) => setname(e.target.value)}/> 
        </div>
        <div className="col-sm-6 col-lg-4 mb-3">
          <div className="field">
            <label htmlFor="password">Senha</label>
            <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
            <input type="password" name="password" id="password" placeholder='admin' value={password} onChange={(e) => setPassword(e.target.value)}/> 
          </div>
        </div>
        <div className="p-1">
          <button className="br-button block primary mb-3" type="submit">Entrar</button>
        </div>
        <div className="actions">
        </div> 
      </form>
    </div>

  )
}
export default LoginPage;