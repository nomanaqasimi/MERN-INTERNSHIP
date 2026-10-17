import { useTheme } from "../context/ThemeContext";

export default function Navbar({ toggleSidebar }) {
  const { dark, toggleTheme } = useTheme();

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors">
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="md:hidden text-2xl text-gray-700 dark:text-gray-200 focus:outline-none">
          ☰
        </button>
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Dashboard Overview</h1>
      </div>

      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white rounded-md shadow-md font-medium"
      >
        {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
}