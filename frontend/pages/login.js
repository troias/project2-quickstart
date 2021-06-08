import Head from "next/head";
import AuthContext from "../context/AuthContext";
import styles from "../styles/login.module.css";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { FormProvider } from "../context/AuthForm";
import FormContext from "../context/AuthForm";
import AuthForm from "../components/Forms/AuthForm";

const Login = () => {
  const { ...methods } = useContext(FormContext);

  const router = useRouter();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login page" />
      </Head>
      <h2 className={styles.loginTitle}>Login</h2>

      <AuthForm methods={methods} formType="Login" />
    </div>
  );
};

export default Login;
