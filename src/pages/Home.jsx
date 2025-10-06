import { Link } from "react-router-dom";
import { posts } from "../data/posts";
import "../styles/home.css";

export default function Home() {
  const latest = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date))[0];

  return (
    <section className="home-wrap">
      <div className="home-banner">
        <div className="hero-text">
          <h1>Welkom op mijn WPL Portfolio</h1>
          <p>
            Ik ben Jef, graduaat Programmeren student.<br />
            Volg hier mijn stage-avonturen bij DeskDrive!
          </p>
          <div className="hero-cta">
            <Link to="/blog" className="btn btn-primary">Bekijk mijn blog →</Link>
            <Link to="/about" className="btn btn-ghost">Over mij</Link>
          </div>
          <ul className="hero-stats">
            <li><span>{posts.length}</span> blogposts</li>
            <li><span>2025</span> stagejaar</li>
            <li><span>DeskDrive</span> bedrijf</li>
          </ul>
        </div>
      </div>

      {latest && (
        <article className="latest-post-card">
          <div className="section-line" aria-hidden="true" />
          <div className="latest-header">
            <h2>Laatste post</h2>
            <Link to="/blog" className="view-all">Alles bekijken →</Link>
          </div>
          <Link to={`/blog/${latest.slug}`} className="latest-title">
            {latest.title}
          </Link>
          <p className="latest-meta">
            Laatst aangepast: {new Date(latest.date).toLocaleDateString("nl-BE", { day: "2-digit", month: "2-digit", year: "numeric" })}
          </p>
          <p className="latest-excerpt">
            {latest.excerpt ?? "Klik door om de volledige post te lezen."}
          </p>
          <Link to={`/blog/${latest.slug}`} className="btn btn-inline">Lees meer →</Link>
        </article>
      )}

      <div className="quick-grid">
        <Link to="/blog?tag=code" className="qcard">
          <h3>Code</h3>
          <p>Snippets, aanpak & technische keuzes.</p>
        </Link>
        <Link to="/blog?tag=reflectie" className="qcard">
          <h3>Reflectie</h3>
          <p>Wat liep goed? Wat neem ik mee?</p>
        </Link>
        <Link to="/blog?tag=wins" className="qcard">
          <h3>Wins</h3>
          <p>Successen en mijlpalen onderweg.</p>
        </Link>
        <Link to="/blog?tag=fails" className="qcard">
          <h3>Fails</h3>
          <p>Fouten, debugging & oplossingen.</p>
        </Link>
      </div>
    </section>
  );
}
