import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white">{t('about')}</h1>
        <p className="text-lg text-gray-300 mt-4">
          {t('helpingTexans')}
        </p>
      </div>

      {/* Logo and About Us Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-[#1e1e21] p-6 rounded-lg shadow-md flex items-center justify-center">
          <img
            src="../Logo.png"
            alt={t('logoAlt')}
            className="w-32 h-32"
          />
        </div>
        <div className="bg-[#1e1e21] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-white mb-4">{t('aboutUs')}</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            {t('aboutUsDescription')}
          </p>
        </div>
      </div>

      {/* Mission and Independence Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-[#1e1e21] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-white mb-4">{t('mission')}</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            {t('missionDescription')}
          </p>
        </div>
        <div className="bg-[#1e1e21] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-white mb-4">{t('independence')}</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            {t('independenceDescription')}
          </p>
        </div>
      </div>

      {/* Disclaimers Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-white mb-6">{t('disclaimers')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#1e1e21] p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-white mb-4">{t('noGuarantee')}</h3>
            <p className="text-gray-300 leading-relaxed">
              {t('noGuaranteeDescription')}
            </p>
          </div>
          <div className="bg-[#1e1e21] p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-white mb-4">{t('useAtYourOwnRisk')}</h3>
            <p className="text-gray-300 leading-relaxed">
              {t('useAtYourOwnRiskDescription')}
            </p>
          </div>
          <div className="bg-[#1e1e21] p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-white mb-4">{t('noEndorsements')}</h3>
            <p className="text-gray-300 leading-relaxed">
              {t('noEndorsementsDescription')}
            </p>
          </div>
        </div>

        {/* Community Moderation Box */}
        <div className="bg-[#1e1e21] p-6 rounded-lg shadow-md mt-6 max-w-lg mx-auto">
          <h3 className="text-lg font-semibold text-white mb-4">{t('communityModeration')}</h3>
          <p className="text-gray-300 leading-relaxed">
            {t('communityModerationDescription')}
          </p>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          {t('liabilityDisclaimer')}
        </p>
      </div>
    </div>
  );
}