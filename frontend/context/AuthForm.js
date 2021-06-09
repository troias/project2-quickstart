import { createContext, useContext, useState } from "react";
import AuthContext from "./AuthContext";
export const FormContext = createContext("");

export const FormProvider = (props) => {
    //States

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { loginUser, registerUser, error, setError } = useContext(AuthContext)

    //Functions
    return (
        <FormContext.Provider
            value={{
                password, 
                setPassword,
                email, 
                setEmail,
                loginUser, 
                registerUser, 
                error, setError
            }}
        >
            {props.children}

        </FormContext.Provider>
    );
};



export default FormContext;
