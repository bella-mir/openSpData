import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Select } from "antd";
import styles from "./dataSources.module.scss";
import dataSources from "./data/dataSources_i18n_last.json";

// Типизация данных c локализацией
interface I18nField {
  ru: string;
  en: string;
}

interface DataSourceItem {
  name: string;
  url: string;
  api: I18nField;
  coverage: I18nField;
  description: I18nField;
  types: I18nField[];
  category: I18nField;
}

const dataSourcesTyped: DataSourceItem[] = dataSources as DataSourceItem[];

export const DataSources: React.FC = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as keyof I18nField;
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Группировка по категориям на выбранном языке
  const groupedData = dataSourcesTyped.reduce<Record<string, DataSourceItem[]>>(
    (acc, item) => {
      const cat = item.category[lang];
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(item);
      return acc;
    },
    {}
  );

  const categories = Object.keys(groupedData);
  // Фильтрация: если выбраны категории, показываем их, иначе все
  const displayCategories =
    selectedCategories.length > 0
      ? categories
          .filter((cat) => selectedCategories.includes(cat))
          .reduce(
            (acc, cat) => ({ ...acc, [cat]: groupedData[cat] }),
            {} as Record<string, DataSourceItem[]>
          )
      : groupedData;

  return (
    <div className={styles.container}>
      <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
        <Select
          mode="multiple"
          placeholder={t("Select Categories")}
          allowClear
          style={{ minWidth: 240 }}
          onChange={(values: string[]) => setSelectedCategories(values)}
          options={categories.map((cat) => ({ value: cat, label: cat }))}
        />
      </div>

      {Object.entries(displayCategories).map(([category, sources]) => (
        <section key={category} className={styles.categorySection}>
          <h2 className={styles.categoryTitle}>{category}</h2>
          <div className={styles.sourcesGrid}>
            {sources.map((source) => (
              <a
                key={`${category}-${source.name}`}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.sourceCard}
              >
                <h3 className={styles.sourceName}>{source.name}</h3>
                <p className={styles.sourceDescription}>
                  {source.description[lang]}
                </p>
                <p className={styles.sourceDetails}>
                  <strong>{t("Types")}:</strong>{" "}
                  {source.types.map((ti) => ti[lang]).join(", ")}
                </p>
                <p className={styles.sourceDetails}>
                  <strong>{t("API")}:</strong> {source.api[lang]}
                </p>
                <p className={styles.sourceDetails}>
                  <strong>{t("Coverage")}:</strong> {source.coverage[lang]}
                </p>
              </a>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};
