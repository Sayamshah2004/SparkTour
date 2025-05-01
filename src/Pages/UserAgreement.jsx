import React from "react";
import styles from "./UserAgreement.module.css";


const UserAgreement = () => {
  return (
    <div className={styles.privacyContainer}>
      <h1 className={styles.privacyTitle}>User Agreement</h1>

      <section className={styles.privacySection}>
        <h2>Introduction</h2>
        <p>
         By using <b>Spark Tour & Travels</b>,you agree to these terms . If you disagree,Please do not use our services
        </p>
      </section>

      <section className={styles.privacySection}>
        <h2>User Responsibilities</h2>
        <ul>
          <li>Provide accurate details while booking.</li>
          <li> Use the Website lawfully and respectfully.</li>
          <li>Do not share your account credentials</li>
        </ul>
      </section>

      <section className={styles.privacySection}>
        <h2>Booking & Payments</h2>
        <p>
         A <b>50% deposit</b> confirms your booking;the rest is due at checkout.<br/>
         All transactions are securely processed.
        </p>
      </section>

      <section className={styles.privacySection}>
        <h2>Cancellations & Refunds</h2>
        <p>
          Cancellation policies vary per package.<br/>
          Refunds are processed based on the terms at the time of booking.
        </p>
      </section>

      <section className={styles.privacySection}>
        <h2>Limitation of Liability</h2>
        <ul>
          <li>We strive for accurate information,but we are not liable for unforeseen travel disruptions.</li>
        </ul>
      </section>

      <section className={styles.privacySection}>
        <h2>Termination</h2>
        <p>We reserve the right to suspend or terminate accounts that violate our terms.</p>
      </section>

      <section className={styles.privacySection}>
        <h2>Changes to Agreement</h2>
        <p>
          We may update this agreement.Continued use of our website means you accept these changes.
        </p>
      </section>
      <section className={styles.privacySection}>
        <h2>Contact Us</h2>
        <p>For concerns,email us at gowithspark@gmail.com
        </p>
      </section>
    </div>
  );
};

export default UserAgreement;
