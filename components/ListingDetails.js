import db from "../config/firebase";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { useState, useEffect } from "react";

import Link from "next/link";

const ListingDetails = (props) => {
  //Time
  const [time, setTime] = useState("");

  useEffect(() => {
    const dayjs = require("dayjs");
    var timestamp = i.timestamp.seconds;
    let now = dayjs(timestamp * 1000);

    console.log(now.format("dddd D HH:mm"));

    setTime(now.format("dddd D HH:mm"));
  }, []);

  const { i } = props;

  return (
    <div>
      <div>
        {i.posted === true ? (
          <div
            key={i.title}
            style={{
              paddingLeft: "2rem",
              paddingRight: "2rem",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              marginLeft: "2rem",
              marginRight: "2rem",
              marginBottom: "1rem",
              borderRadius: 8,
              backgroundColor: "rgb(255,240,0)",
            }}
          >

            <div
            style={{
             maxWidth:300,
             marginTop:12,
             // paddingLeft:12,
             paddingTop:2,
             paddingBottom:2,
             borderRadius:12,
             justifyContent:"center",
             alignItems:"center",
             // backgroundColor:"rgb(255,200,0)"
           }}
           >
            <p style={{ fontWeight: "300", fontSize: 12 }}>
            {time}
            </p>

            <p style={{ fontWeight: "700", fontSize: 12 }}>
            {i.city}
            </p>

             </div>


            <p style={{ fontWeight: "300", fontSize: 16 }}>
              {i.ambassadorName}
            </p>
            <p style={{ fontWeight: "700", fontSize: 24 }}>{i.title}</p>

            <p style={{ fontWeight: "300", fontSize: 16 }}>{i.description}</p>

            <a href={"mailto:" + i.ambassadorEmail} target="_blank">
              <button className={styles.contactButton} type="submit">
                <p
                  style={{
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: 16,
                  }}
                >
                  Contact {i.ambassadorName}
                </p>
              </button>
            </a>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default ListingDetails;
