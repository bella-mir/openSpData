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
      global: "Global",
      russia: "Russia",
      "russia, cis": "Russia, CIS region",
      "Switch the language": "Switch the language (Изменить язык)",
      moscow: "Moscow(Russia)",
      "arctic region": "Arctic Region",
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
      description_part1:
        "More than 80 links to <strong>popular</strong> open geodata sources and handy APIs.",
      tooltip_popular:
        "Most of them are universal but the selection is influenced by my experience in urban studies and planning in Russia.",
      description_part2: "I’ve gathered these over time on my blog",
      description_part3: "(ru), and now they are here on one page.",
      description_part4:
        "If you know a great source — hit <button>Add</button> button and help grow this collection.",
      tooltip_add: "The button is at the top of the page",
      CollectedByB: "Сollected by Bella Mironova",
      Sources: "Data",
      Other: "Other",
      "Useful APIs": "Useful APIs",
      General: "General",
      Demographics: "Demographics",
      Transport: "Transport",
      Imagery: "Imagery",
      Environment: "Environment",
      "Russia-Specific Data": "Specifically for Russia",
      "Aggregators and Search": "Aggregators and Search",
      OpenStreetMap: "OpenStreetMap",
      "Administrative boundaries": "Administrative boundaries",
      "Population Data": "Population Data",
      "Select groups": "Select groups",
      "Places & Buildings": "Places & Buildings",
      "Digital Elevation Models": "Digital Elevation Models",
      "Environmental and climatic data": "Environmental and climatic data",
      "Russia Official Open Data": "Russia Official Open Data",
      Aggregators: " Aggregators",
      "Geodata Search": "Geodata Search",
      Geocoding: "Geocoding",
      "Transport / Network analysis API": "Transport / Network analysis API",
      "Map Tiles & Basemaps": "Map Tiles & Basemaps",
      "Historical maps and photos": "Historical maps and photos",
      "OPEN GEODATA": "OPEN GEODATA",
      "saint-petersburg": "Saint Petersburg",
      learn_more_modal: {
        intro:
          "This portal brings together links to open geodata sources and handy APIs for spatial analysis.",
        body1:
          "For the last 6 years, I’ve worked daily with spatial data. Most of my work is based on open data, and I’ve been collecting sources in my notes and on my blog <link>GIS and PEACE</link>.",
        body2:
          "While my experience lies in urban data in Russia, I’ve tried to include universal resources useful across disciplines. It’s not a full list, but I hope it helps. Feel free to suggest new sources!",
      },
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
      global: "На весь мир",
      russia: "Россия",
      "russia, cis": "Россия, СНГ",
      "Switch the language": "Изменить язык (Switch the language)",
      moscow: "Москва",
      "arctic region": "Арктический регион",
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
      description_part1:
        "Более 80 ссылок на <strong>популярные</strong> открытые геоданные и полезные API.",
      tooltip_popular:
        "Большинство источников универсальны, но выбор отражает мой опыт в урбанистике в России.",
      description_part2: "Я собирала их в своём блоге",
      description_part3: "(ru), и теперь всё собрано на одной странице.",
      description_part4:
        "Если вы знаете полезный источник — нажмите кнопку <button>Добавить</button> и помогите пополнить эту коллекцию.",
      tooltip_add: "Кнопка находится в верхней части страницы",
      CollectedByB: "Собрано Беллой Мироновой",
      Sources: "Данные",
      Other: "Другое",
      "Useful APIs": "Полезные API",
      General: "Общие данные",
      Demographics: "Демография",
      Transport: "Транспорт",
      Imagery: "Спутниковые снимки и дистанционное зондирование",
      Environment: "Окружающая среда",
      "Russia-Specific Data": "Специально для России",
      "Aggregators and Search": "Агрегаторы и поиск",
      OpenStreetMap: "OpenStreetMap",
      "Administrative boundaries": "Административные границы",
      "Population Data": "Данные о населении",
      "Select groups": "Выбрать категории",
      "Places & Buildings": "Места и здания",
      "Digital Elevation Models": "Цифровые модели высот",
      "Environmental and climatic data": "Экологические и климатические данные",
      "Russia Official Open Data": " Официальные открытые данные России",
      Aggregators: "Агрегаторы",
      "Geodata Search": "Поиск геоданных",
      Geocoding: "Геокодирование",
      "Transport / Network analysis API": "Маршрутизация",
      "Map Tiles & Basemaps": "Тайлы и базовые карты",
      "Historical maps and photos": "Исторические карты и фотографии",
      // "OPEN GEODATA": "ОТКРЫТЫЕ ГЕОДАННЫЕ",
      "Learn more": "Узнать больше",
      "saint-petersburg": "Санкт-Петербург",
      About: "О проекте",
      learn_more_modal: {
        intro:
          "На этом сайте собраны ссылки на открытые геоданные и полезные API для работы с пространственными данными.",
        body1:
          "Около 6 лет я почти ежедневно работаю с пространственными данными как ГИС-аналитик, ГИС-разработчик и картограф. Большинство источников я собирала для себя, а потом делилась в блоге <link>GIS and PEACE</link>.",
        body2:
          "Моя работа в первую очередь связана с городскими исследованиями и пространственной аналитикой в России, но я постаралась включить универсальные ресурсы. Это не полный список, но надеюсь, он окажется полезным. Если вы знаете другие интересные источники, которые бы дополнили эту подборку, предложите, это будет очень ценно!",
      },
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
