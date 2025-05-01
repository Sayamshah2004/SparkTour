import React from "react";
import styles from "./PrivacyPolicy.module.css";


const PrivacyPolicy = () => {
  return (
    <div className={styles.privacyContainer}>
      <h1 className={styles.privacyTitle}>Privacy Policy</h1>

      <section className={styles.privacySection}>
        <h2>Introduction</h2>
        <p>
          Welcome! Your privacy is important to us. This policy explains how we
          collect, use, and protect your personal data. By using our website,
          you agree to these terms.
        </p>
      </section>

      <section className={styles.privacySection}>
        <h2>Data We Collect</h2>
        <ul>
          <li>We collect personal details to enhance your travel experience.</li>
          <li><strong>Personal Info:</strong> Name, email, contact details.</li>
          <li><strong>Travel Preferences:</strong> Destinations, dates, accommodations.</li>
          <li><strong>Payment Data:</strong> Credit card details for bookings.</li>
          <li><strong>Usage Data:</strong> Browsing history, clicks, searches.</li>
          <li><strong>Device Info:</strong> IP address, browser, operating system.</li>
        </ul>
      </section>

      <section className={styles.privacySection}>
        <h2>Cookies</h2>
        <p>
          We use cookies to improve your experience. You can manage cookie
          settings in your browser, though disabling them may affect website
          functionality.
        </p>
      </section>

      <section className={styles.privacySection}>
        <h2>Data Retention & Deletion</h2>
        <p>
          We keep your data only as long as needed. You can request deletion,
          subject to legal obligations.
        </p>
      </section>

      <section className={styles.privacySection}>
        <h2>Your Rights</h2>
        <ul>
          <li>You have the right to :</li>
          <li>Access, update, or delete your data.</li>
          <li>Object to data processing.</li>
          <li>Request data in a structured format.</li>
        </ul>
      </section>

      <section className={styles.privacySection}>
        <h2>Updates</h2>
        <p>We may update this policy periodically. Please review it regularly.</p>
      </section>

      <section className={styles.privacySection}>
        <h2>Complaints</h2>
        <p>
          For concerns, contact us. If unresolved, you may approach your local
          data protection authority.
        </p>
      </section>

   <div className={styles.contactSection}>
        <div className={styles.contactItem}>
          <img className={styles.footerImage} src="./src/assets/phone.png" alt="Phone Icon" />
          <p id={styles.phone}>8875949835</p>
        </div>
  
        <div className={styles.contactItem}>
          <img className={styles.footerImage} src="./src/assets/email.png" alt="Email Icon" />
          <p id={styles.email}>gowithspark@gmail.com</p>
        </div>
  
        <div className={styles.contactItem}>
          <img className={styles.footerImage} src="./src/assets/location.png" alt="Location Icon" />
          <p id={styles.address}>Bahubali colony road, Near vithal service center, Banswara (Raj.) 327001 </p>
         
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
