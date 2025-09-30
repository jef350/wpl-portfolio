import { useParams, Link } from "react-router-dom";
import { posts } from "../data/posts";

function mdToHtml(md) {
  return md
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    .replace(/\*\*(.*)\*\*/gim, "<b>$1</b>")
    .replace(/\*(.*)\*/gim, "<i>$1</i>")
    .replace(/\n/gim, "<br/>");
}

export default function Post() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) return <p>Post niet gevonden. <Link to="/blog">Terug</Link></p>;

  return (
    <article>
      <Link to="/blog">← Terug</Link>
      <h1>{post.title}</h1>
      <small>{new Date(post.date).toLocaleDateString()} — {post.tags.join(", ")}</small>
      <div style={{ marginTop: 16 }} dangerouslySetInnerHTML={{ __html: mdToHtml(post.content) }} />
    </article>
  );
}
