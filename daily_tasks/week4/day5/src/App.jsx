import React, { Suspense, useState } from "react";
import Timer from "./components/Timer";

const AboutLazy = React.lazy(() => import("./pages/AboutLazy"));

function App() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <h1 className="text-3xl font-bold text-center mb-8">React Optimization Tasks</h1>
      
      <Timer />

      <div className="text-center mt-8">
        <button 
          onClick={() => setShowAbout(!showAbout)}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {showAbout ? "Hide About Page" : "Lazy Load About Page"}
        </button>
      </div>

      {showAbout && (
        <Suspense fallback={<h2 className="text-center mt-6 text-xl text-gray-500 font-semibold animate-pulse">Loading About Page...</h2>}>
          <AboutLazy />
        </Suspense>
      )}
    </div>
  );
}

export default App;