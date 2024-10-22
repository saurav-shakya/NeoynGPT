import React from 'react';

interface ResultsPanelProps {
  isVisualMode: boolean;
  searchQuery: string;
  result: any;
  isLoading: boolean;
}

const ResultsPanel: React.FC<ResultsPanelProps> = ({ isVisualMode, searchQuery, result, isLoading }) => {
  if (isLoading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 animate-pulse">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <p className="text-center text-gray-500 dark:text-gray-400">Enter a query to see results</p>
      </div>
    );
  }

  if (result.error) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <p className="text-red-500">{result.error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 ease-in-out">
      <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">{searchQuery}</h2>
      <div className="text-gray-700 dark:text-gray-300">
        {result.type === 'visual' ? (
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
            <p className="text-center">{result.content}</p>
            {/* In a real implementation, you'd render an actual visual here */}
          </div>
        ) : (
          <p className="leading-relaxed">{result.content}</p>
        )}
      </div>
    </div>
  );
};

export default ResultsPanel;