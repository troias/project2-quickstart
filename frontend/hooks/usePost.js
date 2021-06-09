import React, { useState, useEffect, useCallback } from "react";
import { API_URL, POSTS } from "../utils/urls";
import mockPosts from "../posts.json";

export const usePost = () => {
    const [posts, setPosts] = useState();

    // const [status, setStatus] = useState({
    //     loading: false,
    // });
    const [error, setError] = useState("");



    useEffect(() => {
        let mounted = true 
        const fetchPost = async () => {
            try {
                const req = await fetch(`${API_URL}${POSTS}`);
                const data = await req.json();
                setPosts(data);
                if (data.message) {
                    setError(data.message[0].messages[0].message);
                    alert(error);
                    return;
                }
                
            } catch (error) {
                setError("error", error);
            }
        };
        fetchPost()
        return function cleanup(){
            mounted = false
            console.log('cleaned up')
         }
        
    }, [])

    return [posts, error, setPosts];
};
