import React, { useContext } from "react";
import { ThemeContext } from "../themeContext";

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className={`navbar ${theme}`}>
      <h2>My Website</h2>

      <div className="theme-controls">
        <button onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>

        <button onClick={() => setTheme("neon")} className="btn-neon">Neon</button>
        <button onClick={() => setTheme("blue")} className="btn-blue">Blue</button>
      </div>
    </nav>
  );
}

export default Navbar;