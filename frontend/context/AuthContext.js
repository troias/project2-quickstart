import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { API_URL } from "../utils/urls";

export const AuthContext = createContext();

export const AuthProvider = (props) => {

  const router = useRouter();
  const [user, setUser] = useState();
  const [success] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

 
  const getAuthUserName = (user) => {
    if (isLoggedIn) {
      return user.user.username;
    }
    return;
  };

  const logOutUser = () => {
    setUser(null);
    setLoggedIn(false)
    router.push("/");
    
  };

  const registerUser = async (email, password) => {
    try {
      const response = await fetch(`${API_URL}/auth/local/register`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          username: email,
          email,
          password,
        }),
      });
      const data = await response.json();
      if (data.message) {
        setError(data.message[0].messages[0].message);
        return;
      }
      setUser(user)
      console.log("error"+ error)
   
    } catch (error) {
      setError("error"+ error)
    }
    
  };

  const loginUser = async (email, password) => {
    try {
      const response = await fetch(`${API_URL}/auth/local`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          identifier: email,
          password,
        }),
      });
      const data = await response.json();
      if (data.message) {
        setError(data.message[0].messages[0].message);
        return;
      }
      setUser(data);
      setLoggedIn(true);
      router.push("/");
  
    } catch (error) {
      setError("something went wrong" + error);
    }
  
  };

  const checkIsLoggedIn = () => {
     const loggedIn = isLoggedIn
     return loggedIn

  };

  useEffect(() => {
    checkIsLoggedIn()
  }, [user])

  return (
    <AuthContext.Provider
      value={{
        user,
        setError,
        success,
        error,
        loginUser,
        logOutUser,
        getAuthUserName,
        checkIsLoggedIn,
        registerUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
