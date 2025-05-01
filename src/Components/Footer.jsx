import React, { forwardRef } from "react";
import styles from "./Footer.module.css"; // Import styles
import phoneIcon from "../assets/phone.png";
import emailIcon from "../assets/email.png";
import locationIcon from "../assets/location.png";

const Footer = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={styles.footerContainer}>
      {/* Contact Section */}
      <div className={styles.contactSection}>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <img
              className={styles.footerImage}
              src={phoneIcon}
              alt="Phone Icon"
            />
            <h1 id={styles.phone}>8875949835</h1>
          </div>

          <div className={styles.contactItem}>
            <img
              className={styles.footerImage}
              src={emailIcon}
              alt="Email Icon"
            />
            <h1 id={styles.email}>gowithspark@gmail.com</h1>
          </div>

          <div className={styles.contactItem}>
            <img
              className={styles.footerImage}
              src={locationIcon}
              alt="Location Icon"
            />
            <h1 id={styles.address}>
              Bahubali colony road, Near vithal service center, Banswara (Raj.)
              327001
            </h1>
          </div>
        </div>

        {/* Contact Form */}
        <div className={styles.contactForm}>
          <form>
            <h3>Contact Us</h3>
            <input type="text" placeholder="First Name *" required />
            <input type="text" placeholder="Last Name *" required />
            <input type="tel" placeholder="Mobile No *" required />
            <input type="email" placeholder="Email ID *" required />
            <textarea placeholder="Message"></textarea>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
});

export default Footer;
