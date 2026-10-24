import KpiCard from '../components/kpiCard.jsx'
import UserBarChart from '../components/userBarChart'
import TrafficPieChart from '../components/pieChart'
function Users() {
  const barChartData = [
  { name: 'India', users: 40000 },
  { name: 'USA', users: 35000 },
  { name: 'Pakistan', users: 35000 },
  { name: 'China', users: 30000 },
  { name: 'UAE', users: 20000 },
];
const AgetrafficData = [
  { name: '18-30', value: 400, fill: '#3b82f6' },  
  { name: '12-18', value: 300, fill: '#8b5cf6' }, 
  { name: '7-12', value: 100, fill: '#10b981' },
  { name: '30-45', value: 50, fill: '#f59e0b' },
  { name: '50+', value: 10, fill: '#332249' }
];
  return (
    <div className="flex flex-col gap-6 w-full">
      <h1 className="text-2xl font-bold text-black dark:text-white">Users</h1>

      {/* Top Div:*/}
      <div className="flex flex-row gap-4 w-full">
        
        {/* Card 1 */}
        <KpiCard 
          title="Total Users" 
          value="12,450" 
          trendText="+15% from last month" 
          trendColor="text-green-500" 
        />
        
        {/* Card 2 */}
        <KpiCard 
          title="New Users" 
          value="342" 
          trendText="+8% from last week" 
          trendColor="text-green-500" 
        />
        
        {/* Card 3 */}
        <KpiCard 
          title="Deactivated Accounts" 
          value="28" 
          trendText="See reports" 
          trendColor="text-red-500" 
        />
        
      </div>

      {/* Bottom Div */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <UserBarChart type ="User tarfice" data={barChartData} />
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <TrafficPieChart type="age group" data={AgetrafficData} />
      </div>

    </div>
    )
  ;
}

export default Users;