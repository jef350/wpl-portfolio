import { useParams } from "react-router-dom";
import { posts } from "../data/posts";
import "../styles/post.css";

function renderContent(md) {
  const lines = md.split("\n");
  const blocks = [];
  let list = [];
  let key = 0;

  const flushList = () => {
    if (list.length) {
      blocks.push(
        <ul key={`ul-${key++}`}>
          {list.map((t, i) => <li key={`li-${key}-${i}`}>{t}</li>)}
        </ul>
      );
      list = [];
    }
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      flushList();
      continue;
    }
    if (line.startsWith("## ")) {
      flushList();
      blocks.push(<h2 key={`h2-${key++}`}>{line.slice(3)}</h2>);
      continue;
    }
    if (line.startsWith("- ")) {
      list.push(line.slice(2));
      continue;
    }
    flushList();
    blocks.push(<p key={`p-${key++}`}>{line}</p>);
  }
  flushList();
  return blocks;
}

export default function Post() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) return <p className="post-wrap">Post niet gevonden.</p>;

  const date = new Date(post.date).toLocaleDateString("nl-BE", { day: "2-digit", month: "2-digit", year: "numeric" });

  return (
    <article className="post-wrap">
      <header className="post-header">
        <h1 className="post-title">{post.title}</h1>
        <div className="post-meta">
          <span className="post-date">{date}</span>
          <span className="post-sep">|</span>
          <div className="post-tags">
            {post.tags?.map(t => (
              <span key={t} className="post-tag">{t}</span>
            ))}
          </div>
        </div>
      </header>
      <div className="post-content">
        {renderContent(post.content)}
      </div>
    </article>
  );
}
