import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Blog from "../components/blog/Blog";

import useBackend from "../hooks/use-backend";

const DUMMY_PORTRAIT = {
  imageUrl:
    "https://upload.wikimedia.org/wikipedia/commons/3/3a/Gorilla_Cin_Zoo_020.jpg",
};

const NUMBER_OF_POSTS_TO_LOAD = 4;

const MONTHS = [
  "januari",
  "februari",
  "mars",
  "april",
  "maj",
  "juni",
  "juli",
  "augusti",
  "september",
  "oktober",
  "november",
  "december",
];

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [navigationLinks, setNavigationLinks] = useState(); // links appearing in sidebar to posts from different months

  const { getBlogPosts, getBlogPostsByMonth } = useBackend();
  const { year, month } = useParams();

  // fetch posts from backend
  useEffect(() => {
    const fetchAllBlogPosts = async () => {
      // Fetch posts from specified month and year if provided. Otherwise, fetch all posts.
      const { blogPosts, availableMonths } =
        year && month
          ? await getBlogPostsByMonth(year, month - 1)
          : await getBlogPosts();

      setPosts(blogPosts);

      setNavigationLinks(
        availableMonths.map((month) => ({
          text: `${MONTHS[month.month]} ${month.year}`,
          to: `/blogg/${month.year}/${month.month + 1}`,
        }))
      );
    };
    fetchAllBlogPosts();
  }, [getBlogPosts, getBlogPostsByMonth, year, month]);

  const bottomReachedHandler = async () => {
    const lastPost = posts[posts.length - 1];

    const newPosts = await getBlogPosts(
      NUMBER_OF_POSTS_TO_LOAD,
      lastPost.createdAt.toISOString()
    );
    setPosts((prevPosts) => [...prevPosts, ...newPosts]);
  };

  return (
    <Blog
      numberOfPostsToLoad={NUMBER_OF_POSTS_TO_LOAD}
      posts={posts}
      links={navigationLinks}
      portrait={DUMMY_PORTRAIT}
      onBottomReached={bottomReachedHandler}
    />
  );
};

export default BlogPage;
