import Navbar from "./components/navbar";
import CardLayout from "./components/cardLayout";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto mt-8 p-4">
        
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Task 1: Tailwind UI Components</h2>
          
          <div className="flex justify-center gap-4 mb-8">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Primary Button
            </button>
            <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 shadow-md transition">
              Danger Button
            </button>
          </div>
          
          <ul className="max-w-md mx-auto bg-white rounded-lg shadow p-4 text-left divide-y divide-gray-200 border border-gray-200">
            <li className="py-3 text-gray-700 font-medium">List Item 1</li>
            <li className="py-3 text-gray-700 font-medium">List Item 2</li>
            <li className="py-3 text-gray-700 font-medium">List Item 3</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">Task 3: Card Layout</h2>
          <CardLayout />
        </section>

      </main>

      <footer className="bg-gray-900 text-gray-300 text-center p-6 mt-10">
        <p>&copy; 2026 MySite - Tailwind Implementation</p>
      </footer>
    </div>
  );
}

export default App;