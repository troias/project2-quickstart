import Post from "../../components/Post";
import ClipLoader from "react-spinners/ClipLoader";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { API_URL } from "../../utils/urls";

const SinglePost = () => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  let color = useState("#000000");

  //router related properties

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/posts/${id}`);
        const data = await response.json();

        setPost(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };
    fetchPost();
  }, []);

  return (
    <>
      <ClipLoader loading={loading} />

      {!loading && <>{post.id && <Post posts={post} />}</>}
      {!post.id && (
        <h2>
          Get the fuck out of here boi
          <br />
            {error && <p>404 post not found</p>}
        </h2>
      )}
    </>
  );
};

export default SinglePost;
