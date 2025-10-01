import { Link } from "react-router-dom";
import { posts } from "../data/posts";

export default function Home() {
  const latest = [...posts].sort((a,b)=>new Date(b.date)-new Date(a.date))[0];
  return (
    <section>
      <h1>Welkom op mijn WPL Portfolio</h1>
      <p>Hier documenteer ik wekelijks over mijn stage.</p>
      {latest && (
        <div style={{ marginTop: 24, padding: 16, border: "1px solid #eee", borderRadius: 8 }}>
          <h2>Laatste post</h2>
          <h3><Link to={`/blog/${latest.slug}`}>{latest.title}</Link></h3>
          <p style={{ color: "#888", fontSize: "0.95em", margin: "8px 0 0" }}>
            Laatst aangepast: {new Date(latest.date).toLocaleDateString("nl-BE")}
          </p>
          <Link to="/blog">Alle posts →</Link>
        </div>
      )}
    </section>
  );
}