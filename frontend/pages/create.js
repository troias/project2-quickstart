import React, { useState } from 'react'
import styles from '../styles/Create.module.scss'
import { useRouter } from 'next/router'
import { API_URL } from '../utils/urls'

const create = () => {

    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')
    const [likes, setLikes] = useState('')
    const [file, setFile] = useState(null)
    const [author, setAuthor] = useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault()

        const formData = new FormData()
        formData.append("data", JSON.stringify({
            description, 
            title, 
            likes
        }))
        formData.append("files.image", file)

        const res = await fetch(`${API_URL}/posts`, {
            method: 'POST',

            body: formData

        })
        const data = await res.json()
        console.log("data", data)
        // router.back()
    }

    return (
        <div>
            <div>
                <h2 className={styles.title}>Create</h2>
            </div>

            <form onSubmit={handleSubmit}
                className={styles.form}>
                <input
                    className={styles.input}
                    placeholder="Title"
                    onChange={(event) => setTitle(event.target.value)}
                />
                <br />
                <input
                    className={styles.input}
                    placeholder="Description"
                    onChange={(event) => setDescription(event.target.value)}
                />
                <br />
                <input
                    className={styles.input}
                    placeholder="Likes"
                    onChange={(event) => setLikes(event.target.value)}
                />
                <br />
                <input
                    type="file"
                    placeholder="Add a image"
                    onChange={(event) => setFile(event.target.files[0])}
                >

                </input>
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default create
