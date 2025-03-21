import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import huTranslations from './translations/hu.json';
import enTranslations from './translations/en.json';
import frTranslations from './translations/fr.json';
import itTranslations from './translations/it.json';
import deTranslations from './translations/de.json';
import esTranslations from './translations/es.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      hu: {
        translation: huTranslations,
      },
      en: {
        translation: enTranslations,
      },
      fr: {
        translation: frTranslations,
      },
      it: {
        translation: itTranslations,
      },
      de: {
        translation: deTranslations,
      },
      es: {
        translation: esTranslations,
      },
    },
    fallbackLng: 'hu',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 