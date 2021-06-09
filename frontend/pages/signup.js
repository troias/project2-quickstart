import React, {useContext, useEffect} from 'react'
import AuthForm from '../components/Forms/AuthForm'
import FormContext from '../context/AuthForm'
import { AuthContext } from '../context/AuthContext'
import { useRouter } from 'next/router'


 const signUp = () => {
    const router = useRouter();
    const { ...methods } = useContext(FormContext)
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user) {
          router.push("/");
        }
      }, [user]);

    return (
        <div>
            <h2> Register </h2>
            {methods.error}
            <AuthForm methods={methods} formType="Register"/>
        </div>
    )
}


export default signUp