import React, { useEffect } from "react";

import styles from "../styles/Home.module.css";

const Header = () => {
  useEffect(() => {}, []);

  return (
    <div className={styles.Header}>
      <div className={styles.logo}>Point France.</div>
    </div>
  );
};

export default Header;
