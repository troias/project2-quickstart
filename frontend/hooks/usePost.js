import { useState, useEffect, useCallback } from 'react'
import { API_URL, POSTS } from "../utils/urls"
import mockPosts from "../posts.json"

export const usePost = () => {

    const [posts, setPosts] = useState(mockPosts)
    const [status, setStatus] = useState({
        loading: false
    })
    const [error, setError] = useState("")


    const fetchPosts = useCallback(
        async () => {
            try {
                const req = await fetch(`${API_URL}${POSTS}`);
                const data = await req.json();
                setPosts(data);
                if (data.message) {
                    setError(data.message[0].messages[0].message);
                    alert(error);
                    return;
                }
                console.log(data)
            } catch (error) {
                setError("error", error);
            }
        }
    )



useEffect(() => {
    fetchPosts()
}, [])

return [ posts ]
}
