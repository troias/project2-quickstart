import { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
// import { Magic } from 'magic-sdk'
// import { MAGIC_PUBLIC_KEY } from '../utils/urls'

export const AuthContext = createContext(null)
// let magic

export const AuthProvider = (props) => {

    const [user, setUser] = useState({jwt: 'asad'})
    const router = useRouter()

    return (
        <AuthContext.Provider value={{user, setUser }}>
            {props.children}
        </AuthContext.Provider>)
}

export default AuthContext