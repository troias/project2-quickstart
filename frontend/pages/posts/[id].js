
import Post from '../../components/Post'
import Link from 'next/link'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { API_URL } from '../../utils/urls'


const SinglePost = () => {

    const [post, setPost] = useState({})
  
    //router related properties

    
    const router = useRouter()
    const { id } = router.query
    console.log("router", router)
    console.log("id", id)

    useEffect(() => {

        const fetchPost = async () => {
            try {
                const response = await fetch(`${API_URL}/posts/${id}`)
                const data = await response.json(); 
                console.log("data", data)
                setPost(data)
            } catch (error) {
                console.log("error", error)
            }
        }
        fetchPost()
    }, [])

    
    return (
        <>
            <Post posts={post}/>
        </>
    )
}

export default SinglePost