import styles from "./Footer.module.css";

const FooterSobre = () => {
  return (
    <div className={styles.institucional}>
      <h4 className={styles.titulo}>Institucional</h4>
      <span>Sobre nós</span>
      <span>Para empresas</span>
      <span>Club fidelidade</span>
    </div>
  );
};

export default FooterSobre;
