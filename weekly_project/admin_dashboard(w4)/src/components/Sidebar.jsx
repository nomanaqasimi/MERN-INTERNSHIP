import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ isOpen, setIsOpen }) {
  const location = useLocation();

  const links = [
    { name: "Dashboard", path: "/" },
    { name: "Users", path: "/users" },
    { name: "Reports", path: "/reports" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <div className={`fixed inset-y-0 left-0 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 transition-transform duration-300 ease-in-out w-64 bg-gray-900 text-white p-6 z-50`}>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold tracking-wide text-blue-400">Admin Panel</h2>
        <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(false)}>×</button>
      </div>

      <nav className="flex flex-col gap-3">
        {links.map((link) => (
          <Link 
            key={link.name} 
            to={link.path} 
            className={`px-4 py-3 rounded-lg transition-colors ${location.pathname === link.path ? "bg-blue-600 text-white" : "hover:bg-gray-800 hover:text-blue-400"}`}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}