import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { mockListings } from '@/data/mockListings';
import ListingCard from '@/components/listings/ListingCard';

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleLightMode = () => {
    setIsLightMode(!isLightMode);
  };

  // Texas locations for jobs dropdown (unchanged)
  const texasLocations = [
    'All Texas',
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
  // Updated Texas locations for housing filter
  const housingLocations = [
    'All Texas',
    'Dallas',
    'Fort Worth',
    'Plano',
    'Irving',
    'Arlington',
  ];
  // Updated Texas locations for vehicles filter
  const vehicleLocations = [
    'All Texas',
    'Dallas',
    'Houston',
    'San Antonio',
    'Austin',
  ];
  // Updated Texas locations for services filter
  const servicesLocations = [
    'All Texas',
    'DFW (Dallas)',
    'Houston',
    'San Antonio',
    'Austin',
  ];

  // Only show location dropdown for jobs, housing, vehicles, or services
  const isJobs = category === 'jobs';
  const isHousing = category === 'housing';
  const isVehicles = category === 'vehicles';
  const isServices = category === 'services';
  
  const [selectedLocation, setSelectedLocation] = useState('All Texas');
  const [jobQuery, setJobQuery] = useState('');
  const [selectedHousingLocation, setSelectedHousingLocation] = useState('All Texas');
  const [housingQuery, setHousingQuery] = useState('');
  const [selectedVehicleLocation, setSelectedVehicleLocation] = useState('All Texas');
  const [vehicleQuery, setVehicleQuery] = useState('');
  const [selectedServicesLocation, setSelectedServicesLocation] = useState('All Texas');
  const [servicesQuery, setServicesQuery] = useState('');
  
  let listings = mockListings.filter(l => l.category === category);
  if (isJobs) {
    if (selectedLocation !== 'All Texas') {
      listings = listings.filter(l =>
        l.location.toLowerCase().includes(selectedLocation.toLowerCase())
      );
    }
    if (jobQuery.trim()) {
      listings = listings.filter(l =>
        l.title.toLowerCase().includes(jobQuery.toLowerCase()) ||
        l.description?.toLowerCase().includes(jobQuery.toLowerCase())
      );
    }
  }
  if (isHousing) {
    if (selectedHousingLocation !== 'All Texas') {
      listings = listings.filter(l =>
        l.location.toLowerCase().includes(selectedHousingLocation.toLowerCase())
      );
    }
    if (housingQuery.trim()) {
      listings = listings.filter(l =>
        l.title.toLowerCase().includes(housingQuery.toLowerCase()) ||
        l.description?.toLowerCase().includes(housingQuery.toLowerCase())
      );
    }
  }
  if (isVehicles) {
    if (selectedVehicleLocation !== 'All Texas') {
      listings = listings.filter(l =>
        l.location.toLowerCase().includes(selectedVehicleLocation.toLowerCase())
      );
    }
    if (vehicleQuery.trim()) {
      listings = listings.filter(l =>
        l.title.toLowerCase().includes(vehicleQuery.toLowerCase()) ||
        l.description?.toLowerCase().includes(vehicleQuery.toLowerCase())
      );
    }
  }
  if (isServices) {
    if (selectedServicesLocation !== 'All Texas') {
      listings = listings.filter(l =>
        l.location.toLowerCase().includes(selectedServicesLocation.toLowerCase())
      );
    }
    if (servicesQuery.trim()) {
      listings = listings.filter(l =>
        l.title.toLowerCase().includes(servicesQuery.toLowerCase()) ||
        l.description?.toLowerCase().includes(servicesQuery.toLowerCase())
      );
    }
  }
  
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${isLightMode ? 'bg-white text-black' : 'bg-[#151518] text-white'}`}>
      <button
        onClick={toggleLightMode}
        className="mb-4 px-4 py-2 border rounded-md focus:outline-none hover:shadow-md transition"
      >
        Toggle {isLightMode ? 'Dark' : 'Light'} Mode
      </button>

      <h1 className="text-3xl font-bold mb-8 capitalize">
        {category?.replace('-', ' ')} Listings
      </h1>
      {/* Jobs filter bar */}
      {isJobs && (
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search jobs..."
            value={jobQuery}
            onChange={e => setJobQuery(e.target.value)}
            className="w-full md:w-1/3 px-4 py-2 bg-[#151518] text-white border border-white focus:outline-none hover:shadow-[0_0_10px_2px_#e22441] transition duration-300 text-lg font-medium rounded-none"
          />
          <div className="relative w-full md:w-1/4">
            <select
              value={selectedLocation}
              onChange={e => setSelectedLocation(e.target.value)}
              className="w-full px-4 py-2 bg-[#151518] text-white border border-white focus:outline-none hover:shadow-[0_0_10px_2px_#e22441] transition duration-300 text-lg font-medium rounded-none appearance-none"
            >
              {texasLocations.map(loc => (
                <option key={loc} value={loc} className="bg-[#151518] text-white">
                  {loc}
                </option>
              ))}
            </select>
            {/* Location watermark for jobs */}
            <span className="absolute inset-0 flex items-center justify-center pointer-events-none text-[80px] md:text-[100px] font-extrabold text-white opacity-5 select-none uppercase tracking-widest" style={{ zIndex: 0 }}>
              {selectedLocation !== 'All Texas' ? selectedLocation.replace(/\(.+\)/, '').trim() : 'Texas'}
            </span>
          </div>
        </div>
      )}
      {/* Housing filter bar for Room Hunt */}
      {isHousing && (
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search housing..."
            value={housingQuery}
            onChange={e => setHousingQuery(e.target.value)}
            className="w-full md:w-1/3 px-4 py-2 bg-[#151518] text-white border border-white focus:outline-none hover:shadow-[0_0_10px_2px_#e22441] transition duration-300 text-lg font-medium rounded-none"
          />
          <div className="relative w-full md:w-1/4">
            <select
              value={selectedHousingLocation}
              onChange={e => setSelectedHousingLocation(e.target.value)}
              className="w-full px-4 py-2 bg-[#151518] text-white border border-white focus:outline-none hover:shadow-[0_0_10px_2px_#e22441] transition duration-300 text-lg font-medium rounded-none appearance-none"
            >
              {housingLocations.map(loc => (
                <option key={loc} value={loc} className="bg-[#151518] text-white">
                  {loc}
                </option>
              ))}
            </select>
            {/* Location watermark for housing */}
            <span className="absolute inset-0 flex items-center justify-center pointer-events-none text-[80px] md:text-[100px] font-extrabold text-white opacity-5 select-none uppercase tracking-widest" style={{ zIndex: 0 }}>
              {selectedHousingLocation !== 'All Texas' ? selectedHousingLocation.replace(/\(.+\)/, '').trim() : 'Texas'}
            </span>
          </div>
        </div>
      )}
      {/* Vehicles filter bar for Car Buy & Sell */}
      {isVehicles && (
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search vehicles..."
            value={vehicleQuery}
            onChange={e => setVehicleQuery(e.target.value)}
            className="w-full md:w-1/3 px-4 py-2 bg-[#151518] text-white border border-white focus:outline-none hover:shadow-[0_0_10px_2px_#e22441] transition duration-300 text-lg font-medium rounded-none"
          />
          <div className="relative w-full md:w-1/4">
            <select
              value={selectedVehicleLocation}
              onChange={e => setSelectedVehicleLocation(e.target.value)}
              className="w-full px-4 py-2 bg-[#151518] text-white border border-white focus:outline-none hover:shadow-[0_0_10px_2px_#e22441] transition duration-300 text-lg font-medium rounded-none appearance-none"
            >
              {vehicleLocations.map(loc => (
                <option key={loc} value={loc} className="bg-[#151518] text-white">
                  {loc}
                </option>
              ))}
            </select>
            {/* Location watermark for vehicles */}
            <span className="absolute inset-0 flex items-center justify-center pointer-events-none text-[80px] md:text-[100px] font-extrabold text-white opacity-5 select-none uppercase tracking-widest" style={{ zIndex: 0 }}>
              {selectedVehicleLocation !== 'All Texas' ? selectedVehicleLocation.replace(/\(.+\)/, '').trim() : 'Texas'}
            </span>
          </div>
        </div>
      )}
      {/* Services filter bar for Services listings */}
      {isServices && (
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search services..."
            value={servicesQuery}
            onChange={e => setServicesQuery(e.target.value)}
            className="w-full md:w-1/3 px-4 py-2 bg-[#151518] text-white border border-white focus:outline-none hover:shadow-[0_0_10px_2px_#e22441] transition duration-300 text-lg font-medium rounded-none"
          />
          <div className="relative w-full md:w-1/4">
            <select
              value={selectedServicesLocation}
              onChange={e => setSelectedServicesLocation(e.target.value)}
              className="w-full px-4 py-2 bg-[#151518] text-white border border-white focus:outline-none hover:shadow-[0_0_10px_2px_#e22441] transition duration-300 text-lg font-medium rounded-none appearance-none"
            >
              {servicesLocations.map(loc => (
                <option key={loc} value={loc} className="bg-[#151518] text-white">
                  {loc}
                </option>
              ))}
            </select>
            {/* Location watermark for services */}
            <span className="absolute inset-0 flex items-center justify-center pointer-events-none text-[80px] md:text-[100px] font-extrabold text-white opacity-5 select-none uppercase tracking-widest" style={{ zIndex: 0 }}>
              {selectedServicesLocation !== 'All Texas' ? selectedServicesLocation.replace(/\(.+\)/, '').trim() : 'Texas'}
            </span>
          </div>
        </div>
      )}
      {/* Listings grid */}
      {listings.length === 0 ? (
        <p className="text-center text-[#aaa]">No listings found in this category</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map(listing => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      )}
    </div>
  );
}