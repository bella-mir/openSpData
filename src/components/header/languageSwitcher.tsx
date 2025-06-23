import { useTranslation } from "react-i18next";
import styles from "./header.module.scss";
import { GlobalOutlined } from "@ant-design/icons";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "ru" ? "en" : "ru";
    i18n.changeLanguage(newLang);
    localStorage.setItem("selectedLanguage", newLang);
  };

  return (
    <button onClick={toggleLanguage} className={styles.lngButton}>
      <GlobalOutlined />
      {i18n.language === "ru" ? "RU" : "EN"}
    </button>
  );
};

export default LanguageSwitcher;
