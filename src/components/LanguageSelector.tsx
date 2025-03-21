import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const languages = [
  { 
    code: 'hu', 
    name: 'Magyar', 
    nativeName: 'Magyar', 
    flag: 'https://flagcdn.com/w40/hu.png'
  },
  { 
    code: 'en', 
    name: 'English', 
    nativeName: 'English', 
    flag: 'https://flagcdn.com/w40/gb.png'
  },
  { 
    code: 'fr', 
    name: 'French', 
    nativeName: 'Français', 
    flag: 'https://flagcdn.com/w40/fr.png'
  },
  { 
    code: 'it', 
    name: 'Italian', 
    nativeName: 'Italiano', 
    flag: 'https://flagcdn.com/w40/it.png'
  },
  { 
    code: 'de', 
    name: 'German', 
    nativeName: 'Deutsch', 
    flag: 'https://flagcdn.com/w40/de.png'
  },
  { 
    code: 'es', 
    name: 'Spanish', 
    nativeName: 'Español', 
    flag: 'https://flagcdn.com/w40/es.png'
  },
];

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { i18n } = useTranslation();
  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageSelect = (language: typeof languages[0]) => {
    i18n.changeLanguage(language.code);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
          scrolled 
            ? 'hover:bg-gray-100 text-gray-700' 
            : 'hover:bg-gray-800 text-gray-300'
        }`}
      >
        <img 
          src={currentLang.flag} 
          alt={currentLang.name} 
          className="w-6 h-4 object-cover rounded shadow-sm"
        />
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''} ${
            scrolled ? 'text-gray-500' : 'text-gray-400'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2 z-50 border border-gray-100"
          >
            {languages.map((language) => (
              <motion.button
                key={language.code}
                whileHover={{ x: 4 }}
                onClick={() => handleLanguageSelect(language)}
                className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
                  currentLang.code === language.code ? 'bg-blue-50' : ''
                }`}
              >
                <img 
                  src={language.flag} 
                  alt={language.name} 
                  className="w-6 h-4 object-cover rounded shadow-sm"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700">{language.nativeName}</span>
                  <span className="text-xs text-gray-500">{language.name}</span>
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector; 