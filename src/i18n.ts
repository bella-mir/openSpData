import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      "Российские муниципальные данные": "Russian municipal data",
      Types: "Types",
      API: "API",
      Coverage: "Coverage",
      yes: "yes",
      no: "no",
      "Add Data": "Add",
      "Suggest New Data Source": "Suggest New Data Source",
      Name: "Name",
      "Please enter a name": "Please enter a name",
      URL: "URL",
      "Please enter a URL": "Please enter a URL",
      "Please enter a valid URL": "Please enter a valid URL",
      Description: "Description",
      "Please add a description": "Please add a description",
      "Types (comma separated)": "Types (comma separated)",
      "Please specify at least one type": "Please specify at least one type",
      "e.g.: vector, raster": "e.g.: vector, raster",
      "Please specify coverage": "Please specify coverage",
      Category: "Category",
      "Please specify category": "Please specify category",
      "Has API": "Has API",
      Submit: "Submit",
      "Thank you! Your submission will be added after review.":
        "Thank you! Your submission will be added after review.",
      "An error occurred. Please contact us at support@example.com or via Telegram @YourChannel.":
        "An error occurred. Please contact us at support@example.com or via Telegram @YourChannel.",
    },
  },
  ru: {
    translation: {
      "Российские муниципальные данные": "Российские муниципальные данные",
      Types: "Типы",
      API: "API",
      Coverage: "Покрытие",
      yes: "да",
      no: "нет",
      "Add Data": "Добавить",
      "Suggest New Data Source": "Предложить новый набор данных",
      Name: "Название",
      "Please enter a name": "Пожалуйста, введите название",
      URL: "Ссылка",
      "Please enter a URL": "Пожалуйста, введите ссылку",
      "Please enter a valid URL": "Пожалуйста, введите корректный URL",
      Description: "Описание",
      "Please add a description": "Пожалуйста, добавьте описание",
      "Types (comma separated)": "Типы (через запятую)",
      "Please specify at least one type":
        "Пожалуйста, укажите хотя бы один тип",
      "e.g.: vector, raster": "напр.: вектор, растровый",
      "Please specify coverage": "Пожалуйста, укажите зону покрытия",
      Category: "Категория",
      "Please specify category": "Пожалуйста, укажите категорию",
      "Has API": "Есть API",
      Submit: "Отправить",
      "Thank you! Your submission will be added after review.":
        "Спасибо! Ваше предложение будет добавлено после модерации.",
      "An error occurred. Please contact us at support@example.com or via Telegram @YourChannel.":
        "Произошла ошибка. Пожалуйста, свяжитесь с нами по почте support@example.com или в Telegram @YourChannel.",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ["navigator", "htmlTag", "localStorage", "cookie"],
      caches: ["localStorage", "cookie"],
    },
    fallbackLng: "en",
    supportedLngs: ["ru", "en"],
    load: "languageOnly",
    resources,
    interpolation: { escapeValue: false },
  });

export default i18n;
