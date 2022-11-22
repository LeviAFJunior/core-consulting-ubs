import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartPulse, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../contexts/auth';


import './styles.css';

const HomePage = () => {
  let navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const [user, setUser] = useState([]);

  const handleLogout = () => {
    logout();
  }
  const routeChange = () => {
    navigate('/ubs');
  }

  useEffect(() =>{
    const user = JSON.parse(localStorage.getItem('user'));
    if(user){
      setUser(user);
    }
  },[]);

  return(
    <>      
    <Header/>
    <div id="d-inline-flex" className="p-3">
        <h1 className="text-uppercase">{user.name}, seja Bem-Vindo!</h1>
        <button className="br-button primary" onClick={routeChange}><FontAwesomeIcon icon={faHeartPulse} />Unidades de Saúde</button>
        <button className="br-button danger mt-3 ml-3"  onClick={handleLogout}><FontAwesomeIcon icon={faArrowRightFromBracket}/>Logout</button>
    </div>
    <Footer/>

    </>

  );
}

export default HomePage;