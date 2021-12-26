import { useEffect } from "react";
import Loader from "react-loader-spinner";
import styles from "./Blog.module.css";
import BlogNavigation from "./BlogNavigation";
import BlogPostList from "./BlogPostList";

const Blog = ({
  posts,
  portrait,
  links,
  onBottomReached,
  reachedEndOfPosts,
  isLoading,
}) => {
  // scroll to top of page whenever a link is clicked
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [links]);

  // update posts when the bottom of the page is reached (infinite scroll)
  useEffect(() => {
    const scrollHandler = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.offsetHeight * 0.95
      ) {
        onBottomReached();
      }
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [onBottomReached]);

  return (
    <>
      <div className={styles["blog"]}>
        <div className={styles["blog-posts"]}>
          <BlogPostList posts={posts} />
        </div>
        <div className={styles["navigation"]}>
          <BlogNavigation portrait={portrait} links={links} />
        </div>
      </div>
      {isLoading ? (
        <div className={styles["loader-container"]}>
          <Loader type="TailSpin" color="#e1e1e1" height={100} width={100} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Blog;
