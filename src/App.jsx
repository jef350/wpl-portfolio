import { NavLink, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <header className="site-header">
        <nav className="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
