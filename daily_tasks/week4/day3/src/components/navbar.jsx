import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">MySite</h1>
        
        <ul className="hidden md:flex gap-6">
          <li className="hover:text-blue-400 cursor-pointer transition">Home</li>
          <li className="hover:text-blue-400 cursor-pointer transition">About</li>
          <li className="hover:text-blue-400 cursor-pointer transition">Contact</li>
        </ul>
        
        <button 
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 text-center bg-gray-800 p-4 rounded-lg">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">About</li>
          <li className="hover:text-blue-400 cursor-pointer">Contact</li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;