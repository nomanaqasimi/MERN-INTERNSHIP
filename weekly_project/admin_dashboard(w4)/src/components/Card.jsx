export default function Card({ title, value }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
      <h2 className="text-gray-500 dark:text-gray-400 text-sm font-medium">{title}</h2>
      <p className="text-3xl font-bold mt-2 text-gray-800 dark:text-white">{value}</p>
    </div>
  );
}