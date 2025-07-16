import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import en from './locales/en.json';
import sr from './locales/sr.json';
import ru from './locales/ru.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    sr: { translation: sr },
    ru: { translation: ru },
  },
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
