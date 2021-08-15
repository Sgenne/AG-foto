import { useState, useEffect, useContext } from "react";

import BlogPostList from "../components/blog/BlogPostList";

import FirebaseContext from "../store/firebase-context";

const NUMBER_OF_POSTS_TO_LOAD = 4;

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  const firebaseContext = useContext(FirebaseContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await firebaseContext.getAllBlogPosts();
      setPosts(fetchedPosts.posts.map(post => ({...post, display: false})));
    };
    fetchPosts();
  }, [firebaseContext]);

  return (
    <BlogPostList numberOfPostsToLoad={NUMBER_OF_POSTS_TO_LOAD} posts={posts} />
  );
};

export default BlogPage;
