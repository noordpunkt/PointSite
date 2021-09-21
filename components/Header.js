import React, { useEffect } from "react";

import styles from "../styles/Home.module.css";

const Header = () => {
  useEffect(() => {}, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.Logo}>Point.</h1>
    </div>
  );
};

export default Header;
