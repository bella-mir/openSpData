import { useState } from "react";
import styles from "./header.module.scss";
import LanguageSwitcher from "./languageSwitcher";
import { Button } from "antd";
import { useTranslation } from "react-i18next";
import { AddDataForm } from "../addDataForm";

export const Header = () => {
  const [isProposalModalVisible, setProposalModalVisible] = useState(false);
  const { t } = useTranslation();

  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <h1 className={styles.title}>OPEN GEOSPATIAL DATA</h1>
        <LanguageSwitcher />
        <Button
          type="primary"
          onClick={() => setProposalModalVisible(true)}
          style={{ marginBottom: "1rem" }}
        >
          {t("Add Proposal")}
        </Button>
        <AddDataForm
          visible={isProposalModalVisible}
          onClose={() => setProposalModalVisible(false)}
        />
      </div>
    </div>
  );
};
