import React from 'react';

interface VisualToggleProps {
  isVisualMode: boolean;
  onToggle: () => void;
}

const VisualToggle: React.FC<VisualToggleProps> = ({ isVisualMode, onToggle }) => {
  return (
    <div className="flex mb-6 bg-gray-200 dark:bg-gray-700 rounded-lg p-1">
      <button
        className={`flex-1 px-4 py-2 rounded-md ${
          !isVisualMode ? 'bg-white dark:bg-gray-800 shadow-md' : 'text-gray-700 dark:text-gray-300'
        } transition-all duration-300 ease-in-out`}
        onClick={() => !isVisualMode && onToggle()}
      >
        Text View
      </button>
      <button
        className={`flex-1 px-4 py-2 rounded-md ${
          isVisualMode ? 'bg-white dark:bg-gray-800 shadow-md' : 'text-gray-700 dark:text-gray-300'
        } transition-all duration-300 ease-in-out`}
        onClick={() => isVisualMode && onToggle()}
      >
        Visual View
      </button>
    </div>
  );
};

export default VisualToggle;