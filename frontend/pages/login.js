import Head from "next/head";
import AuthContext from "../context/AuthContext";
import styles from "../styles/login.module.css";

import {useRouter} from "next/router"
import { useState, useContext } from "react";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()



const { loginUser, setError, success, error } = useContext(AuthContext);


  const handleSubmit = async (event) => {
    event.preventDefault(); //avoids refresh
    // loginUser(email, password);
    loginUser(email, password)

  };

  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login here to make your purchase" />
      </Head>

      <h2 className={styles.loginTitle}>Login</h2>

      {error && <p>{error}</p>}
      {success && alert(success) } 

      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setError("");
          }}
          placeholder="Email Address"
        />
        <input
          className={styles.input}
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
            setError("");
          }}
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
