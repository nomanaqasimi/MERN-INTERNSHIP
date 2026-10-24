import KpiCard from '../components/kpiCard.jsx'
import UserTable from '../components/userTable.jsx'

const recentUsers = [
  { id: 1, name: 'Aarav Sharma', email: 'aarav@example.com', country: 'India', status: 'Active', date: 'Oct 22, 2026' },
  { id: 2, name: 'Sarah Smith', email: 'sarah@example.com', country: 'USA', status: 'Inactive', date: 'Oct 21, 2026' },
  { id: 3, name: 'Chen Wei', email: 'chen@example.com', country: 'China', status: 'Active', date: 'Oct 20, 2026' },
  { id: 4, name: 'Fatima Ali', email: 'fatima@example.com', country: 'UAE', status: 'Active', date: 'Oct 19, 2026' },
];
function Dashboard() {
    return (
        <div className="flex flex-col gap-6 w-full">
      <h1 className="text-2xl font-bold text-black dark:text-white">Dashboard</h1>

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
        <h2 className="text-lg font-bold text-black dark:text-white">Recent Registrations:</h2>
        <UserTable data = {recentUsers}/>
      </div>

    </div>
    )
}

export default Dashboard