import { useState, useEffect } from "react";
import BlogPostList from "../components/blog/BlogPostList";

const DUMMY_POSTS = [
  {
    content: "This is the content",
    id: 0,
    title: "This is the title",
    timestamp: "2021-08-02T19:43:36.932Z",
  },
  {
    content: "Thissldjhskfjhkjhfb is the content",
    id: 1,
    title: "dTghdfgisd fgis tsdfshe title",
    timestamp: "2021-08-02T19:43:36.932Z",
  },
  {
    content: "This is sdlfgkjoiieryfthe content",
    id: 2,
    title: "This is the titghsdlkgjlskdjglsdfkgle",
    timestamp: "2021-08-02T19:43:36.932Z",
  },
  {
    content: "This is the contensfsfghfhgdghfhghddft",
    id: 3,
    title: "This isghjghjgh theölkjh tgitle",
    timestamp: "2021-08-02T19:43:36.932Z",
  },
  {
    content: "This is the qewrwertertycontent",
    id: 4,
    title: "Thisyrewert is the titlurtyeye",
    timestamp: "2021-08-02T19:43:36.932Z",
  },
];

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Temporary. Fetch from firebase instead.
    setPosts(DUMMY_POSTS);
  }, []);

  return <BlogPostList posts={posts} />;
};

export default BlogPage;
