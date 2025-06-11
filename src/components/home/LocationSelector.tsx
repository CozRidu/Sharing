import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLocation } from '@/contexts/LocationContext';

export default function LocationSelector() {
  const { currentLocation, setCurrentLocation, isOpen, setIsOpen } = useLocation();
  const nearbyLocations = [
    'DFW (Dallas)',
    'Fort Worth',
    'Frisco',
    'Euless',
    'McKinney',
    'Coppell',
    'Allen',
    'Flower Mound',
    'Houston',
    'San Antonio',
  ];

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white font-semibold flex items-center hover:text-[#e22441] focus:text-[#e22441] transition-colors"
      >
        {currentLocation === 'New Jersey' ? 'Texas' : currentLocation}
        <ChevronDown className={`ml-1 h-6 w-6 transition-transform ${isOpen ? 'rotate-180' : ''} text-white group-hover:text-[#e22441]`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-30"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute left-0 mt-2 w-56 bg-[#151518] border border-[#222] rounded-lg shadow-lg z-40 text-white max-h-64 overflow-y-auto"
            >
              <div className="py-2">
                {nearbyLocations.map((location) => (
                  <button
                    key={location}
                    onClick={() => {
                      setCurrentLocation(location);
                      setIsOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-white hover:bg-[#222] hover:text-[#e22441] focus:bg-[#222] focus:text-[#e22441] transition-colors"
                  >
                    {location}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}