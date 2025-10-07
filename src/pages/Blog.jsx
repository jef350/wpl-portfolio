import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { posts } from "../data/posts";
import "../styles/blog.css";

const TAGS = [
  "wins",
  "lessons learned",
  "code",
  "feedback",
  "planning",
  "probleem",
  "oplossing",
  "reflectie",
  "fails"
];

export default function Blog() {
  const [active, setActive] = useState("all");

  const allTags = useMemo(
    () =>
      Array.from(
        new Set([...TAGS, ...posts.flatMap((p) => p.tags || [])])
      ).sort((a, b) => a.localeCompare(b, "nl")),
    []
  );

  const filtered = useMemo(
    () =>
      active === "all"
        ? posts
        : posts.filter(
            (p) => Array.isArray(p.tags) && p.tags.includes(active)
          ),
    [active]
  );

  return (
    <section className="blog-wrap">
      <div className="blog-banner">
        <div className="hero-text">
          <h1>welkom op mijn blog</h1>
          <p>hier deel ik updates, code en reflecties tijdens mijn stage bij DeskDrive.</p>
          <div className="hero-cta">
            <Link to="/" className="btn btn-ghost">terug naar home</Link>
            <Link to="/about" className="btn btn-primary">over mij</Link>
          </div>
          <ul className="hero-stats">
            <li><span>{posts.length}</span> blogposts</li>
            <li><span>2025</span> stagejaar</li>
            <li><span>deskdrive</span> bedrijf</li>
          </ul>
        </div>
      </div>

      <div className="blog-tags">
        <button
          className={`blog-tag-btn ${active === "all" ? "all-btn" : ""}`}
          onClick={() => setActive("all")}
          disabled={active === "all"}
        >
          alles
        </button>

        {allTags.map((t) => (
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
          .map((p) => (
            <li key={p.slug} className="blog-card">
              <h3>{p.title}</h3>

              <p className="blog-meta">
                {p.date
                  ? new Date(p.date).toLocaleDateString("nl-BE", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })
                  : null}
              </p>

              <p>{p.excerpt ?? "klik door om de volledige post te lezen."}</p>

              <Link to={`/blog/${p.slug}`} className="lees-meer">Lees meer →</Link>

              <div className="blog-tags-list">
                {p.tags?.map((tag) => (
                  <span key={tag} className="blog-tag">{tag}</span>
                ))}
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
}
