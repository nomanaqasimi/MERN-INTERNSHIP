function SettingToggle({ title, description, enabled, onToggle }) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-100 dark:border-gray-700/50 last:border-0">
      <div className="flex flex-col pr-4">
        <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{title}</span>
        {description && <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{description}</span>}
      </div>
      <button 
        onClick={onToggle}
        className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
          enabled ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-600'
        }`}
      >
        <span 
          className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
            enabled ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  );
}

export default SettingToggle;