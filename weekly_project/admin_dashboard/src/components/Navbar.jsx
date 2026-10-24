import { useContext } from 'react'
import  ThemeContext  from '../contexts/ThemeContext.jsx'
import { NavLink } from 'react-router-dom'
import Users from '../pages/users.jsx'
const navbar = "bg-grey-100 dark:bg-gray-900 text-black dark:text-white font-semibold flex justify-end items-center  p-2 w-full gap-4"
const themeBtn = "bg-gray-800 dark:bg-gray-800 text-white rounded-xl p-2 inline-flex items-center justify-center m-2"
function Navbar() {
  const { isDark, toggleTheme } = useContext(ThemeContext)
  const navItemClasses = ({ isActive }) =>
    `p-2 rounded-lg transition-colors cursor-pointer ${
      isActive 
        ? " text-blue-600 font-semibold  dark:text-blue-300" 
        : "hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
    }`;
  return (
    <nav className= {navbar}>
       
        
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
       <button className={themeBtn} onClick={toggleTheme}>{isDark ? 'light' : 'dark'}</button>

    </nav>
  )
}

export default Navbar