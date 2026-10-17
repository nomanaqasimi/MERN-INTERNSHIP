import { NavLink } from "react-router-dom";
import "../css/navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <NavLink to="/" className="link">Home</NavLink>
      <NavLink to="/about" className="link">About</NavLink>
      <NavLink to="/contact" className="link">Contact</NavLink>
      <NavLink to="/dashboard" className="link">Dashboard</NavLink>
      <NavLink to="/post/42" className="link">Sample Post</NavLink>
    </nav>
  );
}

export default Navbar;