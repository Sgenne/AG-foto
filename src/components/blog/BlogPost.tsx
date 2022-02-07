import parser from "html-react-parser";
import { BlogPost as BP } from "../../model/blogPost.interface";

import "./BlogPost.css";

interface BlogPostProps {
  post: BP;
}

const BlogPost = ({ post }: BlogPostProps) => {
  const date = new Date(post.createdAt);
  const [day, month, year] = [
    date.getDate(),
    date.getMonth() + 1,
    date.getFullYear(),
  ];

  return (
    <div className="post">
      <header className="post-header">
        <h1 className="post-header__title">{post.title}</h1>
        <p className="post-header__timestamp">{`${day}/${month}/${year}`}</p>
      </header>
      <main className="post-content">{parser(post.content)}</main>
    </div>
  );
};

export default BlogPost;
