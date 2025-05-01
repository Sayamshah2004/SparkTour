import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../assets/TRAVEL LOGO.png";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import { useAuth } from "../context/AuthContext"; // ✅ Import auth context

const Navbar = ({ scrollToFooter }) => {
  const navbarRef = useRef(null);
  const navigate = useNavigate();
  const { isSignedIn, signOut } = useAuth(); // ✅ Use global auth

  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showSignupPopup, setShowSignupPopup] = useState(false);

  // Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(`.${styles.heading}`, { opacity: 0, y: -50, duration: 1 });
      gsap.from(`.${styles.hash}`, { opacity: 0, y: -50, duration: 1 });
      gsap.from(`.${styles.navbar}`, {
        opacity: 0,
        x: 100,
        duration: 1,
        delay: 1,
      });
    }, navbarRef);

    return () => ctx.revert();
  }, []);

  const handleContactClick = () => {
    navigate("/");
    setTimeout(() => {
      if (scrollToFooter) scrollToFooter();
    }, 100);
  };

  const handleLogout = () => {
    signOut(); // ✅ Remove token + update state
    alert("Logged out!");
  };

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

        <div className={styles.navbar}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/package">Packages</Link>
            </li>
            <li>
              <Link onClick={handleContactClick}>Contact Us</Link>
            </li>

            {!isSignedIn ? (
              <li
                className={styles.signinBtn}
                onClick={() => setShowLoginPopup(true)}
              >
                Sign Up
              </li>
            ) : (
              <li className={styles.logoutBtn} onClick={handleLogout}>
                Logout
              </li>
            )}
          </ul>
        </div>
      </nav>

      {/* Popups */}
      {showLoginPopup && (
        <Login
          closePopup={() => setShowLoginPopup(false)}
          onLoginSuccess={() => setShowLoginPopup(false)}
        />
      )}
      {showSignupPopup && (
        <Signup
          closePopup={() => setShowSignupPopup(false)}
          onSignupSuccess={() => setShowSignupPopup(false)}
        />
      )}
    </>
  );
};

export default Navbar;
