import AuthContext from "./authContext";
import { useNavigate } from "react-router-dom";

const AuthState = (props) => {  

  let navigate = useNavigate();

  const authTokenStore = (authToken) =>{
console.log(authToken)
localStorage.setItem("token", authToken);
navigate("/");
  }
  
  return (
    <AuthContext.Provider
      value={{authTokenStore }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
