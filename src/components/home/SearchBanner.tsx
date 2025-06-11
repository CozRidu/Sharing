import { useState, useEffect } from 'react';
import { Search, ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from '@/contexts/LocationContext';
import SearchResults from '../search/SearchResults';
import { useSearch } from '@/hooks/useSearch';
import LocationSelector from './LocationSelector';
import { useNavigate } from 'react-router-dom';

export default function SearchBanner() {
  const { query, setQuery, category, setCategory, results, isLoading } = useSearch();
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const navigate = useNavigate();

  // Texas-focused, CIA-themed categories matching navigation bar
  const categories = [
    { label: 'All Categories', value: 'all' },
    { label: 'Car Buy & Sell', value: 'vehicles' },
    { label: 'Room Hunt', value: 'housing' },
    { label: 'TX Jobs Search', value: 'jobs' },
    { label: 'TX Market', value: 'for-sale' },
    { label: 'Services', value: 'services' },
    { label: 'Help a neighbor', value: 'community' },
    { label: 'Ride Sharing Live', value: 'ride-sharing-live' },
  ];

  // Ensure category is always a valid value
  useEffect(() => {
    if (!categories.some((cat) => cat.value === category)) {
      setCategory('all');
    }
  }, [category]);

  const handleClearSearch = () => {
    setQuery('');
    setCategory('all');
  };

  // When a category is selected, route to the correct page
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setCategory(selected);
    if (selected === 'all') {
      navigate('/');
    } else if (selected === 'ride-sharing-live') {
      navigate('/ride-sharing-live');
    } else {
      navigate(`/search/${selected}`);
    }
  };

  return (
    <div className="relative overflow-hidden bg-[#151518]">
      {/* Remove gradient background, use solid black */}

      <div className="relative py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Find what you need
            </h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl text-white flex items-center justify-center gap-2"
            >
              in <LocationSelector />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto relative"
          >
            <div className="bg-[#151518] p-4 rounded-2xl shadow-lg border border-[#222]">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search listings..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    className="w-full pl-12 pr-10 py-3 rounded-lg border border-[#222] focus:outline-none focus:ring-2 focus:ring-[#e22441] focus:border-transparent bg-[#151518] text-white placeholder-gray-400"
                  />
                  {query && (
                    <button
                      onClick={handleClearSearch}
                      className="absolute right-4 top-3.5 text-gray-400 hover:text-[#e22441] focus:text-[#e22441]"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  )}
                </div>
                <div className="relative">
                  <select
                    value={category}
                    onChange={handleCategoryChange}
                    className="appearance-none w-full md:w-48 px-4 py-3 rounded-lg border border-[#222] focus:outline-none focus:ring-2 focus:ring-[#e22441] focus:border-transparent bg-[#151518] text-white"
                  >
                    {categories.map((cat) => (
                      <option key={cat.value} value={cat.value} className="bg-[#151518] text-white">
                        {cat.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-3.5 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>

          <AnimatePresence>
            {(isSearchFocused || query) && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-7xl mx-auto mt-4"
              >
                <div className="bg-[#151518] rounded-lg shadow-lg p-4 border border-[#222] text-white">
                  <SearchResults results={results} isLoading={isLoading} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}