import Card from "../components/Card";

export default function Dashboard() {
  const stats = [
    { title: "Total Users", value: "1,250" },
    { title: "Orders Today", value: "78" },
    { title: "Revenue", value: "$8,900" },
    { title: "Pending Reports", value: "14" },
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Analytics Overview</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <Card key={i} title={s.title} value={s.value} />
        ))}
      </div>

      <div className="mt-8 h-64 bg-blue-100 dark:bg-gray-800 border border-blue-200 dark:border-gray-700 rounded-xl flex items-center justify-center shadow-inner transition-colors">
        <p className="font-bold text-blue-500 dark:text-gray-400 text-lg">📊 Chart Placeholder</p>
      </div>
    </div>
  );
}