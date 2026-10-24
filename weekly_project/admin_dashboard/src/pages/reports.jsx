import DeactivationReasons from '../components/deactivationReasons.jsx';
import UserTable from '../components/userTable.jsx';
const SpamUsers = [
  { id: 1, name: 'Abhinav Sharma', email: 'abhinav@example.com', country: 'India', status: 'Active', reportscount :80},
  { id: 2, name: 'joy Smith', email: 'joy@example.com', country: 'USA', status: 'Inactive', reportscount : 60},
  { id: 3, name: 'jin Woo', email: 'jin@example.com', country: 'China', status: 'Active', reportscount : 30},
  { id: 4, name: 'farha Ali', email: 'farha@example.com', country: 'UAE', status: 'Active', reportscount : 10},
];
function Reports() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <h1 className="text-2xl font-bold text-black dark:text-white">Reports</h1>

      <DeactivationReasons />
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 w-full overflow-x-auto">
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-6">
            Top Spam Creators
          </h3>
     
         <UserTable data={SpamUsers} varient="reports" className="bg-red-500 text-white" />
        </div>
    </div>
  );
}   

export default Reports;