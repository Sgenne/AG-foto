import parser from "html-react-parser";

import styles from "./BlogPost.module.css";

const BlogPost = ({ post }) => {
  //const [displayPost, setDisplay] = useState(false)


  const date = new Date(post.timestamp);
  const [day, month, year] = [date.getDate(), date.getMonth(), date.getFullYear()];


  return (
    <div className={styles["post"]}>
      <header className={styles["post-header"]}>
        <h1 className={styles["post-header__title"]}>{post.title}</h1>
        <p className={styles["post-header__category"]}>Macro</p>
        <p className={styles["post-header__timestamp"]}>{`${day}/${month}/${year}`}</p>
      </header>
      <main className={styles["post-content"]}>
        {parser(post.content)}
      </main>
    </div>
  );
};

export default BlogPost;
