import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import styles from "../Pages/Home.module.css";

// Import images properly
import manaliImage from "../assets/Manali.jpg";
import goaImage from "../assets/Goa.jpg";
import kashmirImage from "../assets/Kashmir.jpg";
import airplaneIcon from "../assets/airplane.png";
import hourglassIcon from "../assets/hourglass.png";
import supportIcon from "../assets/24-hours-support.png";
import paymentIcon from "../assets/cash-on-delivery.png";
import whatsappIcon from "../assets/wtsp.png";
import lehLadakh from "../assets/Leh_Ladakh.png"; // Replace with actual image path
import kedarnath from "../assets/kedarnath.png";
import jaipur from "../assets/Jaipur.png";
import mathura from "../assets/Mathura.png";
import kerala from "../assets/kerala.png";
import dubai from "../assets/Dubai.png";

export default function Home() {
  const footerRef = useRef(null); // Reference for the Footer

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(`.${styles.homeLine}`, {
        opacity: 0,
        y: -50,
        scale: 0.9,
        rotateX: 90,
        transformOrigin: "top center",
        duration: 2,
        ease: "power4.out",
        stagger: 0.2,
      });

      gsap.from(`.${styles.uniqueLine}`, { opacity: 0, x: -50, duration: 1 });
      gsap.from(`.${styles.bucketAdv}`, { opacity: 0, x: 50, duration: 1 });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar scrollToFooter={scrollToFooter} />

      <div className={styles["home-container"]}>
        <section className={styles.backgroundSection}>
          {/* Headings */}
          <div className={styles.homeLine}>
            <h3>
              Pack Your Bags, <br />
              We'll Handle the Rest!
            </h3>
          </div>

          <h3 className={styles.uniqueLine}>
            Every Journey is unique — Just like you.
            <br />
            Discover Customized Travel Plans that fit your Style,
            <br />
            Budget, and Advantage Goals!
          </h3>

          {/* Bucket List Adventures */}
          <div className={styles.bucketAdvContainer}>
            <p className={styles.bucketAdv}>BucketList Adventures</p>
          </div>

          {/* Bucket Section */}
          <div className={styles.bucket}>
            <div className={styles.bucketImage}>
              <div className={styles.destination}>
                <img id={styles.manalii} src={manaliImage} alt="Manali" />
                <Link to="/admindashboard">
                  <button className={styles.manali}>Manali</button>
                </Link>
              </div>
              <div className={styles.destination}>
                <img id={styles.goaa} src={goaImage} alt="Goa" />
                <Link to="/goa">
                  {" "}
                  <button className={styles.goa}>Goa</button>{" "}
                </Link>
              </div>
              <div className={styles.destination}>
                <img id={styles.kashmirr} src={kashmirImage} alt="Kashmir" />
                <Link to="/kashmir">
                  <button className={styles.kashmir}>Kashmir</button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* </div> */}

        {/* Crafted for you */}
        <div className={styles.featuresContainer}>
          <h2 className={styles.mainHeading}>Travel Different, Live More</h2>
          <p className={styles.description}>
            Ditch the usual, embrace the extraordinary! Travel in a way that
            thrills your soul and fills your life with unforgettable moments.
          </p>

          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <img src={airplaneIcon} alt="Airplane Icon" />
              <h3>Travel your way</h3>
              <p>We customize, you explore!</p>
            </div>

            <div className={styles.featureItem}>
              <img src={hourglassIcon} alt="Instant Booking" />
              <h3>Instant Booking</h3>
              <p>One click, and you're set!</p>
            </div>

            <div className={styles.featureItem}>
              <img src={supportIcon} alt="24/7 Support" />
              <h3>24/7 Support</h3>
              <p>We're here anytime, anywhere.</p>
            </div>

            <div className={styles.featureItem}>
              <img src={paymentIcon} alt="Flexible Payment" />
              <h3>Flexible Payment</h3>
              <p>Pay less now, enjoy more later.</p>
            </div>

            <div className={styles.featureItem} id={styles.wtsap}>
              <img src={whatsappIcon} alt="WhatsApp Alerts" />
              <h3>WhatsApp Alerts</h3>
              <p>Get travel updates instantly.</p>
            </div>
          </div>

          <h2 className={styles.subHeading}>
            Why Just Travel When You Can Travelora?
          </h2>

          <p className={styles.description}>
            We make travel easy, exciting, and personalized! From{" "}
            <b>instant bookings</b> to <b>flexible payments</b>
            and <b>24/7 support</b>, we ensure a smooth journey. Discover hidden
            gems, luxury escapes, and unbeatable deals—travel smarter, explore
            deeper, and create unforgettable memories with
            <b> Travelora!</b>
          </p>
        </div>
        {/* Third Part */}
        <div className={styles.ThirdContainer}>
          {/* Customer Reviews Section */}
          <h2 className={styles.title}>What Makes Us the Traveler’s Choice!</h2>
          <div className={styles.reviews}>
            <div className={styles.reviewCard}>
              <img
                className={styles.customerImage}
                src="./src/assets/customer1.jpg"
              ></img>
              <p>
                {" "}
                💬 "The whole trip was a breeze! Booking was super easy..."
              </p>
            </div>
            <div className={styles.reviewCard}>
              <img
                className={styles.customerImage}
                src="./src/assets/customer2.jpg"
              ></img>
              <p>💬 "From booking to check-out, everything was smooth..."</p>
            </div>
            <div className={styles.reviewCard}>
              <img
                className={styles.customerImage}
                src="./src/assets/customer3.jpg"
              ></img>
              <p>
                💬 "I always wanted to visit this place, but planning felt
                overwhelming..."
              </p>
            </div>
            <div className={styles.reviewCard}>
              <img
                className={styles.customerImage}
                src="./src/assets/customer4.jpg"
              ></img>
              <p>
                💬 "The process was so easy, and I got to explore new places..."
              </p>
            </div>
          </div>

          {/* Destination Grid */}
          <div className={styles.destinationGrid}>
            <div className={styles.destinationCard}>
              <img src={lehLadakh} alt="Leh Ladakh" />
            </div>
            <div className={styles.destinationCard}>
              <img src={kedarnath} alt="Kedarnath" />
            </div>
            <div className={styles.destinationCard}>
              <img src={jaipur} alt="Jaipur" />
            </div>
            <div className={styles.destinationCard}>
              <img src={mathura} alt="Mathura" />
            </div>
            <div className={styles.destinationCard}>
              <img src={kerala} alt="Kerala" />
            </div>
            <div className={styles.destinationCard}>
              <img src={dubai} alt="Dubai" />
            </div>
          </div>
        </div>
        <Footer ref={footerRef} />
      </div>
    </>
  );
}
