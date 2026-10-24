import { NavLink } from 'react-router-dom';

function Sidebar() {
  const navItemClasses = ({ isActive }) =>
    `p-2 rounded-lg transition-colors cursor-pointer block ${
      isActive 
        ? "bg-blue-100 text-blue-600 font-semibold dark:bg-blue-900 dark:text-blue-300" // Agar page active hai
        : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"    // Agar active nahi hai
    }`;

  return (
    <div className="hidden lg:flex flex-col bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm h-full">
      <h2 className="text-xl font-bold mb-8 text-black dark:text-white">Menu</h2>
      
      
      <nav className="space-y-2 flex-1">
        <NavLink to="/" className={navItemClasses}>
          Dashboard
        </NavLink>
        
        <NavLink to="/users" className={navItemClasses}>
          Users
        </NavLink>

         <NavLink to="/reports" className={navItemClasses}>
          Reports
        </NavLink>
        
        <NavLink to="/settings" className={navItemClasses}>
          Settings
        </NavLink>
      </nav>

      <button className="mt-auto bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition">
        Logout
      </button>
    </div>
  );
}

export default Sidebar;