import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import TranslationEN from './Languages/EN/translation.json'
import TranslationFR from './Languages/FR/translation.json'
import TranslationES from './Languages/ES/translation.json'


const resources = {
  en: {
    translation: TranslationEN,
  },
  fr: {
    translation: TranslationFR,
  },
  es: {
    translation: TranslationES,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
