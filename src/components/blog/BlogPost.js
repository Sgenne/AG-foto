import styles from "./BlogPost.module.css";

const BlogPost = (props) => {
  const { post } = props;

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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ea odio accusantium porro, quaerat rem placeat optio similique consequuntur sequi illo laborum quos illum molestias! Iusto, illum perferendis! Facere, neque.
        Alias ducimus aliquid impedit ratione dignissimos error quod maxime nostrum maiores mollitia placeat fugit, veniam, quasi ab dicta repudiandae esse repellendus! Vel in quam accusamus perspiciatis, ea repellendus exercitationem cupiditate?
        Molestias repellat qui recusandae possimus aspernatur obcaecati doloremque, reprehenderit deleniti, odit quia dolores voluptates temporibus fuga expedita commodi rerum totam adipisci sint dolore! Numquam enim sapiente adipisci illum aperiam qui!
      </main>
    </div>
  );
};

export default BlogPost;
