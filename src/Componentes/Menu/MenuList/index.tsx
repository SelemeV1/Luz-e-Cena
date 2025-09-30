import React from "react";
import styles from "./MenuList.module.css";

const MenuList = ({ children }: React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <nav>
      <div className={styles.navegacao}>{children}</div>
    </nav>
  );
};

export default MenuList;
