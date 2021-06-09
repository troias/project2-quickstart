import Post from "../../components/Post";
import ClipLoader from "react-spinners/ClipLoader";

import { useState, useEffect, useContext, useCallback } from "react";
import { useRouter } from "next/router";
import { API_URL } from "../../utils/urls";
import { AuthContext } from '../../context/AuthContext'

const SinglePost = () => {
    
    const router = useRouter();
    const { user, setUser } = useContext(AuthContext)
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});
    const [edit, setEdit] = useState(false);
    const [description, setDescription] = useState("")
    const { id } = router.query;

    //router related properties

    useEffect(() => {
        //async task
        fetchSinglePost();
        return () => {

        }
    }, []);

    // useEffect(() => {
    //     console.log("mounted")
    // })



    //handlers

    const fetchSinglePost = async () => {

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
                        'content-type': 'application/json',
                        'Authorization': `Bearer ${user.jwt}`
                    },
                    body: JSON.stringify({
                        description
                    })
                })
                const data = await response.json()
                setDescription(data)
                setLoading(false)
                router.push("/")
            } catch (error) {
                setLoading(false)
                setError(error)
            }
            fetchSinglePost();
            setEdit(false)
        }
    
    const deleteHandler = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${API_URL}/posts/${id}`, {
                "method": "DELETE",
                headers: {
                    'Authorization': `Bearer ${user.jwt}`
                },
            })
            const data = await response.json()
            router.push("/")

        } catch (error) {
            setLoading(false)
            alert(error)
        }
    }

    // intial side effect

  

    return (
        <>
            <ClipLoader loading={loading} />

            {!loading &&
                <>
                    {post.id &&
                        <>  
                        {/* {error && <span>{alert(error.message)}</span>} */}
                            <Post posts={post} />
                            {user &&
                                <>
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
