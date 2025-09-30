import React from "react";
import styles from "../Header.module.css";

const Headerlist = ({ children }: React.HTMLAttributes<HTMLUListElement>) => {
  return <ul className={styles.cabecalho}>{children}</ul>;
};

export default Headerlist;
