import React from 'react';
import { X, Share2, Beaker } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const sidebarClasses = `fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out ${
    isOpen ? 'translate-x-0' : '-translate-x-full'
  } z-20`;

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={onClose}></div>
      )}
      <div className={sidebarClasses}>
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400">History</h2>
            <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
              <X className="w-6 h-6" />
            </button>
          </div>
          <ul className="space-y-4">
            {[
              { query: 'ML model architecture', time: '2 hours ago' },
              { query: 'Neural networks basics', time: 'Yesterday' },
              { query: 'Transformer architecture', time: '2 days ago' },
            ].map((item, index) => (
              <li key={index} className="flex items-center justify-between p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors duration-200">
                <div>
                  <p className="text-sm font-medium">{item.query}</p>
                  <p className="text-xs text-gray-500">{item.time}</p>
                </div>
                <div className="flex space-x-2">
                  <button className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
                    <Beaker className="w-4 h-4" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;