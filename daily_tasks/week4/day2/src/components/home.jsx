import React, { useContext } from "react";
import { ThemeContext } from "../themeContext";

function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="home-content">
      <p id="heading">Welcome to the {theme.toUpperCase()} theme!</p>
      <p>Notice how the ThemeContext is preventing props drilling.</p>
    </div>
  );
}

export default Home;