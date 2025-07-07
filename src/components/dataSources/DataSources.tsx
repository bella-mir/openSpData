import React, { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Button, Select, Tag, Tooltip, Modal } from "antd";
import styles from "./dataSources.module.scss";
import dataSources from "./data/all_data_sources.json";
import { PlusCircleOutlined } from "@ant-design/icons";
import { AddDataForm } from "../addDataForm";
import bella from "./images/Bella.jpeg";

interface I18nField {
  ru?: string;
  en: string;
}

interface DataSourceItem {
  name: I18nField;
  url: string;
  api: boolean;
  coverage: string;
  description: I18nField;
  types: string[];
  category: string;
}

const dataSourcesTyped: DataSourceItem[] = dataSources as DataSourceItem[];

const SECTION_CATEGORIES: Record<string, Record<string, string[]>> = {
  Sources: {
    General: [
      "OpenStreetMap",
      "Administrative boundaries",
      "Places & Buildings",
    ],
    Demographics: ["Population Data"],
    Transport: ["GTFS"],
    Imagery: ["Satellite Imagery & Remote Sensing", "Digital Elevation Models"],
    Environment: ["Environmental and climatic data"],
    "Russia-Specific Data": ["Russia Official Open Data", "Other"],
    "Aggregators and Search": ["Aggregators", "Geodata Search"],
    "National Geoportals": ["National Geoportals"],
  },
  "Useful APIs": {
    APIs: [
      "Geocoding",
      "Transport / Network analysis API",
      "Map Tiles & Basemaps",
    ],
  },
  Other: {
    Other: ["Historical maps and photos"],
  },
};

export const DataSources: React.FC = () => {
  const { t, i18n } = useTranslation();
  const langFull = i18n.language as keyof I18nField;
  const lang = langFull.includes("-")
    ? (langFull.split("-")[0] as "ru" | "en")
    : (langFull as "ru" | "en");

  const [activeSection, setActiveSection] = useState("Sources");
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);
  const [isProposalModalVisible, setProposalModalVisible] = useState(false);
  const [isLearnMoreVisible, setLearnMoreVisible] = useState(false);

  const groupedData = dataSourcesTyped.reduce<Record<string, DataSourceItem[]>>(
    (acc, item) => {
      const cat = item.category;
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(item);
      return acc;
    },
    {}
  );

  Object.keys(groupedData).forEach((cat) => {
    groupedData[cat].sort((a, b) => {
      const aName = a.name[lang] || a.name.en;
      const bName = b.name[lang] || b.name.en;
      return aName.localeCompare(bName);
    });
  });

  return (
    <>
      <div className={styles.container}>
        <div className={styles.description}>
          <h1 className={styles.title}>{t("OPEN GEODATA")}</h1>
          <div className={styles.descriptionContent}>
            <p className={styles.descriptionText}>
              <Trans
                i18nKey="description_part1"
                components={{
                  stong: (
                    <Tooltip
                      placement="bottomRight"
                      title={t("tooltip_popular")}
                      classNames={{ root: styles.smallTooltip }}
                    >
                      <strong />
                    </Tooltip>
                  ),
                }}
              />
            </p>
            <div className={styles.buttons}>
              <button
                onClick={() => setProposalModalVisible(true)}
                className={styles.addButton}
              >
                <PlusCircleOutlined />
                {t("Add Data")}
              </button>
              <Button
                type="link"
                onClick={() => setLearnMoreVisible(true)}
                style={{ color: "#F2EEEB", fontSize: "16px" }}
              >
                {t("Learn more")}
              </Button>
            </div>
          </div>
        </div>

        <div
          style={{ width: "100%", marginBottom: "1rem", textAlign: "center" }}
        >
          <Button.Group className={styles.buttonGroup}>
            {Object.keys(SECTION_CATEGORIES).map((section) => (
              <Button
                className={styles.button}
                key={section}
                type={activeSection === section ? "primary" : "default"}
                onClick={() => {
                  setActiveSection(section);
                  setSelectedGroups([]);
                }}
              >
                {t(section)}
              </Button>
            ))}
          </Button.Group>
        </div>

        {activeSection === "Sources" && (
          <Select
            mode="multiple"
            allowClear
            placeholder={t("Select groups")}
            style={{ minWidth: 320 }}
            className={styles.select}
            value={selectedGroups}
            onChange={(values) => setSelectedGroups(values)}
            options={Object.keys(SECTION_CATEGORIES[activeSection]).map(
              (groupName) => ({
                value: groupName,
                label: t(groupName),
              })
            )}
          />
        )}

        {Object.entries(SECTION_CATEGORIES[activeSection])
          .filter(
            ([bigGroupName]) =>
              selectedGroups.length === 0 ||
              selectedGroups.includes(bigGroupName)
          )
          .map(([bigGroupName, groupCategories]) => (
            <div key={bigGroupName} className={styles.bigGroup}>
              {activeSection === "Sources" && (
                <h2 className={styles.bigGroupTitle}>{t(bigGroupName)}</h2>
              )}
              {groupCategories.map((category) =>
                groupedData[category]?.length ? (
                  <section key={category} className={styles.categorySection}>
                    <h3 className={styles.categoryTitle}>{t(category)}</h3>
                    <div className={styles.sourcesGrid}>
                      {groupedData[category].map((source) => (
                        <a
                          key={`${category}-${source.name.en}`}
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.sourceCard}
                        >
                          <div className={styles.sourceName}>
                            <span>{source.name[lang] || source.name.en}</span>
                            {lang !== "ru" && source.name.ru && (
                              <span className={styles.sourceNameRus}>
                                (RU - {source.name.ru})
                              </span>
                            )}
                          </div>
                          <p className={styles.sourceDescription}>
                            {source.description[lang]}
                          </p>
                          <p className={styles.sourceDetails}>
                            {source.types?.length > 0 && (
                              <span>
                                <strong>{t("Types")}:</strong>{" "}
                                {source.types.join(", ")}
                              </span>
                            )}
                          </p>
                          <p className={styles.sourceDetails}>
                            <strong>{t("API")}:</strong>{" "}
                            <Tag color={source.api ? "green" : "default"}>
                              {source.api ? t("yes") : t("no")}
                            </Tag>
                          </p>
                          <p className={styles.sourceDetails}>
                            <strong>{t("Coverage")}:</strong>{" "}
                            {t(source.coverage)}
                          </p>
                        </a>
                      ))}
                    </div>
                  </section>
                ) : null
              )}
            </div>
          ))}
      </div>

      <AddDataForm
        visible={isProposalModalVisible}
        onClose={() => setProposalModalVisible(false)}
      />

      <Modal
        open={isLearnMoreVisible}
        title={t("About")}
        onCancel={() => setLearnMoreVisible(false)}
        footer={null}
      >
        <p>{t("learn_more_modal.intro")}</p>

        <p>
          <Trans
            i18nKey="learn_more_modal.body1"
            components={{
              link: (
                <a
                  href="https://t.me/+AxYgeKyZehs1NTZi"
                  target="_blank"
                  rel="noreferrer"
                />
              ),
            }}
          />
        </p>

        <p>{t("learn_more_modal.body2")}</p>

        <div className={styles.creatorBox}>
          <img src={bella} alt="Bella" className={styles.creatorAvatar} />
          <div className={styles.creatorInfo}>
            <strong>Bella</strong>
            <span>GIS-developer, -analyst and cartographer</span>
            <div className={styles.creatorLinks}>
              <a
                href="https://github.com/bella-mir"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              {" · "}
              <a
                href="https://www.linkedin.com/in/bella-mironova-64b01a222/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              {" · "}
              <a
                href="https://t.me/+AxYgeKyZehs1NTZi"
                target="_blank"
                rel="noopener noreferrer"
              >
                GIS and PEACE Blog
              </a>
              {" · "}
              <a
                href="https://buymeacoffee.com/bellagis"
                target="_blank"
                rel="noopener noreferrer"
              >
                Support ☕
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DataSources;
