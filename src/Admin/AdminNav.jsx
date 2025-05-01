import { useEffect, navbarRef } from "react";
import { Link } from "react-router-dom";
import styles from "./AdminNav.module.css";
import logo from "../assets/TRAVEL LOGO.png";

const AdminNav = () => {
  return (
    <>
      <nav className={styles.nav} ref={navbarRef}>
        <div className={styles.logo}>
          <img src={logo} alt="Spark Tours and Travels Logo" />
        </div>

        <div className={styles.heading}>
          <h1>Spark Tours and Travels</h1>
          <div className={styles.hash}>
            <p>#GoWithSpark</p>
          </div>
        </div>
        <div> </div>

        <div className={styles.navbar}>
          <ul>
            <li>
              <Link to="/admindashboard">User Management</Link>
            </li>
            <li>
              <Link to="/packagemanagement">Package Management</Link>
            </li>
            <li>
              <Link to="/adminpackages">Transactions</Link>
            </li>
            <li>
              <Link>Feedbacks</Link>
            </li>
            <li>
              {" "}
              <Link>Supports</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default AdminNav;
