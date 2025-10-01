import { useParams } from "react-router-dom";
import { posts } from "../data/posts";

export default function Post() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) return <p>Post niet gevonden.</p>;

  return (
    <article>
      <h1>{post.title}</h1>
      <p style={{ marginTop: "16px" }}>{post.content}</p>
    </article>
  );
}