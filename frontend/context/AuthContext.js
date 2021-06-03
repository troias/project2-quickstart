import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { API_URL } from "../utils/urls";

export const AuthContext = createContext();

export const AuthProvider = (props) => {

  const router = useRouter();
  const [user, setUser] = useState();
  const [success, setSuccess] = useState("");
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
    router.back("/");
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
        alert(error);
        return;
      }
      setUser(data);
      setSuccess("grats ya logged in ya dog");
      setLoggedIn(true);
      router.push("/account");
      //  loginUser(data)
    } catch (error) {
      setError("something went wrong" + error);
    }
  
  };

  const checkIsLoggedIn = () => {
     const loggedIn = isLoggedIn
     return loggedIn
    // dumb cause no conditional
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
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
