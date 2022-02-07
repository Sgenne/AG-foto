import { useEffect } from "react";
import Loader from "react-loader-spinner";
import { BlogPost } from "../../model/blogPost.interface";
import { Image } from "../../model/image.interface";
import { Link } from "../../model/link.interface";
import "./Blog.css";
import BlogNavigation from "./BlogNavigation";
import BlogPostList from "./BlogPostList";

interface BlogProps {
  posts: BlogPost[];
  portrait: Image;
  links: Link[];
  onBottomReached: () => void;
  reachedEndOfPosts: boolean;
  isLoading: boolean;
}

const Blog = ({
  posts,
  portrait,
  links,
  onBottomReached,
  reachedEndOfPosts,
  isLoading,
}: BlogProps) => {
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
      <div className="blog">
        <div className="blog-posts">
          <BlogPostList posts={posts} />
        </div>
        <div className="navigation">
          <BlogNavigation portrait={portrait} links={links} />
        </div>
      </div>
      {isLoading ? (
        <div className="loader-container">
          <Loader type="TailSpin" color="#e1e1e1" height={100} width={100} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Blog;
