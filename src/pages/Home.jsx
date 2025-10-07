import { Link } from "react-router-dom";
import { posts } from "../data/posts";
import "../styles/home.css";

export default function Home() {
  const latest = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date))[0];

  return (
    <section className="home-wrap">
      <div className="home-banner">
        <div className="hero-text">
          <h1>welkom op mijn wpl portfolio</h1>
          <p>
            ik ben jef, graduaat programmeren student — 
            volg hier mijn stage bij deskdrive
          </p>
          <div className="hero-cta">
            <Link to="/blog" className="btn btn-primary">bekijk mijn blog</Link>
            <Link to="/about" className="btn btn-ghost">over mij</Link>
          </div>
          <ul className="hero-stats">
            <li><span>{posts.length}</span> blogposts</li>
            <li><span>2025</span> stagejaar</li>
            <li><span>deskdrive</span> bedrijf</li>
          </ul>
        </div>
      </div>

      {latest && (
        <article className="latest-post-card">
          <div className="latest-header">
            <h2>laatste post</h2>
            <Link to="/blog" className="view-all">alles bekijken</Link>
          </div>
          <h3 className="latest-title">{latest.title}</h3>
          <p className="latest-meta">
            laatst aangepast: {new Date(latest.date).toLocaleDateString("nl-BE", { day: "2-digit", month: "2-digit", year: "numeric" })}
          </p>
          <p className="latest-excerpt">
            {latest.excerpt ?? "klik door om de volledige post te lezen."}
          </p>
          <Link to={`/blog/${latest.slug}`} className="btn btn-inline">lees meer→</Link>
        </article>
      )}
    </section>
  );
}