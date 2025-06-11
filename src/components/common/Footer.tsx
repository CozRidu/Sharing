import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { language, setLanguage, t } = useLanguage();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as typeof language);
  };

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <p className="text-sm">© 2023 Craigslist-Texas. {t('supportUs')}</p>
        <div>
          <label htmlFor="language-select" className="mr-2">{t('language')}:</label>
          <select
            id="language-select"
            value={language}
            onChange={handleLanguageChange}
            className="bg-gray-700 text-white border border-gray-600 rounded px-2 py-1"
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
            <option value="zh">中文</option>
            <option value="ur">اردو</option>
            <option value="ne">नेपाली</option>
          </select>
        </div>
      </div>
    </footer>
  );
}
