import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Select, Button } from "antd";
import styles from "./dataSources.module.scss";
import dataSources from "./data/simplified_data2.json";

// Типизация данных c локализацией
interface I18nField {
  ru: string;
  en: string;
}

interface DataSourceItem {
  name: string;
  url: string;
  api: boolean;
  coverage: string;
  description: I18nField;
  types: string[];
  category: string;
}

const dataSourcesTyped: DataSourceItem[] = dataSources as DataSourceItem[];

// Высокоуровневые секции и соответствующие категории
const SECTION_CATEGORIES: Record<string, string[]> = {
  "Data Sources": [
    "OpenStreetMap",
    "General",
    "Satellite Imagery & Remote Sensing",
    "Population Data",
    "Administrative boundaries",
    "Open Data Portals",
    "Aggregators",
    "Geodata Search",
    "Russian Gov open data",
    "Environmental and climatic data",
    "GTFS",
  ],
  "API for analysis": [
    "Geocoding",
    "Transport / Network analysis API",
    "Map Tiles & Basemaps",
  ],
  Other: ["Historical maps and photos"],
};

export const DataSources: React.FC = () => {
  const { t, i18n } = useTranslation();
  const langFull = i18n.language as keyof I18nField;
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [activeSection, setActiveSection] = useState<string>("Data Sources");

  // Берём только часть до дефиса, если он есть
  const lang = langFull.includes("-")
    ? (langFull.split("-")[0] as "ru" | "en")
    : (langFull as "ru" | "en");

  // Группировка по категориям на выбранном языке
  const groupedData = dataSourcesTyped.reduce<Record<string, DataSourceItem[]>>(
    (acc, item) => {
      const cat = item.category;
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(item);
      return acc;
    },
    {}
  );

  const categories = Object.keys(groupedData);

  // Фильтрация по секции
  const sectionFiltered = SECTION_CATEGORIES[activeSection] || categories;

  // Применение фильтра выбранных категорий и секции
  const displayCategories = (
    selectedCategories.length
      ? categories.filter((cat) => selectedCategories.includes(cat))
      : sectionFiltered
  ).reduce(
    (acc, cat) => ({ ...acc, [cat]: groupedData[cat] }),
    {} as Record<string, DataSourceItem[]>
  );

  return (
    <div className={styles.container}>
      {/* Переключатель секций */}
      <div style={{ width: "100%", marginBottom: "1rem", textAlign: "center" }}>
        <Button.Group>
          {Object.keys(SECTION_CATEGORIES).map((section) => (
            <Button
              key={section}
              type={activeSection === section ? "primary" : "default"}
              onClick={() => {
                setActiveSection(section);
                setSelectedCategories([]);
              }}
            >
              {section}
            </Button>
          ))}
        </Button.Group>
      </div>

      {/* Фильтр категорий */}
      <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
        <Select
          mode="multiple"
          placeholder={t("Select Categories")}
          allowClear
          style={{ minWidth: 240 }}
          onChange={(values: string[]) => setSelectedCategories(values)}
          options={categories?.map((cat) => ({ value: cat, label: cat }))}
        />
      </div>

      {Object.entries(displayCategories)?.map(([category, sources]) => (
        <section key={category} className={styles.categorySection}>
          <h2 className={styles.categoryTitle}>{category}</h2>
          <div className={styles.sourcesGrid}>
            {sources?.map((source) => (
              <a
                key={`${category}-${source.name}`}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.sourceCard}
              >
                <div className={styles.sourceName}>{source.name}</div>
                <p className={styles.sourceDescription}>
                  {source.description[lang]}
                </p>
                <p className={styles.sourceDetails}>
                  <strong>{t("Types")}:</strong>{" "}
                  {source.types.map((ti) => ti).join(", ")}
                </p>
                <p className={styles.sourceDetails}>
                  <strong>{t("API")}:</strong> {source.api}
                </p>
                <p className={styles.sourceDetails}>
                  <strong>{t("Coverage")}:</strong> {source.coverage}
                </p>
              </a>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};
