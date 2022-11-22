import React, {useState, useEffect, createContext} from 'react';

import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveryUser = localStorage.getItem('user');
    if(recoveryUser){
      setUser(JSON.parse(recoveryUser));
    }
    setLoading(false);
  }, []);

  const login = (name, password) => {
    // console.log("login auth",{name, password});

    const loggedUser = {
      id: '123',
      name,
    }

    localStorage.setItem('user', JSON.stringify(loggedUser));
    
    if(name.length > 3 && password === "admin"){
      setUser(loggedUser);
      navigate('/');
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate('/login');
  };

  return(
  <AuthContext.Provider value={{authenticated: !!user, user, loading, login, logout}}>

    {children}
  </AuthContext.Provider>
  );
}