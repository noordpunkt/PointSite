import React, { useEffect } from "react";

import styles from "../styles/Home.module.css";
import Image from "next/image";

const Footer = () => {
  useEffect(() => {}, []);

  return (
    <div className={styles.CardsFooter}>
      <div className={styles.cardContainer}>
        <Image src="/logo.svg" alt="Point France" width={200} height={200} />
      </div>

      <div className={styles.footerContainer}>
        <h2 className={styles.textLightH2}>Point France</h2>
        <p className={styles.textLight}>Retrouvez tous vos restaurants préférés d'emporter.</p>
      </div>

      <div className={styles.footerContainer}>
        <h2 className={styles.textLightH2}>Restaurant Partner</h2>
        <p className={styles.textLight}>
        <a href="mailto:e@punkt.app">Email nous</a>
        </p>
      </div>

    </div>
  );
};

export default Footer;
