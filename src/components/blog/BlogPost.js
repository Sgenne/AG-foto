import parser from "html-react-parser";

import styles from "./BlogPost.module.css";

const BlogPost = ({ post }) => {


  const date = new Date(post.createdAt);
  const [day, month, year] = [date.getDate(), date.getMonth() + 1, date.getFullYear()];


  return (
    <div className={styles["post"]}>
      <header className={styles["post-header"]}>
        <h1 className={styles["post-header__title"]}>{post.title}</h1>
        <p className={styles["post-header__timestamp"]}>{`${day}/${month}/${year}`}</p>
      </header>
      <main className={styles["post-content"]}>
        {parser(post.content)}
      </main>
    </div>
  );
};

export default BlogPost;
