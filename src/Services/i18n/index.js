import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .use(Backend)
    .init({
        debug: true,
        lng: 'en', // default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react
        },
        returnObjects: true,
    });

export default i18n;