import React from "react";
import InteractiveCard from "./components/InteractiveCard";

function App() {
  return (
    <div className="bg-background min-h-screen p-6 font-sans flex flex-col items-center">
      
      <header className="text-center my-10">
        <h1 className="text-primary text-4xl font-bold mb-4">Welcome to tailwindEx UI</h1>
        
        <div className="flex gap-4 justify-center mt-6">
          <button className="bg-secondary text-white px-6 py-2 rounded-lg hover:opacity-90 active:scale-95 transition shadow-sm">
            Explore Features
          </button>
          
          <button className="bg-accent text-white px-6 py-2 rounded-lg hover:opacity-90 active:scale-95 transition shadow-sm">
            Get Started
          </button>
        </div>
      </header>

      <main className="w-full max-w-4xl flex justify-center mt-8">
        <InteractiveCard />
      </main>
      
    </div>
  );
}

export default App;