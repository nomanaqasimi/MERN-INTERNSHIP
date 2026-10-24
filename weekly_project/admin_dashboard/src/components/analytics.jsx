import UserBarChart from './BarChart.jsx';
import TrafficPieChart from './pieChart.jsx';

// 1. Data yahan define kiya
const monthlyUsersData = [
  { name: 'Jan', users: 4000 },
  { name: 'Feb', users: 3000 },
  { name: 'Mar', users: 5000 },
  { name: 'Apr', users: 2780 },
  { name: 'May', users: 6890 },
  { name: 'Jun', users: 2390 },
];

const trafficSourceData = [
  { name: 'Mobile', value: 400, fill: '#3b82f6' },  
  { name: 'Desktop', value: 300, fill: '#8b5cf6' }, 
  { name: 'Tablet', value: 100, fill: '#10b981' }   
];
function Analytics() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm hidden lg:flex flex-col gap-8 text-black dark:text-white">
      <h2 className="text-xl font-bold">Analytics</h2>
      
    
      <UserBarChart data={monthlyUsersData} />
      <TrafficPieChart type="device traffic"data={trafficSourceData} />
      
    </div>
  );
}

export default Analytics;