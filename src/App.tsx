import React, { useState } from 'react';
import { Menu, Moon, Sun, Settings, HelpCircle } from 'lucide-react';
import SearchBar from './components/SearchBar';
import VisualToggle from './components/VisualToggle';
import ResultsPanel from './components/ResultsPanel';
import Sidebar from './components/Sidebar';
import { processQuery } from './utils/geminiApi';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isVisualMode, setIsVisualMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setSearchQuery(query);
    try {
      const response = await processQuery(query);
      setResult(response);
    } catch (error) {
      console.error('Error processing query:', error);
      setResult({ error: 'An error occurred while processing your query.' });
    }
    setIsLoading(false);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <header className="bg-white dark:bg-gray-800 shadow-md fixed top-0 left-0 right-0 z-10">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button onClick={toggleSidebar} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
                <Menu className="w-6 h-6" />
              </button>
              <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">NeoynGPT</h1>
            </div>
            <div className="flex items-center space-x-2">
              <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
                {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
              </button>
              <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
                <Settings className="w-6 h-6" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
                <HelpCircle className="w-6 h-6" />
              </button>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 flex mt-16">
          <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
          <div className="flex-grow ml-0 md:ml-64 transition-all duration-300">
            <div className="max-w-3xl mx-auto">
              <SearchBar onSearch={handleSearch} />
              <VisualToggle isVisualMode={isVisualMode} onToggle={() => setIsVisualMode(!isVisualMode)} />
              <ResultsPanel isVisualMode={isVisualMode} searchQuery={searchQuery} result={result} isLoading={isLoading} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;