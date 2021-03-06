import db from "../config/firebase";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { useState, useEffect } from "react";

import Link from "next/link";

const List = () => {
  // Database results
  const [results, setResults] = useState([]);

  // Form
  const [loginForm, showLoginForm] = useState(false);
  const [email, setEmail] = useState("Email address");
  const [password, setPassword] = useState("Password");

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

  const fetchListings = () => {
   
  };

  useEffect(() => {
    //signInAnonymously
    db.auth()
      .signInAnonymously()
      .then(() => {
        console.log("Signed In!!!!");

        console.log(user);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });

    //Login

    // db.auth().onAuthStateChanged((user) => {
    //   if (user === null) {
    //     showLoginForm(true);
    //     console.log(user);

    //     console.log("Login");
    //   } else {
    //     console.log("Logged In");
    //   }
    // });

    //Fetch the listings
    fetchListings();
  }, []);

  return (
    <div>
      <Head>
        <title>Point App</title>
        <meta name="description" content="The Sharing App." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.centered}>
        <Link href="/listings">
          <button className={styles.centeredButton} type="submit">
            <p
              style={{
                fontWeight: "700",
                color: "rgb(255,240,0)",
                fontSize: 16,
              }}
            >
              Find a Place To Stay
            </p>
          </button>
        </Link>

        <Link href="/post">
        <button className={styles.centeredButton2} type="submit">
          <p
            style={{
              fontWeight: "700",
              color: "rgb(50,0,255)",
              fontSize: 16,
            }}
          >
            Share your place
          </p>
        </button>
        </Link>


      </div>
    </div>
  );
};

export default List;
