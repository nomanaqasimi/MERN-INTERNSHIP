import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';


function UserBarChart({ data }) {
  return (
    <div className="h-48 w-full">
          <div className="flex justify-between items-center">
      <h3 className="text-md font-semibold text-gray-500 dark:text-gray-400 mb-2">User Growth</h3>
         <h1 className="text-sm font-semibold text-gray-400 dark:text-gray-600 mb-2">2026</h1>
      </div>
      <ResponsiveContainer width="100%" height="100%">
       
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#8884d8" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip cursor={{ fill: 'rgba(0,0,0,0.05)' }} contentStyle={{ borderRadius: '8px', border: 'none' }} />
          <Bar dataKey="users" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UserBarChart;