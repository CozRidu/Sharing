import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SupportUsPage() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white">{t('supportUs')}</h1>
        <p className="text-lg text-gray-300 mt-4">{t('supportUsIntro')}</p>
      </div>

      {/* Why Support Us Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="flex items-center justify-center">
          <img
            src="../Logo.png"
            alt={t('logoAlt')}
            className="w-48 h-48"
          />
        </div>
        <div className="bg-[#1e1e21] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-white mb-4">{t('whySupportUsTitle')}</h2>
          <p className="text-lg text-gray-300 leading-relaxed">{t('whySupportUsDescription1')}</p>
          <p className="text-lg text-gray-300 leading-relaxed mt-4">
            <strong>{t('whySupportUsDescription2')}</strong>
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mt-4">
            <strong>{t('whySupportUsDescription3')}</strong>
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mt-4">{t('whySupportUsDescription4')}</p>
        </div>
      </div>

      {/* Ways to Support Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-white mb-6">{t('waysToSupportTitle')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#1e1e21] p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-white mb-4">{t('donateTitle')}</h3>
            <p className="text-gray-300 leading-relaxed">{t('donateDescription')}</p>
            <button
              onClick={openModal}
              className="mt-4 px-4 py-2 bg-[#e22441] text-white rounded-lg hover:bg-[#ff0a00] transition"
            >
              {t('donateButton')}
            </button>
          </div>
          <div className="bg-[#1e1e21] p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-white mb-4">{t('advertiseTitle')}</h3>
            <p className="text-gray-300 leading-relaxed">{t('advertiseDescription')}</p>
            <a
              href="https://forms.gle/Kw6ZDWFywEnwypvT6"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-4 py-2 bg-[#e22441] text-white rounded-lg hover:bg-[#ff0a00] transition inline-block"
            >
              {t('advertiseButton')}
            </a>
          </div>
          <div className="bg-[#1e1e21] p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-white mb-4">{t('shareTitle')}</h3>
            <p className="text-gray-300 leading-relaxed">{t('shareDescription')}</p>
            <button className="mt-4 px-4 py-2 bg-[#e22441] text-white rounded-lg hover:bg-[#ff0a00] transition">
              {t('shareButton')}
            </button>
          </div>
        </div>
      </div>

      {/* Donation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 border border-black w-full max-w-lg relative rounded-lg">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h1 className="text-3xl font-bold mb-2 text-black">{t('modalTitle')}</h1>
            <p className="text-gray-700 mb-6">{t('modalDescription')}</p>
            <h2 className="text-xl font-semibold mb-4 text-black">{t('paymentDetailsTitle')}</h2>
            <p className="text-gray-600 mb-6">{t('paymentDetailsDescription')}</p>
            <form>
              <div className="mb-4">
                <label className="block text-black font-semibold mb-2" htmlFor="email">
                  {t('emailLabel')}
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder={t('emailPlaceholder')}
                  className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e22441] bg-white text-black"
                />
              </div>
              <div className="mb-4">
                <label className="block text-black font-semibold mb-2" htmlFor="amount">
                  {t('amountLabel')}
                </label>
                <input
                  type="number"
                  id="amount"
                  defaultValue="10.00"
                  className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e22441] bg-white text-black"
                />
              </div>
              <div className="mb-4">
                <label className="block text-black font-semibold mb-2" htmlFor="card">
                  {t('cardDetailsLabel')}
                </label>
                <input
                  type="text"
                  id="card"
                  placeholder={t('cardDetailsPlaceholder')}
                  className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e22441] bg-white text-black"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#e22441] text-white rounded-lg hover:bg-[#ff0a00] transition"
              >
                {t('payButton')}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
