import { Link } from "react-router-dom";
import { posts } from "../data/posts";

export default function Home() {
  const latest = [...posts].sort((a,b)=>new Date(b.date)-new Date(a.date))[0];
  return (
    <section>
      <h1>Welkom op mijn WPL Portfolio</h1>
      <p>Hier documenteer ik mijn stage: wekelijkse highlights, code-snippets, wins & fails.</p>
      {latest && (
        <div style={{ marginTop: 24, padding: 16, border: "1px solid #eee", borderRadius: 8 }}>
          <h2>Laatste post</h2>
          <h3><Link to={`/blog/${latest.slug}`}>{latest.title}</Link></h3>
          <small>{new Date(latest.date).toLocaleDateString()}</small>
          <p>{latest.excerpt}</p>
          <Link to="/blog">Alle posts →</Link>
        </div>
      )}
    </section>
  );
}
