import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Строки перевода
const resources = {
  en: {
    translation: {
      "Российские муниципальные данные": "Russian municipal data",
      Types: "Types",
      API: "API",
      Coverage: "Coverage",
      yes: "yes",
      no: "no",
    },
  },
  ru: {
    translation: {
      "Российские муниципальные данные": "Российские муниципальные данные",
      // ... другие категории
      Types: "Типы",
      API: "API",
      Coverage: "Покрытие",
      yes: "да",
      no: "нет",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru", // язык по умолчанию
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
