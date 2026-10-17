import React from "react";

function InteractiveCard() {
  return (
    <div className="max-w-sm p-5 rounded-xl shadow-md bg-white hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border border-gray-100">
      <h3 className="text-xl font-semibold text-gray-800">React Training</h3>
      
      <p className="text-gray-600 mt-2">
        Learn React with hands-on examples and real projects.
      </p>
      
      <input
        type="email"
        placeholder="Enter your email"
        className="mt-4 border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition w-full"
      />
      
      <button className="mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90 active:scale-95 transition w-full font-medium">
        Read More
      </button>
    </div>
  );
}

export default InteractiveCard;