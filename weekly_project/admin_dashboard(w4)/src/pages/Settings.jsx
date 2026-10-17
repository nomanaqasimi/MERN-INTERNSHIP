export default function Settings() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Application Settings</h2>
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-100 dark:border-gray-700 flex flex-col gap-4 max-w-md">
        <label className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
          <input type="checkbox" className="w-5 h-5 text-blue-600" /> Enable Email Notifications
        </label>
        <label className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
          <input type="checkbox" className="w-5 h-5 text-blue-600" /> Allow Public Profile
        </label>
        <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition w-full sm:w-auto">
          Save Settings
        </button>
      </div>
    </div>
  );
}