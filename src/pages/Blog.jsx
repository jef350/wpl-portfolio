import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { posts, allTags } from "../data/posts";
import "../styles/blog.css";

export default function Blog() {
  const [active, setActive] = useState("all");
  const filtered = useMemo(
    () => (active === "all" ? posts : posts.filter(p => p.tags.includes(active))),
    [active]
  );

  return (
    <section className="blog-wrap">
      <h1 className="blog-header">Blog</h1>

      <div className="blog-tags">
        <button
          className="blog-tag-btn"
          onClick={() => setActive("all")}
          disabled={active === "all"}
        >
          alles
        </button>
        {allTags.map(t => (
          <button
            key={t}
            className="blog-tag-btn"
            onClick={() => setActive(t)}
            disabled={active === t}
          >
            {t}
          </button>
        ))}
      </div>

      <ul className="blog-list">
        {filtered
          .slice()
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map(p => (
            <li key={p.slug} className="blog-card">
              <h3>
                <Link to={`/blog/${p.slug}`}>{p.title}</Link>
              </h3>
              <p>{p.excerpt}</p>
              <Link to={`/blog/${p.slug}`} className="lees-meer">Lees meer →</Link>
              <div className="blog-tags-list">
                {p.tags.map(tag => (
                  <span key={tag} className="blog-tag">{tag}</span>
                ))}
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
}
