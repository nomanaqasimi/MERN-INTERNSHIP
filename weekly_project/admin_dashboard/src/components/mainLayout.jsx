import { Outlet } from 'react-router-dom';
import Analytics from './analytics';
import Sidebar from './sideBar';

function MainLayout() {
  return (

    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[200px_1fr_300px] gap-4 bg-gray-50 dark:bg-gray-900 p-4">
      
   
      <Sidebar />

  
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm text-black dark:text-white">
     
        <Outlet /> 
      </div>


      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm hidden lg:block text-black dark:text-white">
   
        <Analytics />
       
      </div>

    </div>
  );
}

export default MainLayout;