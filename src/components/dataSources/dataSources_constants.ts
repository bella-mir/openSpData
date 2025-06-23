export const CATEGORIES = {
  // Базовые и универсальные данные
  General: ["OpenStreetMap"],

  // Растровые и визуальные источники
  Imagery: ["Satellite Imagery & Remote Sensing", "Historical Maps & Photos"],

  // Административные границы и учёт земли
  Administration: ["Administrative Boundaries", "Cadastral & Land Registers"],

  // Социально-демографические данные
  Demographics: [
    "Demographic & Statistical Data",
    "Urban & Demographic Data",
    "Russian Municipal Data",
  ],

  // Природная среда и риски
  Environment: [
    "Protected Areas",
    "Biodiversity & Biogeography",
    "Environmental & Climatic Data",
    "Extreme Phenomena & Risks",
    "Geological Data",
    "Land & Soil Monitoring",
    "Soils & Vegetation",
    "Hydrography & Water Resources",
    "Sea & Hydrographic Data",
    "Open Weather Forecasts & Climate Models",
  ],

  // Инфраструктурные и отраслевые API
  Infrastructure: [
    "Transport & Roads",
    "Geocoding",
    "Industry & Thematic Portals",
  ],

  // Порталы, каталоги и сервисы
  Portals: [
    "Open Geodata Portals",
    "Portals & Aggregators",
    "Open Infrastructure Catalogs & QA",
    "STAC Catalogs & Cloud Platforms",
    "Map Tiles & Basemaps",
  ],
};

// export const CATEGORIES_DATA = {
//   General: ["OpenStreetMap"],
//   GeneralRaster: ["Satellite Imagery & Remote Sensing"],
//   HumanGeography: ["Administrative boundaries", "Demographic & Statistical Data"],

//   PhysicalGeography: [
//     "Protected Areas",
//     "Hydrography & Water Resources",
//     "Biodiversity & Biogeography",
//     "Environmental & Climatic Data",
//     "Extreme Phenomena & Risks",
//     "Geological Data",
//     "Land & Soil Monitoring",
//     "Open Weather Forecasts & Climate Models",
//     "Sea & Hydrographic Data",
//     "Soils & Vegetation"
//   ],
//   WebSourses: ["Open Geodata Portals", "Open Infrastructure Catalogs & QA", "Portals & Aggregators","STAC Catalogs & Cloud Platforms"],
//   RussianStat: ["Russian Municipal Data"]
// };

// export const CATEGORIES_API = ["Map Tiles & Basemaps", "Geocoding", "Transport & Roads"];

// export const CATEGORIES_OTHER = ["Historical Maps & Photos", ];

// Cadastral & Land Registers

// Industry & Thematic Portals

// Urban & Demographic Data

// Гидрографические данные
// Hydrography & Water Resources + Sea & Hydrographic Data → Water & Marine Data
// Объединяет всё, что связано с береговыми, морскими и внутренними водными ресурсами.
// Почвенно-ландшафтный мониторинг
// Land & Soil Monitoring + Soils & Vegetation → Land & Soil
// Собирает данные о почвах, растительности и мониторинге земельных участков.
// Порталы и каталоги
// Open Geodata Portals
// Portals & Aggregators
// Open Infrastructure Catalogs & QA
// STAC Catalogs & Cloud Platforms
// (опционально) Map Tiles & Basemaps
// → Portals & Catalogs
// Унифицирует все веб-сервисы и каталоги, через которые получают и проверяют данные.
// Границы и реестры
// Administrative Boundaries + Cadastral & Land Registers → Land Administration
// Объединяет юридические границы и кадастровую информацию.
// Климат и среда
// Environmental & Climatic Data + Open Weather Forecasts & Climate Models → Climate & Environment
// Сводит воедино всё про климатические параметры, прогнозы и экологические наблюдения.
// Социально-демографические данные
// Demographic & Statistical Data
// Urban & Demographic Data
// Russian Municipal Data
// → Demographics
// Можно оставить единым блоком «Demographics», без отдельной подкатегории «Russian…».
