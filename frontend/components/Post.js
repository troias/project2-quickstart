import React from 'react'
import styles from '../styles/Post.module.css'
import { formatImageUrl } from '../utils/format'

const Post = (props) => {
    const {posts} = props

    const showPosts = posts.map((post) => {
        return (
            <div
                className={styles.posts}
                key={post.id}>
                <div>
                    <span>ID: {post.id}</span>
                </div>
                <div>
                    <h3>Title  {post.title}</h3>
                </div>
                <p> Description {post.description} </p>
                <div>
                    <img
                        src={formatImageUrl(post.image.url)}
                        className={styles.img_url} /> </div>
                <div>
                    <span>Likes: {post.likes}</span>
                </div>
            </div>
        );
    })

    return (
        <div>
            POSTS
            <br />
            { showPosts  }
            <br />
        </div>
    )
}

export default Post
