import BlogPost from "./BlogPost";
import styles from "./BlogPostList.module.css";

const BlogPostList = (props) => {
  const { posts } = props;

  const postItems = posts.map((post) => (
    <li className={styles["post-list__item"]} key={post.id}>
      <BlogPost post={post} />
      <hr className={styles["post-list__separator"]}/>
    </li>
  ));

  return <ul className={styles["post-list"]}>{postItems}</ul>;
};

export default BlogPostList;
