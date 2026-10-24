import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

function TrafficPieChart({ data,type }) {
  return (
    <div className="h-72 w-full flex flex-col">
        <div className="flex justify-between items-center">
      <h1 className="text-md font-semibold text-gray-500 dark:text-gray-400 mb-2">{type}</h1>
      <h1 className="text-sm font-semibold text-gray-400 dark:text-gray-600 mb-2">this month</h1>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          
          <Pie 
            data={data} 
            cx="50%" cy="50%" 
            innerRadius={30}
            outerRadius={70}
            paddingAngle={5} 
            dataKey="value"
            stroke="none"

            labelLine={true}
            label={({ name, percent, x, y, cx }) => (
  <text 
    x={x} 
    y={y} 
    fill="#666" 
    textAnchor={x > cx ? 'start' : 'end'} 
    dominantBaseline="central" 
    fontSize={12} 
  >
    {`${name} ${(percent * 100).toFixed(0)}%`}
  </text>
)}
          />
         
          
          <Tooltip contentStyle={{ borderRadius: '8px', border: 'none' }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TrafficPieChart;