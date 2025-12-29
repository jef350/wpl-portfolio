import { Link } from "react-router-dom";
import deskdriveLogo from "../assets/deskdrivelogo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/blog" className="navbar-link">Blog</Link>
        <Link to="/blog/alles" className="navbar-link">Alle blogs</Link>
        <Link to="/about" className="navbar-link">About</Link>
      </div>
      <img src={deskdriveLogo} alt="DeskDrive logo" className="navbar-logo" />
    </nav>
  );
}
