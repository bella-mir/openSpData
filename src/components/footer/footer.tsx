import { MailOutlined } from "@ant-design/icons";
import styles from "./footer.module.scss";
import tg from "./asserts/tg.svg";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div>{t("CollectedByB")}, 2025</div>
      <div className={styles.info}>
        <div className={styles.email}>
          <MailOutlined />
          <span>belkamir@mail.ru</span>
          <a href="https://t.me/+AxYgeKyZehs1NTZi" target="_blank">
            <img src={tg} alt="TG Logo" />
          </a>
        </div>
      </div>
    </footer>
  );
};
