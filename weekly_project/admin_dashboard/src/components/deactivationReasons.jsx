function DeactivationReasons() {
  // Long strings as reasons
  const reasons = [
    { id: 1, text: "Receiving too many irrelevant notifications and emails", count: 342 },
    { id: 2, text: "Privacy concerns regarding personal data tracking", count: 215 },
    { id: 3, text: "Found a better alternative platform", count: 189 },
    { id: 4, text: "Application crashes frequently on my device", count: 124 },
    { id: 5, text: "Taking a temporary break from social platforms", count: 98 },
  ];

  // Highest count nikal rahe hain taaki usko 100% width maan kar baki bars scale ho sakein
  const maxCount = Math.max(...reasons.map(r => r.count));

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 w-full max-w-2xl">
      <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-6">
        Top Deactivation Reasons
      </h3>
      
      <div className="flex flex-col gap-6">
        {reasons.map((item) => {
          // Calculate width percentage dynamically
          const widthPercent = (item.count / maxCount) * 100;
          
          return (
            <div key={item.id} className="flex flex-col gap-2">
              {/* Text & Count Row */}
              <div className="flex justify-between items-start gap-4 text-sm">
                <span className="font-medium text-gray-700 dark:text-gray-300 leading-snug">
                  {item.text}
                </span>
                <span className="font-bold text-gray-900 dark:text-gray-100">
                  {item.count}
                </span>
              </div>
              
              {/* Tailwind Custom Progress Bar */}
              <div className="w-full bg-gray-100 dark:bg-gray-700/50 rounded-full h-2">
                <div 
                  className="bg-red-500 h-2 rounded-full transition-all duration-1000 ease-out" 
                  style={{ width: `${widthPercent}%` }}
                ></div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default DeactivationReasons;