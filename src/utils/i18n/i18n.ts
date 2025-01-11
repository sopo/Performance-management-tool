import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ka from "./locales/ka/ka.json";
import en from "./locales/en/en.json";
import LanguageDetector from "i18next-browser-languagedetector";
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: en,
  },
  ka: {
    translation: ka,
  },
};
const detectionOptions = {
  order: ["path"],
  lookUpFromPathIndex: 0,
  lookUpFromSubdomainIndex: 0,
  htmlTag: document.documentElement,
};
const languageDetector = new LanguageDetector();
i18n
  .use(languageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    detection: detectionOptions,
    resources,
    // lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    // fallbackLng: "en",
    // lng: 'en', 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;