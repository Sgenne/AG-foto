import styles from "./BlogPost.module.css";

const BlogPost = (props) => {
  const { post } = props;

  return (
    <div className={styles["post"]}>
      <header className={styles["post-header"]}>
        <h1 className={styles["post-header__title"]}>{post.title}</h1>
        <p className={styles["post-header__category"]}>Macro</p>
        <p className={styles["post-header__timestamp"]}>{post.timestamp}</p>
      </header>
      <main className={styles["post-content"]}>{props.content}</main>
    </div>
  );
};

export default BlogPost;
