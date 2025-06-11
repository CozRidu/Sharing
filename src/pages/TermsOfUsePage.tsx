import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TermsOfUsePage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white">{t('terms')}</h1>
        <p className="text-lg text-gray-300 mt-4">{t('termsIntro')}</p>
      </div>

      {/* Terms of Use Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#1e1e21] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-white mb-4">{t('acceptableUseTitle')}</h2>
          <p className="text-lg text-gray-300 leading-relaxed">{t('acceptableUseDescription')}</p>
        </div>
        <div className="bg-[#1e1e21] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-white mb-4">{t('prohibitedActivitiesTitle')}</h2>
          <p className="text-lg text-gray-300 leading-relaxed">{t('prohibitedActivitiesDescription')}</p>
        </div>
        <div className="bg-[#1e1e21] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-white mb-4">{t('liabilityTitle')}</h2>
          <p className="text-lg text-gray-300 leading-relaxed">{t('liabilityDescription')}</p>
        </div>
        <div className="bg-[#1e1e21] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-white mb-4">{t('terminationTitle')}</h2>
          <p className="text-lg text-gray-300 leading-relaxed">{t('terminationDescription')}</p>
        </div>
      </div>
    </div>
  );
}
