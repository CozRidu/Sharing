import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, HelpCircle, ScrollText, AlertCircle, Lock } from 'lucide-react';
import { FaDiscord, FaFacebookF, FaXTwitter, FaLinkedinIn, FaYoutube, FaInstagram, FaTiktok, FaEnvelope } from 'react-icons/fa6';
import { useLanguage } from '../../contexts/LanguageContext';
import ContactForm from '../forms/ContactForm';

const footerLinks = {
  'Help & Info': [
    { name: 'About Us', href: '/about', icon: HelpCircle },
    { name: 'Safety Tips', href: '/safety', icon: Shield },
    { name: 'Privacy Policy', href: '/privacy', icon: Lock },
    { name: 'Terms of Use', href: '/terms', icon: ScrollText },
    { name: 'Avoid Scams', href: '/avoid-scams', icon: AlertCircle },
  ],
  Platform: [
    { name: 'Contact Us', href: '#' }, // Modal trigger
    {
      name: 'Advertise With Us',
      href: 'https://forms.gle/Kw6ZDWFywEnwypvT6',
      target: '_blank', // Open in a new tab
    },
    { name: 'Report a Problem', href: '#' }, // Modal trigger
  ],
};

export default function Footer() {
  const { language, setLanguage } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [modalTitle, setModalTitle] = useState(''); // Modal title state

  const openModal = (title: string) => {
    setModalTitle(title);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <footer className="w-full bg-[#151518] text-white border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Help & Info Section */}
          <div className="relative lg:pl-4">
            <div className="absolute top-0 left-0 h-full w-[2px] bg-[#ff0a00] hidden lg:block"></div>
            <h3 className="text-base font-bold text-[#ffffff] uppercase tracking-wider mb-4">
              Help & Info
            </h3>
            <ul className="space-y-2">
              {footerLinks['Help & Info'].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="group flex items-center text-[#ffffff] hover:text-[#e22441] transition-colors"
                  >
                    {'icon' in link && link.icon ? <link.icon className="h-4 w-4 mr-2" /> : null}
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages Section (moved to the middle) */}
          <div className="relative lg:pl-4">
            <div className="absolute top-0 left-0 h-full w-[2px] bg-[#ff0a00] hidden lg:block"></div>
            <h3 className="text-base font-bold text-[#ffffff] uppercase tracking-wider mb-4">
              Languages
            </h3>
            <ul className="space-y-2">
              {['en', 'hi', 'zh', 'ur', 'ne'].map((lang) => (
                <li key={lang}>
                  <button
                    onClick={() => setLanguage(lang as 'en' | 'hi' | 'zh' | 'ur' | 'ne')}
                    className={`group flex items-center text-[#ffffff] hover:text-[#e22441] transition-colors ${
                      language === lang ? 'font-bold' : ''
                    }`}
                  >
                    {lang === 'en' && 'English'}
                    {lang === 'hi' && 'Hindi'}
                    {lang === 'zh' && 'Chinese'}
                    {lang === 'ur' && 'Urdu'}
                    {lang === 'ne' && 'Nepali'}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform Section (moved to the right) */}
          <div className="relative lg:pl-4">
            <div className="absolute top-0 left-0 h-full w-[2px] bg-[#ff0a00] hidden lg:block"></div>
            <h3 className="text-base font-bold text-[#ffffff] uppercase tracking-wider mb-4">
              Platform
            </h3>
            <ul className="space-y-2">
              {footerLinks['Platform'].map((link) => (
                <li key={link.name}>
                  {link.name === 'Contact Us' || link.name === 'Report a Problem' ? (
                    <button
                      onClick={() => openModal(link.name)}
                      className="group flex items-center text-[#ffffff] hover:text-[#e22441] transition-colors"
                    >
                      <span>{link.name}</span>
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      target={link.target || '_self'}
                      rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                      className="group flex items-center text-[#ffffff] hover:text-[#e22441] transition-colors"
                    >
                      <span>{link.name}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect with us Section */}
          <div className="relative lg:pl-4">
            {/* Removed vertical line */}
            <h3 className="text-base font-bold text-[#ffffff] uppercase tracking-wider mb-4 underline decoration-transparent hover:decoration-[#e22441] transition">
              Connect with us
            </h3>
            <div className="flex space-x-6 text-white text-2xl justify-center">
              <a
                href="https://discord.gg/YOUR_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#e22441] hover:-translate-y-1 transition-transform"
              >
                <FaDiscord />
              </a>
              <a
                href="https://facebook.com/YOUR_PAGE"
                className="hover:text-[#e22441] hover:-translate-y-1 transition-transform"
              >
                
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/YOUR_HANDLE"
                className="hover:text-[#e22441] hover:-translate-y-1 transition-transform"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://linkedin.com/in/YOUR_PROFILE"
                className="hover:text-[#e22441] hover:-translate-y-1 transition-transform"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://youtube.com/YOUR_CHANNEL"
                className="hover:text-[#e22441] hover:-translate-y-1 transition-transform"
              >
                <FaYoutube />
              </a>
              <a
                href="https://instagram.com/YOUR_PAGE"
                className="hover:text-[#e22441] hover:-translate-y-1 transition-transform"
              >
                <FaInstagram />
              </a>
              <a
                href="https://tiktok.com/@YOUR_PAGE"
                className="hover:text-[#e22441] hover:-translate-y-1 transition-transform"
              >
                <FaTiktok />
              </a>
              <a
                href="mailto:yourmail@gmail.com"
                className="hover:text-[#e22441] hover:-translate-y-1 transition-transform"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 border border-black w-full max-w-lg relative">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
              <h1 className="text-3xl font-bold mb-4 text-black">{modalTitle}</h1>
              <ContactForm />
            </div>
          </div>
        )}

        {/* Footer Bottom Bar */}
        <div className="mt-12 border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#ffffff] text-sm">
              © {new Date().getFullYear()} Texas List - All rights reserved
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Link to="/support-us" className="flex items-center text-[#ffffff] hover:text-[#e22441]">
                <Heart className="h-4 w-4 mr-1" />
                <span>Support Us</span>
              </Link>
              <Link to="/app" className="text-[#ffffff] hover:text-[#e22441]">
                Mobile App
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}