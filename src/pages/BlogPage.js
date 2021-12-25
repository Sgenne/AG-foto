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
  const [reachedEndOfPosts, setReachedEndOfPosts] = useState(false);

  const { getBlogPosts, getBlogPostsByMonth, isLoading } = useBackend();
  const { year, month } = useParams();

  // fetch posts from backend
  useEffect(() => {
    const fetchAllBlogPosts = async () => {
      // Fetch posts from specified month and year if provided. Otherwise, fetch all posts.
      const { blogPosts, availableMonths } =
        year && month
          ? await getBlogPostsByMonth(year, month - 1)
          : await getBlogPosts({ numberOfPosts: NUMBER_OF_POSTS_TO_LOAD });

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
    if (isLoading || reachedEndOfPosts || !posts || posts.length === 0) return;

    // only posts from before the last current post should be fetched
    const lastPost = posts[posts.length - 1];

    console.log("reachedEndOfPosts: ", reachedEndOfPosts);

    const newPosts = await getBlogPosts({
      numberOfPosts: NUMBER_OF_POSTS_TO_LOAD,
      latestDate: lastPost.createdAt,
    });

    console.log("newPosts.length: ", newPosts.length);
    console.log("NUMBER_OF_POSTS_TO_LOAD: ", NUMBER_OF_POSTS_TO_LOAD);

    // if the number of received posts is smaller than the number asked for,
    // then we must have reached the end of the blog posts
    if (newPosts.blogPosts.length < NUMBER_OF_POSTS_TO_LOAD) {
      setReachedEndOfPosts(true);
    }

    // append fetched posts to the list of posts
    setPosts((prevPosts) => [...prevPosts, ...newPosts.blogPosts]);
  };

  return (
    <Blog
      numberOfPostsToLoad={NUMBER_OF_POSTS_TO_LOAD}
      posts={posts}
      links={navigationLinks}
      portrait={DUMMY_PORTRAIT}
      onBottomReached={bottomReachedHandler}
      reachedEndOfPosts={reachedEndOfPosts}
      isLoading={isLoading}
    />
  );
};

export default BlogPage;
