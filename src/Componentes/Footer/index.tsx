import styles from "./Footer.module.css";
import FooterDesenvolvimento from "./FooterDesenvolvimento";
import FooterInfo from "./FooterInfo";
import Footerlogo from "./FooterLogo";
import FooterRede from "./FooterRede";
import FooterSobre from "./FooterSobre";

const Footer = () => {
  return (
    <>
      <footer className={styles.rodape}>
        <div className={styles.rodape_informacoes}>
          <Footerlogo />
          <FooterInfo />
          <FooterSobre />
          <FooterRede />
        </div>
      </footer>
      <FooterDesenvolvimento />
    </>
  );
};

export default Footer;
