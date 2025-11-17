import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function SearchBar({ onSearchChange }) {
  
  const handleInputChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-colors duration-300">
      <div className="flex flex-col md:flex-row gap-4">
        
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Buscar por nome, cargo ou skill (ex: React, Python)..."
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>

        <select disabled className="rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 p-2 opacity-50 cursor-not-allowed">
          <option>Filtrar por Área (em breve)</option>
        </select>
        <select disabled className="rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 p-2 opacity-50 cursor-not-allowed">
          <option>Filtrar por Cidade (em breve)</option>
        </select>
      </div>
    </div>
  );
}

export default SearchBar;