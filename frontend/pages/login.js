import Head from "next/head";
import AuthContext from "../context/AuthContext";
import styles from "../styles/login.module.css";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import AuthForm from '../components/Forms/AuthForm'

const Login = () => {

  const router = useRouter()
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if(user) {
      router.push("/")
    }
  }, [user])
  
  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login page" />
      </Head>
      <h2 className={styles.loginTitle}>Login</h2>
      <AuthForm formType="Log In"/>
    </div>
  );
};

export default Login;
