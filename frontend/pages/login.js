import Head from "next/head";
import AuthContext from "../context/AuthContext";
import styles from "../styles/login.module.css";

import {useState, useContext} from 'react'
import { API_URL } from '../utils/urls';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('')
//   const { loginUser } = useContext(AuthContext);
  

  const handleSubmit = async (event) => {
    event.preventDefault(); //avoids refresh
    // loginUser(email, password);

    try {
        const response = await fetch(`${API_URL}/auth/local`, {
            method: "POST", 
            headers: { 
                'content-type': 'application/json'
            }, 
            body: JSON.stringify({ 
                identifier: email, 
                password
            })
         })
         const data = await response.json()
         if(data.message) {
             setError(data.message[0].messages[0].message)
             return;
         }
        //  loginUser(data)
    } catch (error) {
        setError('something went wrong' + error)
    }


  };

  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login here to make your purchase" />
      </Head>

      <h2 className={styles.loginTitle}>Login</h2>

      {error && <p>{error}</p>}
      
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email Address"
        />
        <input
          className={styles.input}
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
        />
        <button type="submit" className={styles.button}>
          LogIn
        </button>
      </form>

    </div>
  );
};

export default Login;
