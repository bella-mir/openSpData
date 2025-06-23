import { useState } from "react";
import styles from "./header.module.scss";
import LanguageSwitcher from "./languageSwitcher";

import { useTranslation } from "react-i18next";
import { AddDataForm } from "../addDataForm";
import { PlusCircleOutlined } from "@ant-design/icons";

export const Header = () => {
  const [isProposalModalVisible, setProposalModalVisible] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.header}>
        <div className={styles.content}>
          <h1 className={styles.title}>OPEN GEODATA</h1>
          <div className={styles.flexrow}>
            <button
              onClick={() => setProposalModalVisible(true)}
              className={styles.lngButton}
            >
              <PlusCircleOutlined />
              {t("Add Data")}
            </button>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
      <AddDataForm
        visible={isProposalModalVisible}
        onClose={() => setProposalModalVisible(false)}
      />
    </>
  );
};
