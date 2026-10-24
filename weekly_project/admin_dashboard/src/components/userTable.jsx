function UserTable({ data, varient }) {
  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400">
            <th className="py-3 px-4 font-medium">User</th>
            <th className="py-3 px-4 font-medium">Country</th>
            <th className="py-3 px-4 font-medium">Status</th>
            {varient === "reports" ? (
              <th className="py-3 px-4 font-medium">Reports</th>
            ) : (
              <th className="py-3 px-4 font-medium">Joined Date</th>
            )}
          </tr>
        </thead>
        <tbody className="text-sm">
          {data.map((user) => (
            <tr key={user.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
              
              <td className="py-3 px-4">
                <div className="font-semibold text-gray-800 dark:text-gray-200">{user.name}</div>
                <div className="text-gray-500 dark:text-gray-400 text-xs">{user.email}</div>
              </td>
              
              <td className="py-3 px-4 text-gray-700 dark:text-gray-300">
                {user.country}
              </td>
              
              <td className="py-3 px-4">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  user.status === 'Active' 
                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                    : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                }`}>
                  {user.status}
                </span>
              </td>
              
              {/* Corrected conditional styling for reportscount */}
              {varient === "reports" ? (
                <td className={`py-3 px-4 font-medium ${user.reportscount >= 50 ? "text-red-500" : "text-orange-400"}`}>
                  {user.reportscount}
                </td>
              ) : (
                <td className="py-3 px-4 text-gray-500 dark:text-gray-400">
                  {user.date}
                </td>
              )}
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;