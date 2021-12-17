import styles from "./Blog.module.css";
import BlogNavigation from "./BlogNavigation";
import BlogPostList from "./BlogPostList";

const Blog = ({ posts, numberOfPostsToLoad, portrait, links }) => {
  return (
    <div className={styles["blog"]}>
      <div className={styles["blog-posts"]}>
        <BlogPostList posts={posts} numberOfPostsToLoad={numberOfPostsToLoad} />
      </div>
      <div className={styles["navigation"]}>
        <BlogNavigation portrait={portrait} links={links} />
      </div>
    </div>
  );
};

export default Blog;
