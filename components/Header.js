import React, { useEffect } from "react";

import styles from "../styles/Home.module.css";

import Link from "next/link";

const Header = () => {
  useEffect(() => {}, []);

  return (
    <div className={styles.Header}>
      <Link href="/">
        <a className={styles.logo}>Point.</a>
      </Link>
    </div>
  );
};

export default Header;
