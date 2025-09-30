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
          <li key={p.slug} style={{ border: "1px solid #eee", borderRadius: 8, padding: 16 }}>
            <h3><Link to={`/blog/${p.slug}`}>{p.title}</Link></h3>
            <small>{new Date(p.date).toLocaleDateString()} — {p.tags.join(", ")}</small>
            <p>{p.excerpt}</p>
            <Link to={`/blog/${p.slug}`}>Lees meer →</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
