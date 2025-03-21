import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: t('header.services'), link: 'services' },
    { title: t('header.contact'), link: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 shadow-sm ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md py-4' 
          : 'bg-gray-900 py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex justify-between items-center">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-2xl font-bold gold-gradient cursor-pointer"
          >
            Lumara
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.link}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={item.link}
                  smooth={true}
                  duration={500}
                  className={`text-sm font-medium relative group cursor-pointer ${
                    scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.title}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition-transform group-hover:scale-x-100 ${
                    scrolled ? 'bg-blue-600' : 'bg-white'
                  }`} />
                </Link>
              </motion.div>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className={`px-8 py-3 rounded-full hover:shadow-lg transition-all transform hover:scale-105 active:scale-95 text-sm font-semibold ${
                scrolled ? 'bg-blue-600 text-white hover-gradient' : 'bg-white text-gray-900 hover:bg-gray-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {t('header.quote')}
            </motion.button>
            <div className="border-l border-gray-200 h-8" />
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSelector />
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-gray-800/50 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-6 h-5">
                <span
                  className={`absolute w-full h-0.5 transform transition-all duration-300 ${
                    scrolled ? 'bg-gray-600' : 'bg-gray-300'
                  } ${isMenuOpen ? 'top-2 rotate-45' : 'top-0'}`}
                />
                <span
                  className={`absolute w-full h-0.5 top-2 transition-all duration-300 ${
                    scrolled ? 'bg-gray-600' : 'bg-gray-300'
                  } ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
                />
                <span
                  className={`absolute w-full h-0.5 transform transition-all duration-300 ${
                    scrolled ? 'bg-gray-600' : 'bg-gray-300'
                  } ${isMenuOpen ? 'top-2 -rotate-45' : 'top-4'}`}
                />
              </div>
            </motion.button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4"
            >
              <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className={`rounded-2xl p-4 space-y-3 ${
                  scrolled ? 'glass-effect' : 'bg-gray-800'
                }`}
              >
                {menuItems.map((item) => (
                  <Link
                    key={item.link}
                    to={item.link}
                    smooth={true}
                    duration={500}
                    className={`block py-3 px-4 rounded-xl text-sm font-medium transition-colors ${
                      scrolled 
                        ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
                <LanguageSelector />
                <button 
                  className={`w-full px-6 py-3 rounded-xl hover:shadow-lg transition-all text-sm font-semibold ${
                    scrolled
                      ? 'bg-blue-600 text-white hover-gradient'
                      : 'bg-white text-gray-900 hover:bg-gray-100'
                  }`}
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                    setIsMenuOpen(false);
                  }}
                >
                  {t('header.quote')}
                </button>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header; 