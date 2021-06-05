import {useContext, useState} from 'react'
import AuthContext from "../context/AuthContext";


export const useAuth = () => {

    const { loginUser } = useContext(AuthContext)
  
    const [email, setEmail] = useState("");
    const [error, setError] = useState("")
    const [password, setPassword] = useState("");

    const handleLogin = async(event) => {
        event.preventDefault()
        try {
            loginUser(email, password);
        } catch (error) {
            setError(error)
        
        }
    }

    return [error, setError,
         handleLogin, email,  
         setEmail, password, 
         setPassword]
}
