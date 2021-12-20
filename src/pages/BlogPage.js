import { useState, useEffect, useContext } from "react";

import Blog from "../components/blog/Blog";

import FirebaseContext from "../store/firebase-context";
import useBackend from "../hooks/use-backend";

const NUMBER_OF_POSTS_TO_LOAD = 4;

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  const { getAllBlogPosts } = useBackend();

  useEffect(() => {
    getAllBlogPosts((result) => {
      setPosts(result.blogPosts)
    })
    
    // const fetchPosts = async () => {
    //   const fetchedPosts = await getAllBlogPosts();
    //   setPosts(fetchedPosts.posts.map((post) => ({ ...post, display: false })));
    // };
    // fetchPosts();
  }, [getAllBlogPosts]);

  return <Blog numberOfPostsToLoad={NUMBER_OF_POSTS_TO_LOAD} posts={posts} />;
};

export default BlogPage;
