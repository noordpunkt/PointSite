import React, { useEffect } from "react";

import styles from "../styles/Home.module.css";
import Image from "next/image";

import Link from "next/link";

const Footer = () => {
  useEffect(() => {}, []);

  return (
    <div className={styles.BottomFooter}>
      <div className={styles.FooterImage}>
        <Image src="/logo.svg" alt="Point" width={60} height={60} />
      </div>

      <div className={styles.FooterLeft}>
        <Image src="/EU.svg" alt="Point" width={60} height={60} />

        <div
          style={{
            marginTop: 12,
          }}
        >
          <Link href="/privacy">
            <a
              style={{
                fontSize: 14,
                color: "#fff",
              }}
            >
              Privacy Policy
            </a>
          </Link>

          {/* <p className={styles.textLight}>
            Registered in the European Union.
            <br></br><br></br>
            Enregistré dans l'Union européenne.
            <br></br><br></br>
            Registriert in der Europäischen Union.
            </p> */}
        </div>
      </div>

      <div className={styles.FooterRight}>
        <p className={styles.textLight}>
          NORD MADE: taxpayer in the Commercial Register Unified Registration
          Number 40203246784. Republic of Latvia, European Union.
          <br></br>
          <br></br>
          Ziedoņa iela 7, Jelgava, LV-3002. European Union.
          <br></br>
          Kemperplatz 1 Mitte D, 10785 Berlin, Germany.
        </p>
      </div>
    </div>
  );
};

export default Footer;
