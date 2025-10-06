import cv from "../assets/cv.png";
import "../styles/about.css";

export default function About() {
  return (
    <section className="about">
      <header className="about__header">
        <img className="about__photo" src={cv} alt="jef – profielfoto" />
        <div>
          <h1>Jef Van Linden</h1>
          <p className="about__subtitle">Graduaat Programmeren — Full-stack stagiair</p>
          <p>
            Ik ben Jef, graduaat Programmeren student. Tijdens deze WPL werk ik als
            <strong> full-stack stagiair</strong> bij <strong>DeskDrive</strong>, met focus op
            API’s, React en integraties.
          </p>
        </div>
      </header>

      <div className="about__grid">
        <article className="about-card">
          <h2>Stage & Bedrijf</h2>
          <ul className="list">
            <li><strong>Bedrijf:</strong> DeskDrive</li>
            <li><strong>Rol:</strong> Full-stack stagiair — API’s, React, integraties</li>
            <li><strong>Taken:</strong> features bouwen, koppelingen testen, documenteren</li>
          </ul>
        </article>

        <article className="about-card">
          <h2>Vaardigheden</h2>
          <div className="skills">
            <div>
              <h3>Frontend</h3>
              <ul className="list">
                <li>React (Vite), React Router</li>
                <li>HTML, CSS, Tailwind</li>
                <li>JavaScript / TypeScript</li>
              </ul>
            </div>
            <div>
              <h3>Backend & Tools</h3>
              <ul className="list">
                <li>Node.js, API-integraties</li>
                <li>C#, SQL, Docker</li>
                <li>Git, VS Code</li>
              </ul>
            </div>
          </div>
        </article>

        <article className="about-card">
          <h2>Opleiding</h2>
          <ul className="list">
            <li><strong>Graduaat Programmeren</strong></li>
          </ul>
        </article>

        <article className="about-card">
          <h2>Contact</h2>
          <p>
            Mail: <span className="muted">jefvanlinden.jvl@gmail.com</span><br />
            Locatie: België<br />
            LinkedIn: <a href="https://www.linkedin.com/in/jef-van-linden-9a906129b/" target="_blank" rel="noreferrer" className="muted">linkedin.com/in/jef-van-linden-9a906129b</a><br />
            GitHub: <a href="https://github.com/jef350" target="_blank" rel="noreferrer" className="muted">github.com/jef350</a>
          </p>
        </article>
      </div>
    </section>
  );
}
