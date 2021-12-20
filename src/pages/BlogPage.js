import { useState, useEffect } from "react";

import Blog from "../components/blog/Blog";

import useBackend from "../hooks/use-backend";

const NUMBER_OF_POSTS_TO_LOAD = 4;

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  const { getAllBlogPosts } = useBackend();

  useEffect(() => {
    const fetchAllBlogPosts = async () => {
      const result = await getAllBlogPosts();
      setPosts(result.blogPosts);
    };
    fetchAllBlogPosts();
  }, [getAllBlogPosts]);

  return <Blog numberOfPostsToLoad={NUMBER_OF_POSTS_TO_LOAD} posts={posts} />;
};

export default BlogPage;
