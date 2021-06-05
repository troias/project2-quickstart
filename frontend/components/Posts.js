import Link from "next/link";
import Post from "../components/Post";

import { useContext } from "react";
import PostContext from "../context/PostsContext";
import { useEffect, useState, useMemo } from "react";
import { usePost } from "../hooks/usePost"
import mockPosts from "../posts.json"

const Posts = () => {
  const [posts, error, fetchPost, setPosts] = usePost()

  
  console.log(posts)


  return (
    <>
    {posts && posts.map(post => {
      return (
        <div key={post.id}>
          <Link href={`posts/${post.id}`}>
            <a>
              <Post posts={post} />
            </a>
          </Link>
        </div>
      )
    })} 
    {!posts && error }    
 </> 
  )
}

export default Posts;
