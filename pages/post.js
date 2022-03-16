import db from "../config/firebase";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

//Import Components
import Header from "../components/Header";
import Footer from "../components/Footer";

import ListingDetails from "../components/ListingDetails";

import { useState, useEffect } from "react";

import Link from "next/link";

const post = () => {
  // Database results
  const [results, setResults] = useState([]);

  // Form
  const [loginForm, showLoginForm] = useState(false);
  const [email, setEmail] = useState("Email address");
  const [password, setPassword] = useState("Password");

  const [title, setTitle] = useState("I would like to help with...");

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleOnFocusTitle = () => {
    setTitle("");
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleOnFocusEmail = () => {
    setEmail("");
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleOnFocusPassword = () => {
    setPassword("");
  };

  const authUser = () => {
    db.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => console.log("Succesfully logged in!"))
      .catch((error) => console.log("Error when tried to login!"));

    //this.props.navigation.goBack(null);

    console.log("Logged In!");
  };

  useEffect(() => {}, []);

  return (
    <div className="container">
      <Head>
        <title>Point.</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        <meta
          name="description"
          content="Stand with Ukraine. Find accomodation as ukranian refugee in Europe."
        />
        <meta
          name="keywords"
          content="berlin, home, haus, place, refugee, ukraine"
        ></meta>

        {/* Open Graph */}
        <meta property="og:site_name" content="Point" key="ogsitename" />
        <meta property="og:title" content="Point" key="ogtitle" />
        <meta
          property="og:description"
          content="Stand with Ukraine. Find a place to stay in Europe."
          key="ogdesc"
        />
      </Head>

      <div>
        <Header />

        <div
          style={{
            flexDirection: "column",
            display: "flex",
            marginLeft: "2rem",
            marginRight: "2rem",
            marginBottom: "1rem",
          }}
        >
          <h1
            style={{
              color: "#fff",
              fontSize: 48,
              fontWeight: "800",
              letterSpacing: -1,
            }}
          >
            Share.
          </h1>

          {/* Login Form */}

          <div style={{ flex: 1 }}>
            <input
              value={title}
              onChange={onChangeTitle}
              onFocus={handleOnFocusTitle}
              maxLength={32}
              style={{
                width: "100%",
                height: 60,
                backgroundColor: "transparent",
                borderWidth: 0,
                borderBottomWidth: 1,
                borderBottomColor: "#fff",
                color: "#fff",
                fontSize: 16,
                outlineColor: "transparent",
                outlineStyle: "none",
              }}
            />
          </div>
        </div>

        <div
          style={{
            marginLeft: "2rem",
            marginBottom: "4rem",
          }}
        >
          <button
            className={styles.leftButton}
            type="submit"
            onClick={() => authUser()}
          >
            <p
              style={{
                fontWeight: "700",
                color: "rgb(0,0,255)",
                fontSize: 16,
              }}
            >
              Send
            </p>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default post;
