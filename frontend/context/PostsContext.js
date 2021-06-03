import React, { createContext, useState, useEffect, useContext } from 'react'
import { API_URL, POSTS } from "../utils/urls";
import mockPosts from "../posts.json";



export const PostContext = createContext([])



export const PostsProvider = (props) => {

    const [error, setError] = useState("")
    const [posts, setPosts] = useState([{}])
    const [getPosts] = useState()
  
    return (
        <PostContext.Provider value={{
            posts,
            error, 
            getPosts,
            setPosts,
            setError,  
            getAuthUserPosts, 

        }}>
            {props.children}
        </PostContext.Provider>
    )
}

export default PostContext

