
import styles from '../styles/Post.module.css'
import { formatImageUrl } from '../utils/format'


const Post = (props) => {
    const { posts } = props

    const showPosts = <div
        className={styles.posts}
        key={posts.id}>
        <div>
            <span>ID: {posts.id}</span>
        </div>
        <div>
            <h3>Title  {posts.title}</h3>
        </div>
        <p> Description {posts.description} </p>
        <div>
            <img
                src={posts.image && formatImageUrl(posts.image.url)}
                className={styles.img_url} /> </div>
        <div>
            <span>Likes: {posts.likes}</span>
        </div>
    </div>

    return (
        <div>
            POSTS
            <br />
            {showPosts}
            <br />
        </div>
    )
}

export default Post
