import mockPosts from "../posts.json";
import Link from "next/link";
import Post from "../components/Post";

import { useState, useEffect } from "react";
import { API_URL, POSTS } from "../utils/urls";

const Posts = () => {
  const [posts, setPosts] = useState(mockPosts);

  //setIntialPosts

  useEffect(() => {
    const getPosts = async () => {
      try {
        const req = await fetch(`${API_URL}${POSTS}`);
        const data = await req.json();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
          <Link href={`posts/${post.id}`}>
            <a>
              <Post  posts={post} />
            </a>
          </Link>
          </div>
        );
      })}
    </div>
  );
};
export default Posts;
