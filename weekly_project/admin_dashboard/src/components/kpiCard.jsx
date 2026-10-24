function KpiCard({ title, value, trendText, trendColor }) {
  return (
    
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm dark:shadow-lg dark:shadow-gray-700  border-gray-100 dark:border-gray-700 flex-1">
      <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">{title}</h3>
      <p className="text-2xl font-bold mt-2 text-black dark:text-white">{value}</p>
      <span className={`text-sm font-medium ${trendColor}`}>{trendText}</span>
    </div>
  );
}

export default KpiCard;