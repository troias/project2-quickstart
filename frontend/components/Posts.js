import styles from "../styles/Home.module.css"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { API_URL, POSTS, FRONTEND_API_URL } from '../utils/urls'
import mockPosts from '../posts.json'
import Link from 'next/link'
import Post from '../components/Post'

const Posts = () => {

    const router = useRouter()
    const [posts, setPosts] = useState(mockPosts)

    //setIntialPosts
    useEffect(() => {
        const getPosts = async () => {
            try {
                const req = await fetch(`${API_URL}${POSTS}`)
                const data = await req.json()
                setPosts(data)
            } catch (error) {
                console.log(error)
            }

        }
        getPosts()
    }, [])

    return (
        <Link href={`${FRONTEND_API_URL}/${posts}`}>
            <a>
                <Post posts={posts} />
            </a>
        </Link>
    );
};

export default Posts;
