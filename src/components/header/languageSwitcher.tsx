import { useTranslation } from "react-i18next";
import styles from "./header.module.scss";
import { GlobalOutlined } from "@ant-design/icons";
import Tooltip from "antd/es/tooltip";
const LanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "ru" ? "en" : "ru";
    i18n.changeLanguage(newLang);
    localStorage.setItem("selectedLanguage", newLang);
  };

  return (
    <Tooltip
      title={t("Switch the language")}
      classNames={{ root: styles.smallTooltip }}
      placement="bottomRight"
    >
      <button onClick={toggleLanguage} className={styles.lngButton}>
        <GlobalOutlined />
        {i18n.language === "ru" ? "RU" : "EN"}
      </button>
    </Tooltip>
  );
};

export default LanguageSwitcher;
