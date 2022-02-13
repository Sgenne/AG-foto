import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Blog from "./Blog";

import { getBlogPosts, getBlogPostsByMonth } from "../../utils/backend.util";
import { BlogPost } from "../../model/blogPost.interface";
import { Link } from "../../model/link.interface";

const DUMMY_PORTRAIT = {
  category: "sjdskdjfh",
  _id: "sldkjfhdskjfhsdkfjhfdk",
  imageUrl:
    "https://upload.wikimedia.org/wikipedia/commons/3/3a/Gorilla_Cin_Zoo_020.jpg",
  compressedImageUrl:
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
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [navigationLinks, setNavigationLinks] = useState<Link[]>([]); // links appearing in sidebar to posts from different months
  const [reachedEndOfPosts, setReachedEndOfPosts] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { year, month } = useParams<{ year: string; month: string }>();

  // fetch posts from backend
  useEffect(() => {
    const fetchAllBlogPosts = async () => {
      // Fetch posts from specified month and year if provided. Otherwise, fetch all posts.
      const { blogPosts, availableMonths } =
        year && month
          ? await getBlogPostsByMonth(+year, +month - 1)
          : await getBlogPosts({ numberOfPosts: NUMBER_OF_POSTS_TO_LOAD });

      setPosts(blogPosts);
      setNavigationLinks(
        availableMonths.map((month: { year: number; month: number }) => ({
          text: `${MONTHS[month.month]} ${month.year}`,
          to: `/blogg/${month.year}/${month.month + 1}`,
        }))
      );
      setIsLoading(false);
    };
    fetchAllBlogPosts();
    setReachedEndOfPosts(false);
  }, [year, month]);

  const bottomReachedHandler = async () => {
    if (reachedEndOfPosts || !posts || posts.length === 0) return;

    // only posts from before the last current post should be fetched
    const lastPost = posts[posts.length - 1];

    const { blogPosts } = await getBlogPosts({
      numberOfPosts: NUMBER_OF_POSTS_TO_LOAD,
      latestDate: lastPost.createdAt,
    });

    // if the number of received posts is smaller than the number asked for,
    // then we must have reached the end of the blog posts
    if (blogPosts.length < NUMBER_OF_POSTS_TO_LOAD) {
      setReachedEndOfPosts(true);
    }

    // append fetched posts to the list of posts
    setPosts((prevPosts) => [...prevPosts, ...blogPosts]);
  };

  return (
    <Blog
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
