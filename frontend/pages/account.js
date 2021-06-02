import Head from 'next/head';
import { useContext, useState, useEffect } from 'react';
import { API_URL } from '../utils/urls'
import Link from 'next/link';
import AuthContext from '../context/AuthContext'
import ClipLoader from "react-spinners/ClipLoader";

const logoutUser = () => {

}
const Account = () => {

    const { user } = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
    const [color, setColor] = useState('#000000')
    if (!user) {
        return (<div> Please login or register <Link href="/"><a>Go back</a></Link> </div>)
    }

    return (
        <div>
            <Head>
                <title>Acount Page</title>

                <meta name="description" content="The Account Page view your orders and logout" />
            </Head>
            <h2> Account Page </h2>
            <hr />
            <h3> Your Posts </h3>
            <div>
                 <ClipLoader loading={loading} color={color} />
               
            </div>

            <p> Logged in as {user.email}</p>
            <a href="#" onClick={logoutUser}>LogOut</a>

        </div>
    )
}

export default Account