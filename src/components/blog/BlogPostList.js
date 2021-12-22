import { useState, useEffect, useCallback } from "react";

import BlogPost from "./BlogPost";
import styles from "./BlogPostList.module.css";

const BlogPostList = ({ posts, numberOfPostsToLoad }) => {
  const [displayedPosts, setDisplayedPosts] = useState(
    posts.slice(0, numberOfPostsToLoad)
  );

  useEffect(() => {
    setDisplayedPosts(posts.slice(0, numberOfPostsToLoad));
  }, [posts, numberOfPostsToLoad]);

  const scrollHandler = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.offsetHeight * 0.95
    ) {
      console.log("at bottom"); // add "onAtBottom"
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [scrollHandler]);

  const postItems = displayedPosts.map((post) => (
    <li className={styles["post-list__item"]} key={post._id}>
      <BlogPost post={post} />
      <hr className={styles["post-list__separator"]} />
    </li>
  ));

  return <ul className={styles["post-list"]}>{postItems}</ul>;
};

export default BlogPostList;
