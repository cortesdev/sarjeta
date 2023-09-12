import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import ptTranslation from './locales/pt/translation.json';
import enTranslation from './locales/en/translation.json';
import deTranslation from './locales/de/translation.json';


i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        detection: {
            order: ['navigator', 'htmlTag', 'path', 'subdomain'],
            caches: ['cookie'],
        },
        resources: {
            pt: {
                translation: ptTranslation,
            },
            en: {
                translation: enTranslation,
            },
            de: {
                translation: deTranslation,
            },
        },
        lng: 'pt', // Set the default language
        fallbackLng: 'pt',
        interpolation: {
            escapeValue: false, // React already escapes by default
        },
    });
export default i18n;