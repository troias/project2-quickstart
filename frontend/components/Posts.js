import styles from "../styles/Home.module.css"
import { formatImageUrl } from '../utils/format'






const Posts = (props) => {
    const { posts } = props
    console.log("props", props)
    return (
        <div>
            POSTS

            <br />
            {posts.map((post) => {
                return (
                    <div 
                    className={styles.posts}
                    key={post.id}>
                        <div>
                            <span>ID: {post.id}</span>
                        </div>
                        <h4> {post.description} </h4>
                        <div> 
                            
                           <img 
                            src={formatImageUrl(post.image.map(image => image.url))}
                            className={styles.img_url}/> </div>
                        <div>
                            <span>Likes: {post.likes}</span>
                        </div>
                    </div>
                );
            })}
            <br />
        </div>
    );
};

export default Posts;
