import { MailOutlined } from "@ant-design/icons";
import styles from "./footer.module.scss";
import tg from "./asserts/tg.svg";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>© 2025 Bella Mironova</div>
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
