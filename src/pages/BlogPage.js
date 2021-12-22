import { useState, useEffect } from "react";

import Blog from "../components/blog/Blog";

import useBackend from "../hooks/use-backend";

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

  const { getAllBlogPosts } = useBackend();

  useEffect(() => {
    const fetchAllBlogPosts = async () => {
      const result = await getAllBlogPosts();
      setPosts(result.blogPosts);

      setNavigationLinks(
        result.availableMonths.map((month) => ({
          text: `${MONTHS[month.month]} ${month.year}`,
          to: `blogg/${month.year}/${month.month + 1}`,
        }))
      );
    };
    fetchAllBlogPosts();
  }, [getAllBlogPosts]);

  return (
    <Blog
      numberOfPostsToLoad={NUMBER_OF_POSTS_TO_LOAD}
      posts={posts}
      links={navigationLinks}
    />
  );
};

export default BlogPage;
