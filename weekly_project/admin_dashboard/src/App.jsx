import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainLayout from './components/mainLayout';
import Dashboard from './pages/dashboard';
import Users from './pages/users';
import Reports from './pages/reports';
import Settings from './pages/Settings';

function App() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      
   
      <Navbar />

      {/* Routes Setup */}
      <Routes>
        {/* MainLayout*/}
        <Route path="/" element={<MainLayout />}>
          
          {/* Default page (index) Dashboard hoga */}
          <Route index element={<Dashboard />} />

            <Route path="users" element={<Users />} />
 
         <Route path="Settings" element={<Settings />} />
          <Route path="reports" element={<Reports />} />
          
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;