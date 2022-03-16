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

const listings = () => {
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
    db.firestore()
      .collection("listings")
      .orderBy("timestamp", "desc")
      .onSnapshot((snap) => {
        const results = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setResults(results);

        console.log(results);
      });
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
        <div className={styles.listingsContainer}>
          <Header />

          {results.map((item, id) => (
            <div>
              <ListingDetails i={item} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default listings;
