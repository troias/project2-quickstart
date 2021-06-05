import styles from "../styles/Post.module.css";
import { formatImageUrl } from "../utils/format";

const Post = (props) => {
  const { posts } = props;

  const showPosts = (
    <div className={styles.posts} key={posts.id}>
      <h3>Posts:</h3>
      <div>
        <span>Post ID: {posts.id}</span>
      </div>
      <div>
        <h3>Post title </h3>
        <span> {posts.title}</span>
      </div>
      <h3>Post description </h3>
      <p> {posts.description}</p>
      <div className={styles.img_wrapper}>
        <img
          src={posts.image && formatImageUrl(posts.image.url)}
          className={styles.img_url}
        />
      </div>
      <div className={styles.likes_wrapper}>
        <span>Likes: {posts.likes}</span>
      </div>
    </div>
  );

  return <div>{showPosts}</div>;
};

export default Post;
