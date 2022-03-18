import { useState, useEffect } from "react";

import Head from "next/head";
import styles from "../styles/Home.module.css";

import Image from "next/image";

//Import Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import List from "../components/List";

import Link from "next/link";

export default function Home() {

   //Detect time
   const [showCookies, setShowCookies] = useState(true);
 
   useEffect(() => {
    
   }, []);
 
   const closeCookies = () => {
     setShowCookies(false);
   };


  return (
    <div className="container">
      <Head>
        <title>Point.</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        <meta
          name="description"
          content="Host people fleeing Ukraine. Refugees: Find places to stay in Europe."
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

      <div className={styles.mainContainer}>
        <Header />

        <div className={styles.hero}>
          <div className={styles.heroLeft}>
            <h1 className={styles.heroTextH1}>
              Point is here to help Ukraine. Please download the app and post
              your place to stay. Or find hosts opening their homes. Simple as
              a tap.
            </h1>

            {/* <p className={styles.textSubtitle}>Disponible dans</p> */}

            <a
              href="https://apps.apple.com/lv/app/zeropunkt/id1574704398"
              target="_blank"
            >
              <Image
                src="/appStoreBadge.svg"
                alt="Download Point"
                width={160}
                height={49}
              />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.nord.zeropunkt"
              target="_blank"
            >
              <Image
                src="/googlePlayBadge.svg"
                alt="Download Point"
                width={160}
                height={49}
              />
            </a>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.imageContainer}>

              {/* <div className={styles.imageContainerTop}></div>
              <div className={styles.imageContainerBottom}></div> */}

              <Image
                src="/point-image.svg"
                alt="Point"
                width={200}
                height={200}
                layout="responsive"
              />


            </div>
          </div>
        </div>


        {showCookies === true ? (
          <div className={styles.StickyBottom}>
            <div className={styles.BannerTop}>
              <p className={styles.TitleSmall}>We have cookies.</p>
            </div>

            <div className={styles.BannerCenter}>
              <p style={{
                color:"#121212",
                fontSize:14
              }}>
                We care about your data, and we'd love to use cookies to make your experience better.
                This website use them to provide users with content that is
                high quality, secure and relevant to their needs and interests.
              </p>
            </div>

            <div className={styles.BannerBottom}>
              <div className={styles.ButtonCookies}>
                <button
                  className={styles.buttonStyles}
                  type="submit"
                  onClick={() => closeCookies()}
                >
                  <p className={styles.TextWhiteCenteredSmall}>Accept</p>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}



        <List />

        <Footer />
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
        }

        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
        }

        .card {
          margin: 2rem;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
