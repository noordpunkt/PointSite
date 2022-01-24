import Head from "next/head";
import styles from "../styles/Home.module.css";

import Image from "next/image";

//Import Components
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Point France</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        <meta
          name="description"
          content="Retrouvez tous vos restaurants préférés d'emporter."
        />
        <meta
          name="keywords"
          content="emporter, restaurants, resto, paris, france, nice, lille"
        ></meta>

        {/* Open Graph */}
        <meta property="og:site_name" content="Punkt" key="ogsitename" />
        <meta property="og:title" content="Punkt" key="ogtitle" />
        <meta
          property="og:description"
          content="Retrouvez tous vos restaurants préférés d'emporter."
          key="ogdesc"
        />
      </Head>

      <main>
        <Header />

        <div className={styles.hero}>
          <div className={styles.heroLeft}>
            <h1 className={styles.heroTextH1}>
              {/* Retrouvez tous vos restaurants préférés. */}
              La première App de livraison équitable.
            </h1>

            {/* <p className={styles.textSubtitle}>Disponible dans</p> */}

            <a
              href="https://apps.apple.com/us/app/point-restaurants/id1583401051"
              target="_blank"
            >
              <Image
                src="/appStoreBadge.svg"
                alt="Download Point France"
                width={160}
                height={49}
              />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.nord.point"
              target="_blank"
            >
              <Image
                src="/googlePlayBadge.svg"
                alt="Download Point France"
                width={160}
                height={49}
              />
            </a>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.imageContainer}>
              <Image
                src="/point-image.svg"
                alt="Point France"
                width={800}
                height={800}
                layout="responsive"
              />
            </div>
          </div>
        </div>

        {/* <div className={styles.Cards}>
          <div className={styles.cardContainer}>
            <Image
              src="/image1.svg"
              alt="Point France"
              width={180}
              height={180}
            />

            <div className={styles.cardContainerText}>
              <p className={styles.textSubtitle}>Retrouvez vos restaurants.</p>
            </div>
          </div>

          <div className={styles.cardContainer}>
            <Image
              src="/image2.svg"
              alt="Point France"
              width={180}
              height={180}
            />

            <div className={styles.cardContainerText}>
              <p className={styles.textSubtitle}>Restos de quartier</p>
            </div>
          </div>

          <div className={styles.cardContainer}>
            <Image
              src="/image3.svg"
              alt="Point France"
              width={180}
              height={180}
            />

            <div className={styles.cardContainerText}>
              <p className={styles.textSubtitle}>Pour tous les goûts</p>
            </div>
          </div>
        </div> */}

        <div className={styles.gridFlex}>
          <div className={styles.heroLeftTwo}>
            <div className={styles.imageContainerLeft}>
              <Image
                src="/iPhone.svg"
                alt="Point France"
                width={800}
                height={800}
                layout="responsive"
              />
            </div>
          </div>

          <div className={styles.heroRightTwo}>
            <h1 className={styles.heroTextH1Dark}>
            Liberté, égalité, Restauranter.<br></br>
            </h1>

            <p className={styles.subtitleDark}>
              Notre mission est de construire une{" "}
              <span className={styles.strong}>app de livraison équitable </span>
              pour permettre aux restaurateurs de livrer leurs clients sans
              payer de commissions exorbitantes.
            </p>

            <p className={styles.subtitleDark}>
              Plateforme de gestion des commandes en ligne via{" "}
              <span className={styles.strong}>App.</span>
              <br></br>
              Paiement en ligne.<br></br>
              Gestion des menus et des prix.<br></br>
            </p>
          </div>
        </div>
      </main>

      <div className={styles.Bottom}>
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
