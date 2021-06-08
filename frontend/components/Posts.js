import Link from "next/link";
import Post from "../components/Post";
import { usePost } from "../hooks/usePost"


const Posts = () => {
  const [posts, error] = usePost()
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
