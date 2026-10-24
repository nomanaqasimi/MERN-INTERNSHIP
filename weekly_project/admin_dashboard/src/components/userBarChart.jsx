import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const barChartData = [
  { name: 'Jan', users: 4000 },
  { name: 'Feb', users: 3000 },
  { name: 'Mar', users: 5000 },
  { name: 'Apr', users: 2780 },
  { name: 'May', users: 6890 },
  { name: 'Jun', users: 2390 },
];

function UserBarChart({type,data}) {
  return (
    <div className="h-72 w-full flex flex-col gap-6 p-4">
      <div className="flex justify-between mb-2 p-4">
  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">{type}</h3>
  <span className="...">2026</span>
</div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <XAxis type="number" hide />
          <YAxis dataKey="name" type="category" stroke="#8884d8" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip cursor={{ fill: 'rgba(0,0,0,0.05)' }} contentStyle={{ borderRadius: '8px', border: 'none' }} />
          <Bar dataKey="users" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UserBarChart;