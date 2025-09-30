import { Outlet, NavLink } from "react-router-dom";

export default function App() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: 1.5 }}>
      <header style={{ padding: "16px 24px", borderBottom: "1px solid #eee" }}>
        <nav style={{ display: "flex", gap: 16 }}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">Over</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </nav>
      </header>
      <main style={{ maxWidth: 900, margin: "24px auto", padding: "0 16px" }}>
        <Outlet />
      </main>
      <footer style={{ borderTop: "1px solid #eee", padding: 16, textAlign: "center" }}>
        © {new Date().getFullYear()} WPL Portfolio
      </footer>
    </div>
  );
}
