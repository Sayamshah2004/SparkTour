import React from "react";
import styles from "./TermsCondition.module.css";

const Terms = () => {
  return (
    <div className={styles.privacyContainer}>
      <h1 className={styles.privacyTitle}>Terms & Conditions</h1>

      <section className={styles.privacySection}>
        <h2>Acceptance of Terms</h2>
        <p>
          By accessing <b>Spark Tour & Travels</b>,you agree to comply with
          these terms.
        </p>
      </section>

      <section className={styles.privacySection}>
        <h2>Use of Services</h2>
        <ul>
          <li>Our Website is for personal and lawful use only.</li>
          <li>You agree not to misuse or manipulate data.</li>
        </ul>
      </section>

      <section className={styles.privacySection}>
        <h2>Booking Policy</h2>
        <p>
          Prices are subject to change without notice.
          <br />
          Availability of package may vary.
        </p>
      </section>

      <section className={styles.privacySection}>
        <h2>Payment % Securrity</h2>
        <p>
          Secure payment gateways are used for transactions.
          <br />
          We do not store your financial details.
        </p>
      </section>

      <section className={styles.privacySection}>
        <h2>Liability & Travel Risks</h2>
        <ul>
          <li>
            We are not responsible for unforeseen circumstances affecting your
            trip(eg.,Weather,Political issues).
          </li>
          <li>Customers should ensure they have valid travel documents.</li>
        </ul>
      </section>

      <section className={styles.privacySection}>
        <h2>Changes & Termination</h2>
        <ul>
          <li>
            We may modify services or terminate accounts violating our policies.
          </li>
          <li>Your Continued use signifies acceptance of changes</li>
        </ul>
      </section>

      <section className={styles.privacySection}>
        <h2>Governing Law</h2>
        <p>These terms are governed by Indian Laws.</p>
      </section>
      <section className={styles.privacySection}>
        <h2>Contact Us</h2>
        <p>For assistance, react out at gowithspark@gmail.com</p>
      </section>
    </div>
  );
};

export default Terms;
