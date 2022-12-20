import React from "react";
import styles from "./footer.module.css";
import logoFuter from "../../assets/Без названия (2)(1).png";
import { useSelector } from "react-redux";

const Footer = () => {
  const privateRoom = useSelector((state) => state.userReducer.userPersonal);


  return (
    <div className={styles.footer}>
      <div className={styles.footerBlock}>
        <img className={styles.footerLogo} src={logoFuter} alt="logo" />
        <div className={styles.infoBlock}>
          {" "}
          <h3>Наши контакты</h3>
          <h5 className={styles.href}> +79226661313</h5>
          <h5 className={styles.href}> +77054737636</h5>
        </div>
        <div className={styles.infoBlock}>
          <h3>Техподдержка</h3>
          <h3>
            <a
              className={styles.href}
              href={!privateRoom && "https://wa.me/79226661313"}
              target="_blank"
            >
              WhatsApp
            </a>
          </h3>
          <h3>
            {" "}
            <a
              className={styles.href}
              href={!privateRoom && "https://t.me/HelloW0Rd"}
              target="_blank"
            >
              Наш телеграм
            </a>
          </h3>
        </div>
        <div className={styles.infoBlock}>
          <h3>Рекалама</h3>
          <h3>
            <a
              className={styles.href}
              href={!privateRoom && "https://wa.me/79226661313"}
              target="_blank"
            >
              WhatsApp
            </a>
          </h3>
          <h3>
            {" "}
            <a
              className={styles.href}
              href={!privateRoom && "https://t.me/HelloW0Rd"}
              target="_blank"
            >
              Наш телеграм
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
