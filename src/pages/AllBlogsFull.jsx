import { posts } from "../data/posts";
import "../styles/post.css";
import "../styles/all-blogs-full.css";

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
    if (line.startsWith("![")) {
      flushList();
      const imgMatch = line.match(/!\[([^\]]*)\]\(([^)]+)\)/);
      if (imgMatch) {
        const [, alt, src] = imgMatch;
        blocks.push(<img key={`img-${key++}`} src={src} alt={alt} className="post-image" />);
      }
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

export default function AllBlogsFull() {
  const sortedPosts = posts
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <section className="all-blogs-full">
      <div className="all-blogs-header">
        <p className="all-blogs-eyebrow">tijdelijke overzichtspagina</p>
        <h1>Alle blogs</h1>
        <p>Alle posts volledig onder elkaar, rechtstreeks uit hetzelfde archief.</p>
      </div>

      {sortedPosts.map((post) => {
        const date = post.date
          ? new Date(post.date).toLocaleDateString("nl-BE", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })
          : null;

        return (
          <article key={post.slug} className="post-wrap full-post-card">
            <header className="post-header">
              <h2 className="post-title">{post.title}</h2>
              <div className="post-meta">
                {date ? <span className="post-date">{date}</span> : null}
                {post.tags?.length ? (
                  <>
                    <span className="post-sep">|</span>
                    <div className="post-tags">
                      {post.tags.map((t) => (
                        <span key={t} className="post-tag">{t}</span>
                      ))}
                    </div>
                  </>
                ) : null}
              </div>
            </header>
            <div className="post-content">
              {renderContent(post.content)}
            </div>
          </article>
        );
      })}
    </section>
  );
}
