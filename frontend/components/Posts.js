import Link from "next/link";
import Post from "../components/Post";

import { useContext } from "react";
import PostContext from "../context/PostsContext";
import { useEffect, useState } from "react";
import { usePost } from "../hooks/usePost"
import mockPosts from "../posts.json"

const Posts = () => {
  const [posts, error] = usePost({})
  // const [posts, setPosts] = usePost(mockPosts)
  console.log(posts)
  // const obj = posts.map(post => post.id)
  // console.log(obj)
  // // setIntialPosts





  return (
    <>
    {console.log(posts)}
   {posts.map(post => {
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
 </>
  )




}
export default Posts;
