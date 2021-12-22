import { useEffect } from "react";
import styles from "./Blog.module.css";
import BlogNavigation from "./BlogNavigation";
import BlogPostList from "./BlogPostList";

const Blog = ({ posts, numberOfPostsToLoad, portrait, links }) => {
  // scroll to top of page whenever a link is clicked
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [links]);

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
