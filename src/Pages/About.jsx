import React from "react";
import Navbar from "../Components/Navbar";
import styles from "./About.module.css"; // Import CSS

const About = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.aboutContainer}>
        <h1 className={styles.title}>Who We Are?</h1>

        <div className={styles.section}>
          <p className={styles.subHeading}>Your Travel, Your Way!</p>
          <img
            id={styles.firstImage}
            src="src/assets/who_we_are.png"
            alt="Travel"
            className={styles.aboutImage}
          />
          <p id={styles.whoarewe}>
            We’re more than just a travel service—we’re your travel family! We
            believe every journey should be filled with joy, discovery, and
            unforgettable memories. That’s why we make travel easy, exciting,
            and stress-free, so you can focus on what truly matters—exploring
            the world your way!
            <br />
            <br />
            From hidden gems to iconic destination , from solo adventures to
            family getways , we're here to turn your dream trips into reality
            with seamless bookings,24/7 support and personalized
            experiences,we're always by your side –— because your adventure is
            our passion!
            <br />
            <br />
            Let's make magic happen ——where's your next stop?
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.title}>Our Mission</h2>
          <img
            id={styles.secondImage}
            src="src/assets/our_mission.png"
            alt="Travel"
            className={styles.aboutImage}
          />
          <p id={styles.ourmission}>
            Our mission is to make every journey seamless, stress-free, and
            truly unforgettable by offering hassle-free bookings, handpicked
            experiences, flexible payment options, and 24/7 support.
            <br />
            <br />
            We go beyond just travel planning——we create experiences that bring
            people closer to new cultures,breathtaking landscapes and
            unforgettable moments.Whether it's a solo escape,a family
            vacation,or an adrenaline-packed adventures,we ensure every traveler
            finds their perfect trip,tailored just for them.
            <br />
            <br />
            By making travel more accessible,enjoyable,and worry-free,we help
            people explore more,experience more,and live more.Becauseto us,
            travel isn't just about destinations ——it's about the connections we
            make, the memories we create, and the joy we share.
            <br />
            <br />
            Let's redefine the way the world travels——one unforgettable trip at
            a time!
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.title}>Our Promise to You</h2>
          <img
            id={styles.thirdImage}
            src="src/assets/our_promise.png"
            alt="Travel"
            className={styles.aboutImage}
          />
          <ul className={styles.promiseList}>
            <p id={styles.ourpromise}>
              We promise to make every journey as effortless,exciting , and
              unforgettable as possible.From the moment you start dreaming about
              your trip to moment you return home with a heart full of
              memories,we're with you every step of the way
              <br />
              <br />
              <li>
                Seamless Planning – No stress, just smooth and easy bookings.
              </li>
              <li>
                Handpicked Experiences – Only the best stays, destinations, and
                adventures.
              </li>
              <li>24/7 Support – Because you should never feel lost.</li>
              <li>Flexible & Affordable – Travel your way, at your pace.</li>
              <br />
              <br />
              <p id={styles.lastLinePromise}>
                Above all,we promise to treat your adventures like our
                own,ensuring that every trip is filled with joy,discovery,and
                unforgettable moments,Because at the end of the day,it's not
                just about travel——It's about YOU.
              </p>
            </p>
          </ul>
        </div>

        <div className={styles.founderSection}>
          <img
            src="src/assets/founder.jpg"
            alt="Founder"
            className={styles.founderImage}
          />
          <div>
            <h3 className={styles.founderName}>Founder</h3>
            <p className={styles.founderText}>Somya Shah</p>
          </div>
        </div>
        <p className={styles.tagline}>
          Pack Your Bags, Follow Your Dreams—We’ll Handle The Rest!
        </p>
        <img
          src="src/assets/ABOUT2.png"
          alt="png"
          className={styles.lastImage}
        />
      </div>
    </>
  );
};

export default About;
