import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">📸 Photo Gallery</h2>

      <div className="nav-links">
        <Link to="/">Gallery</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </nav>
  );
};

export default Navbar;
