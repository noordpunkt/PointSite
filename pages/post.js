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

  //ID
  const [uniqueIDListings, setUniqueIDListings] = useState("");

  const random = Math.random().toString(36).slice(2);
  const uniqueId = random;

  const [name, setName] = useState("");
  const [title, setTitle] = useState("I would like to help with...");
  const [description, setDescription] = useState(
    "(e.g. Accomodation for 2 nights)"
  );
  const [phoneNumber, setPhoneNumber] = useState("+49");
  const [location, setLocation] = useState("Please type your current city");

  //Notifications
  const [notification, setNotification] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const [beds, setBeds] = useState(1);
  const [nights, setNights] = useState(1);


  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleOnFocusTitle = () => {
    setTitle("");
  };

  const onChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleOnFocusDescription = () => {
    setDescription("");
  };

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const handleOnFocusName = () => {
    setName("");
  };

  const onChangePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleOnFocusPhoneNumber = () => {
    setPhoneNumber("+49");
  };

  const onChangeLocation = (event) => {
    setLocation(event.target.value);
  };

  const handleOnFocusLocation = () => {
    setLocation("");
  };


  const onChangeBeds = (event) => {
    setBeds(event.target.value);
  };

  const handleOnFocusBeds = () => {
    setBeds("");
  };


  const onChangeNights = (event) => {
    setNights(event.target.value);
  };

  const handleOnFocusNights = () => {
    setNights("");
  };



  const addInfo = () => {
    // db.firestore()
    // .collection("listings")
    // .where("listingID", "==", uniqueIDListings)
    //     .get()
    //     .then(function (querySnapshot) {
    //       querySnapshot.forEach(function (doc) {
    //         console.log(doc.data());

    //         const AllData = doc.data();

    //         // database.collection("listings").doc(doc.id).update({
    //         //   title: title,
    //         //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //         // });

    //       });
    //     })

    //     .catch(function (error) {
    //       console.log("Error getting documents: ", error);
    //     });

    setShowNotification(true);
    setNotification("🎉 " + "Thanks to upload your place!");

    setTimeout(() => {
      setShowNotification("");
    }, 6000);

    if (name === "") {

      setShowNotification(true);
      setNotification("Please provide your name");
  
      setTimeout(() => {
        setShowNotification("");
      }, 6000);

    } else if (title === "" || title === "I would like to help with...") {


      setShowNotification(true);
      setNotification("Please provide a title to your offer");
  
      setTimeout(() => {
        setShowNotification("");
      }, 6000);

    } else if (location === "") {


      setShowNotification(true);
      setNotification("Please provide your city");
  
      setTimeout(() => {
        setShowNotification("");
      }, 6000);



    } else {

    db.firestore().collection("listings").add({
      type: "web",
      title: title,
      beds: Number(beds),
      nights: Number(nights),
      city:"Berlin, Germany",
      location: location,
      description: description,
      timestamp: db.firestore.FieldValue.serverTimestamp(),
      phoneNumber: phoneNumber,
      ambassadorName: name,
      ambassadorEmail: "N/A",
      imageCover:"https://firebasestorage.googleapis.com/v0/b/uuni-34365.appspot.com/o/places%2FBerlin51.jpg?alt=media&token=56cc7871-38ef-43f1-b1b6-1750254a0422",
      collectorEmail: "",
      listingID: uniqueId,
      category: "",
      posted: true,
    });

    console.log("Logged In!");
  };

}

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

    //Get and keep an uniqueID
    setUniqueIDListings(uniqueId);
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
            <p style={{ color: "#fff", fontSize: 14 }}>Name:</p>

            <input
              value={name}
              onChange={onChangeName}
              onFocus={handleOnFocusName}
              maxLength={140}
              style={{
                width: "100%",
                height: 60,
                backgroundColor: "transparent",
                borderWidth: 0,
                borderBottomWidth: 1,
                borderBottomColor: "#fff",
                color: "rgba(255,255,255, 0.5)",
                fontSize: 20,
                outlineColor: "transparent",
                outlineStyle: "none",
              }}
            />
          </div>

          <div style={{ flex: 1 }}>
            <p style={{ color: "#fff", fontSize: 14 }}>Title:</p>

            <input
              value={title}
              onChange={onChangeTitle}
              onFocus={handleOnFocusTitle}
              maxLength={140}
              style={{
                width: "100%",
                height: 60,
                backgroundColor: "transparent",
                borderWidth: 0,
                borderBottomWidth: 1,
                borderBottomColor: "#fff",
                color: "rgba(255,255,255, 0.5)",
                fontSize: 20,
                outlineColor: "transparent",
                outlineStyle: "none",
              }}
            />
          </div>

          <div style={{ flex: 1 }}>
            <p style={{ color: "#fff", fontSize: 14 }}>Description:</p>

            <input
              value={description}
              onChange={onChangeDescription}
              //onFocus={handleOnFocusDescription}
              maxLength={140}
              style={{
                width: "100%",
                height: 60,
                backgroundColor: "transparent",
                borderWidth: 0,
                borderBottomWidth: 1,
                borderBottomColor: "#fff",
                color: "rgba(255,255,255, 0.5)",
                fontSize: 20,
                outlineColor: "transparent",
                outlineStyle: "none",
              }}
            />
          </div>

          <div style={{ flex: 1 }}>
            <p style={{ color: "#fff", fontSize: 14 }}>Phone:</p>

            <input
              value={phoneNumber}
              onChange={onChangePhoneNumber}
              onFocus={handleOnFocusPhoneNumber}
              maxLength={140}
              style={{
                width: "100%",
                height: 60,
                backgroundColor: "transparent",
                borderWidth: 0,
                borderBottomWidth: 1,
                borderBottomColor: "#fff",
                color: "rgba(255,255,255, 0.5)",
                fontSize: 20,
                outlineColor: "transparent",
                outlineStyle: "none",
              }}
            />
          </div>

          <div style={{ flex: 1 }}>
            <p style={{ color: "#fff", fontSize: 14 }}>City:</p>

            <input
              value={location}
              onChange={onChangeLocation}
              onFocus={handleOnFocusLocation}
              maxLength={140}
              style={{
                width: "100%",
                height: 60,
                backgroundColor: "transparent",
                borderWidth: 0,
                borderBottomWidth: 1,
                borderBottomColor: "#fff",
                color: "rgba(255,255,255, 0.5)",
                fontSize: 20,
                outlineColor: "transparent",
                outlineStyle: "none",
              }}
            />

          </div>


          <div style={{ flex: 1, display:"flex", flexDirection:"row" }}>



          <div style={{ 
            flex: 1, 
            flexDirection:"row", 
            marginRight:12,
            
          }}>


            <p style={{ color: "#fff", fontSize: 14 }}>Beds:</p>

            <input
              value={beds}
              onChange={onChangeBeds}
              onFocus={handleOnFocusBeds}
              maxLength={140}
              style={{
                width: "100%",
                height: 60,
                backgroundColor: "transparent",
                borderWidth: 0,
                borderBottomWidth: 1,
                borderBottomColor: "#fff",
                color: "rgba(255,255,255, 0.5)",
                fontSize: 20,
                outlineColor: "transparent",
                outlineStyle: "none",
              }}
            />


            </div>




            <div style={{ flex: 1, flexDirection:"row" }}>


            <p style={{ color: "#fff", fontSize: 14 }}>Nights:</p>

            <input
              value={nights}
              onChange={onChangeNights}
              onFocus={handleOnFocusNights}
              maxLength={140}
              style={{
                width: "100%",
                height: 60,
                backgroundColor: "transparent",
                borderWidth: 0,
                borderBottomWidth: 1,
                borderBottomColor: "#fff",
                color: "rgba(255,255,255, 0.5)",
                fontSize: 20,
                outlineColor: "transparent",
                outlineStyle: "none",
              }}
            />


            </div>


            <div style={{ 
            flex: 1, 
            flexDirection:"row", 
            marginRight:12,
     
          }}></div>




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
            onClick={() => addInfo()}
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

        {showNotification === true && (
          <div className={styles.StickyNotification}>
            <p
              style={{
                color: "#121212",
                fontWeight: "700",
              }}
            >
              {notification}
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default post;
