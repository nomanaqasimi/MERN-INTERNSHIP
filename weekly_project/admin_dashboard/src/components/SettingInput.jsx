function SettingInput({ label, type = "text", defaultValue, placeholder }) {
  return (
    <div className="flex flex-col gap-1.5 mb-4">
      <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">{label}</label>
      <input 
        type={type} 
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="w-full max-w-md p-2.5 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
      />
    </div>
  );
}

export default SettingInput;