import React, { useState, useEffect } from "react";
import { ThemeContext } from "./themeContext";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`app ${theme}`}>
        <Navbar />
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;