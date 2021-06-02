import Post from "../../components/Post";
import ClipLoader from "react-spinners/ClipLoader";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { API_URL } from "../../utils/urls";

const SinglePost = () => {

    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});
    const [edit, setEdit] = useState(false);
    const [description, setDescription] = useState("")


    //router related properties

    const router = useRouter();
    const { id } = router.query;


    //handlers

    const fetchPost = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${API_URL}/posts/${id}`);
            const data = await response.json();

            setPost(data);
            setDescription(data.description)
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };

    const editHandler = async (event) => {
        event.preventDefault()
        try {
            setLoading(true)
            const response = await fetch(`${API_URL}/posts/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                }, 
                body: JSON.stringify({ 
                    description
                })
            })
            const data = await response.json()
            console.log("data", data)
            setDescription(data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(error)
        }
        fetchPost();
        setEdit(false)
    }

    const deleteHandler = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${API_URL}/posts/${id}`, {
                "method": "DELETE"
            })
            const data = await response.json()
            router.back()

        } catch (error) {
            setLoading(false)
        }
    }

    // intial side effect

    useEffect(() => {
        fetchPost();
    }, []);

    return (
        <>
            <ClipLoader loading={loading} />

            {!loading &&
                <>
                    {post.id &&
                        <>
                            <Post posts={post} />
                            <button onClick={deleteHandler} >Delete</button>
                            <button onClick={() => setEdit(!edit)}>Edit</button>
                            {edit &&
                                <form onSubmit={editHandler}>
                                    <input
                                        type="text"
                                        value={description}
                                        placeholder="New description"
                                        onChange={(event) => setDescription(event.target.value)}
                                    />
                                    <button>Confirm change</button>
                                </form>
                            }
                        </>
                    }
                </>
            }
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