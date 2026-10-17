import React from "react";

const Child = React.memo(function Child({ staticValue }) {
  console.log("Child Component Rendered!");
  
  return (
    <div className="p-4 bg-gray-200 mt-4 rounded">
      <h3 className="text-xl">Child Component (Memoized)</h3>
      <p>Static Value: {staticValue}</p>
      <p className="text-sm text-gray-500 mt-2">Check the console: This will not re-render every second.</p>
    </div>
  );
});

export default Child;