import BlogPost from "./BlogPost";
import "./BlogPostList.css";
import { BlogPost as BP } from "../../model/blogPost.interface";

interface BlogPostListProps {
  posts: BP[];
}

const BlogPostList = ({ posts }: BlogPostListProps) => {
  const postItems = posts.map((post) => (
    <li className="post-list__item" key={post._id}>
      <BlogPost post={post} />
      <hr className="post-list__separator" />
    </li>
  ));

  return <ul className="post-list">{postItems}</ul>;
};

export default BlogPostList;
