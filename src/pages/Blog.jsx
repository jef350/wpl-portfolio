import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { posts, allTags } from "../data/posts";

export default function Blog() {
  const [active, setActive] = useState("all");
  const filtered = useMemo(
    () => active === "all" ? posts : posts.filter(p => p.tags.includes(active)),
    [active]
  );

  return (
    <section>
      <h1>Blog</h1>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", margin: "8px 0 16px" }}>
        <button onClick={()=>setActive("all")} disabled={active==="all"}>alles</button>
        {allTags.map(t => (
          <button key={t} onClick={()=>setActive(t)} disabled={active===t}>{t}</button>
        ))}
      </div>

      <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 12 }}>
        {filtered
          .sort((a,b)=>new Date(b.date)-new Date(a.date))
          .map(p => (
          <li
            key={p.slug}
            style={{
              border: "1px solid #eee",
              borderRadius: 8,
              padding: 16,
              position: "relative",
              minHeight: 120
            }}
          >
            <h3><Link to={`/blog/${p.slug}`}>{p.title}</Link></h3>
            <p>{p.excerpt}</p>
            <Link to={`/blog/${p.slug}`}>Lees meer →</Link>
            <div
              style={{
                position: "absolute",
                right: 16,
                bottom: 16,
                display: "flex",
                gap: 6,
                flexWrap: "wrap"
              }}
            >
              {p.tags.map(tag => (
                <span
                  key={tag}
                  style={{
                    background: "#f3f3f3",
                    borderRadius: 4,
                    padding: "2px 8px",
                    fontSize: "0.85em",
                    color: "#555"
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}