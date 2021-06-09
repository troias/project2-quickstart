import React, { useState, useContext } from "react";
import styles from "../styles/Create.module.scss";
import { useRouter } from "next/router";
import { API_URL } from "../utils/urls";
import {AuthContext} from "../context/AuthContext"
const create = () => {

    const router = useRouter()
    const { user } = useContext(AuthContext);
    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");
    const [file, setFile] = useState(null);
    const [error, setError] = useState("")
    // const [author, setAuthor] = useState(null)



    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!user){
            setError("please log in first")
            router.push("/login")
            return
        }

        if (!description) {
            setError("Add description you fuck head");
            return;
        }

        if (!title) {
            setError("Add title you imbecile ")
            return;
        }

        if (!file) {
            setError("Bro add a image cunt")
            return;
        }
        const formData = new FormData();
        formData.append(
            "data",
            JSON.stringify({
                description,
                title,
            })
        );
        formData.append("files.image", file);

        try {
            const res = await fetch(`${API_URL}/posts`, {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${user.jwt}`
                },
                body: formData
            });
            const data = await res.json();
            setFile(data)
            console.log("submit", data)
            router.push("/")

        } catch (error) {
            setError(error);
            console.log("data", error);
        }
    };

    return (
        <div>
            <div>
                <h2 className={styles.title}>Create</h2>
            </div>
            {error && <p> {error.message || error} </p>}
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    className={styles.input}
                    placeholder="Title"
                    onChange={(event) => {
                        setError("")
                        setTitle(event.target.value)
                    }}
                />
                <br />
                <input
                    className={styles.input}
                    placeholder="Description"
                    onChange={(event) => {
                        setError("")
                        setDescription(event.target.value)
                    }}
                />
                <br />
                <input
                    type="file"
                    placeholder="Add a image"
                    onChange={(event) => {
                        setError("")
                        setFile(event.target.files[0])
                    }}
                ></input>
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default create;
