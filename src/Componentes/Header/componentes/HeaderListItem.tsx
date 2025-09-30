import React from "react";
import styles from "../Header.module.css";

const Headerlistitem = ({
  children,
}: React.LiHTMLAttributes<HTMLLIElement>) => {
  return <li className={styles.menuitem}>{children}</li>;
};

export default Headerlistitem;
