function AboutLazy() {
  console.log("About Page Rendered!");
  return (
    <div className="p-6 text-center mt-10 border-2 border-green-500 bg-green-50 rounded-lg max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-green-600">About Page</h1>
      <p className="mt-4 text-gray-700">This component was lazy loaded exactly when you clicked the button!</p>
    </div>
  );
}

export default AboutLazy;