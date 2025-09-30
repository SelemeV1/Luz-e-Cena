import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import styles from "./Footer.module.css";

const FooterRede = () => {
  return (
    <div className={styles.redes}>
      <h4 className={styles.titulo}>Siga nossas redes:</h4>
      <div className={styles.icones}>
        <a
          href="https://wa.me/seunumerowhatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className={styles.icone} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className={styles.icone} />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <FaTiktok className={styles.icone} />
        </a>
      </div>
    </div>
  );
};

export default FooterRede;
