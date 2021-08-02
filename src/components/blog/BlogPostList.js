import BlogPost from "./BlogPost";
import styles from "./BlogPostList.module.css";

const BlogPostList = (props) => {
  const { posts } = props;

  const postItems = posts.map((post) => (
    <li key={post.id}>
      <BlogPost post={post} />
    </li>
  ));

  return <ul className={styles["post-list"]}>{postItems}</ul>;
};

export default BlogPostList;
