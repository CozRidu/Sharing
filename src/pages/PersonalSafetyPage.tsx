import React from 'react';

export default function PersonalSafetyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white">Personal Safety 🛡️</h1>
        <p className="text-lg text-gray-300 mt-4">
          Your safety is our priority. Follow these tips to ensure your personal safety while using Texas List.
        </p>
      </div>

      {/* Personal Safety Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-[#1e1e21] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-white mb-4">📍 Meet in Public Places</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Always meet in well-lit, public places like coffee shops or shopping centers. Avoid secluded or private areas.
          </p>
        </div>
        <div className="bg-[#1e1e21] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-white mb-4">👫 Bring a Friend</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            If possible, bring a friend or family member with you when meeting someone for the first time.
          </p>
        </div>
        <div className="bg-[#1e1e21] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-white mb-4">📞 Share Your Plans</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Let someone you trust know where you're going, who you're meeting, and when you expect to return.
          </p>
        </div>
        <div className="bg-[#1e1e21] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-white mb-4">🚗 Use Your Own Transportation</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Use your own vehicle or a trusted ride service to get to and from the meeting location. Avoid accepting rides from strangers.
          </p>
        </div>
        <div className="bg-[#1e1e21] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-white mb-4">🧠 Trust Your Instincts</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            If something feels off or unsafe, trust your instincts and leave the situation immediately.
          </p>
        </div>
        <div className="bg-[#1e1e21] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-white mb-4">📱 Keep Your Phone Handy</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Keep your phone charged and within reach in case you need to call for help or share your location.
          </p>
        </div>
      </div>
    </div>
  );
}
