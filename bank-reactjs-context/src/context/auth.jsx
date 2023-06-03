import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthState = (props) => {


  let navigate = useNavigate();

  // authTokenStore function is taken in context because this function will be use for login and signup. 
  const authTokenStore = (authToken) => {
    console.log(authToken);
    localStorage.setItem('token', authToken);
    navigate("/");   
  };




  return (
    <AuthContext.Provider value={{ authTokenStore }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthState };
