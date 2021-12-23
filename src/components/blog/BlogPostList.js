import BlogPost from "./BlogPost";
import styles from "./BlogPostList.module.css";

const BlogPostList = ({ posts }) => {

  const postItems = posts.map((post) => (
    <li className={styles["post-list__item"]} key={post._id}>
      <BlogPost post={post} />
      <hr className={styles["post-list__separator"]} />
    </li>
  ));

  return <ul className={styles["post-list"]}>{postItems}</ul>;
};

export default BlogPostList;
