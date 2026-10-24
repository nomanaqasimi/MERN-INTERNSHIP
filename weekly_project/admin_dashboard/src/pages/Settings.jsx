import { useState } from 'react';
import SettingToggle from '../components/SettingToggle.jsx';
import SettingInput from '../components/SettingInput.jsx';

function Settings() {
  const [activeTab, setActiveTab] = useState('platform');

  // Dummy states for our toggles
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [allowRegistrations, setAllowRegistrations] = useState(true);
  const [requireEmailVerification, setRequireEmailVerification] = useState(true);

  const tabs = [
    { id: 'platform', label: 'Platform Settings' },
    { id: 'users', label: 'User Management' },
    { id: 'security', label: 'Security & Spam' },
  ];

  return (
    <div className="flex flex-col w-full gap-6">
      <h1 className="text-2xl font-bold text-black dark:text-white">System Settings</h1>

      <div className="flex flex-col md:flex-row gap-6 items-start">
        
        {/* Sidebar Tabs */}
        <div className="w-full md:w-64 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab.id 
                  ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' 
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Settings Content Area */}
        <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          
          {/* PLATFORM SETTINGS */}
          {activeTab === 'platform' && (
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">Platform Configuration</h2>
              
              <SettingInput label="Platform Name" defaultValue="My Social App" />
              <SettingInput label="Support Email" type="email" defaultValue="admin@mysocialapp.com" />
              
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700/50">
                <SettingToggle 
                  title="Maintenance Mode" 
                  description="Disable access for all non-admin users while updating the system."
                  enabled={maintenanceMode}
                  onToggle={() => setMaintenanceMode(!maintenanceMode)}
                />
              </div>
            </div>
          )}

          {/* USER MANAGEMENT SETTINGS */}
          {activeTab === 'users' && (
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">User Registration & Rules</h2>
              
              <SettingToggle 
                title="Allow New Registrations" 
                description="Turn this off to close the platform to new signups."
                enabled={allowRegistrations}
                onToggle={() => setAllowRegistrations(!allowRegistrations)}
              />
              <SettingToggle 
                title="Require Email Verification" 
                description="New users must verify their email before posting content."
                enabled={requireEmailVerification}
                onToggle={() => setRequireEmailVerification(!requireEmailVerification)}
              />
            </div>
          )}

          {/* SECURITY SETTINGS */}
          {activeTab === 'security' && (
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">Security & Spam Controls</h2>
              
              <SettingInput label="Max Login Attempts" type="number" defaultValue="5" />
              <SettingInput label="Spam Report Threshold" type="number" defaultValue="10" />
              
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700/50">
                <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg text-sm transition">
                  Force Logout All Users
                </button>
              </div>
            </div>
          )}

          {/* Global Save Button */}
          <div className="mt-8 pt-4 flex justify-end">
             <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition">
               Save Changes
             </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Settings;