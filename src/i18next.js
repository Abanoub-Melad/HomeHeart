import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import  ar  from "./Language/ar/ar.json";
import  en  from "./Language/en/en.json";
// import LanguageDetector from "i18next-browser-languagedetector";  
// import Backend from "i18next-http-backend"
const resources = {
    ar: {
        translation: ar
    },
    en: {
        translation: en
    },
    lng: localStorage.getItem("lng") || 'en'
};

i18n
    // The object that contains all languages
    .use(initReactI18next)
    // .use(LanguageDetector) 
    // .use(Backend)
    .init({
        debug: true,
        // support languages
        defaultLocal: 'en',
        default: 'en',
        resources,
        // lng: "en",
        // لغة غير مدعمة لو اختار لغة غير مدعومة هيجبله الانجلش        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        },
        detection: {
            order: ['path', 'localStorage', 'htmlTag', 'subdomain'],
            // lookupQuerystring: "lng",
            caches: ["localStorage"],
        },
        backend: {
            loadPath: './local/{{lng}}/Translate.json',
            // loadPath: `${window.location.origin}/i18n/{{lng}}.json`,
            // loadPath: "http://localhost:5173/i18n/{{lng}}.json",



        },
        lng: localStorage.getItem("lng") || 'en'
    });

export default i18n;