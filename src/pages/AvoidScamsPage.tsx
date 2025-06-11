import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AvoidScamsPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white">{t('avoidScams')}</h1>
        <p className="text-lg text-gray-300 mt-4">{t('avoidScamsIntro')}</p>
      </div>

      {/* Avoid Scams Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-[#1e1e21] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-white mb-4">📍 {t('scamTip1Title')}</h2>
          <p className="text-lg text-gray-300 leading-relaxed">{t('scamTip1Description')}</p>
        </div>
        <div className="bg-[#1e1e21] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-white mb-4">💸 {t('scamTip2Title')}</h2>
          <p className="text-lg text-gray-300 leading-relaxed">{t('scamTip2Description')}</p>
        </div>
        <div className="bg-[#1e1e21] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-white mb-4">🧾 {t('scamTip3Title')}</h2>
          <p className="text-lg text-gray-300 leading-relaxed">{t('scamTip3Description')}</p>
        </div>
        <div className="bg-[#1e1e21] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-white mb-4">🕵️ {t('scamTip4Title')}</h2>
          <p className="text-lg text-gray-300 leading-relaxed">{t('scamTip4Description')}</p>
        </div>
        <div className="bg-[#1e1e21] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-white mb-4">🧠 {t('scamTip5Title')}</h2>
          <p className="text-lg text-gray-300 leading-relaxed">{t('scamTip5Description')}</p>
        </div>
        <div className="bg-[#1e1e21] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-white mb-4">🚔 {t('scamTip6Title')}</h2>
          <p className="text-lg text-gray-300 leading-relaxed">{t('scamTip6Description')}</p>
        </div>
      </div>
    </div>
  );
}
