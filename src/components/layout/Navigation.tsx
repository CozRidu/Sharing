// import { Link } from 'react-router-dom';
import { User, Plus, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import LoginModal from '../auth/LoginModal';
import PostModal from '../auth/PostModal';
import Sidebar from './Sidebar';
import Categories from './Categories';
import FullLogo from '../Full_Logo.png';


export default function Navigation() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isSidebarOpen]);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
  };

  const handlePostClick = () => {
    if (!isLoggedIn) {
      setIsLoginModalOpen(true);
    } else {
      setIsPostModalOpen(true);
    }
  };

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          backgroundColor: '#151518',
          backdropFilter: 'none',
        }}
        className="sticky top-0 z-50 shadow-none border-b-0"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden p-2 rounded-md text-gray-400 hover:text-[#e22441] focus:text-[#e22441] hover:bg-[#222]"
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/">
                <img src={FullLogo} alt="Logo" className="h-10 w-auto" />
              </a>
            </div>

            {/* Categories */}
            <Categories />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="outline"
                onClick={() => !isLoggedIn && setIsLoginModalOpen(true)}
                className="flex items-center text-white hover:text-[#e22441] focus:text-[#e22441]"
              >
                <User className="h-5 w-5 mr-2" />
                <span>{isLoggedIn ? 'Account' : 'Sign In'}</span>
              </Button>
              <Button onClick={handlePostClick} className="flex items-center">
                <Plus className="h-5 w-5 mr-2" />
                <span>Post</span>
              </Button>
            </div>

            {/* Mobile Post Button */}
            <div className="md:hidden">
              <Button onClick={handlePostClick} size="sm">
                <Plus className="h-5 w-5" />
                <span>Post</span>
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <Sidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            isLoggedIn={isLoggedIn}
            onLoginClick={() => {
              setIsSidebarOpen(false);
              setIsLoginModalOpen(true);
            }}
            onPostClick={() => {
              setIsSidebarOpen(false);
              handlePostClick();
            }}
          />
        )}
      </AnimatePresence>

      {/* Modals */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSuccess={handleLoginSuccess}
      />
      <PostModal
        isOpen={isPostModalOpen}
        onClose={() => setIsPostModalOpen(false)}
        onSuccess={() => setIsPostModalOpen(false)}
      />
    </>
  );
}