import React, {useContext} from 'react'
import AuthForm from '../components/Forms/AuthForm'
import FormContext from '../context/AuthForm'
import { AuthContext } from '../context/AuthContext'



 const signUp = () => {
    const { ...methods } = useContext(FormContext)

    return (
        <div>
            <h2> Register </h2>
            <AuthForm methods={methods} formType="Register"/>
        </div>
    )
}


export default signUp