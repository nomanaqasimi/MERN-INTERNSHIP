export default function Users() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Users Management</h2>
        
        <input 
          type="text" 
          placeholder="Search users..." 
          className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white w-full sm:w-64"
        />
      </div>
      
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-100 dark:border-gray-700">
        <p className="text-gray-600 dark:text-gray-400">User list table will be displayed here...</p>
      </div>
    </div>
  );
}