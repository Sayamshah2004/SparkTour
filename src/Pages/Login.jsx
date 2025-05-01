import React, { useState } from "react";
import { Link } from "react-router-dom";
import Signup from "./Signup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "./Login.module.css";
import { useAuth } from "../context/AuthContext";

const Login = ({ closePopup }) => {
  const { signIn } = useAuth();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token); // Save JWT token to localStorage
        signIn(data.user); // Pass user data to the authentication context
        alert("Login successful!");
        closePopup();
        window.location.href = "/dashboard"; // Redirect to the dashboard
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An error occurred during login");
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.closeButton} onClick={closePopup}>
          <img src="./src/assets/loginBack.png" alt="Close" />
        </div>

        <div className={styles.Container}>
          <div className={styles.leftSide}>
            <img
              className={styles.background}
              src="./src/assets/loginBackground.png"
              alt="Login Background"
            />
          </div>

          <div className={styles.rightSide}>
            <h2 className={styles.heading}>
              <i>Spark Your Journey with Us!</i>
            </h2>

            <form className={styles.form} onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                className={styles.inputField}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <div className={styles.passwordContainer}>
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Password"
                  className={styles.inputField}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span className={styles.eyeIcon} onClick={togglePassword}>
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {error && <p className={styles.error}>{error}</p>}

              <a href="#" className={styles.forgotPassword}>
                Forgot Password?
              </a>

              <button type="submit" className={styles.loginButton}>
                LOGIN
              </button>
            </form>

            <Link
              className={styles.popupButton}
              onClick={(e) => {
                e.preventDefault();
                setShowSignup(true);
              }}
            >
              <p className={styles.signupText}>
                Don't have an account? <a>Signup</a>
              </p>
            </Link>

            {showSignup && <Signup closePopup={() => setShowSignup(false)} />}

            <div className={styles.orDivider}>
              <hr className={styles.line} />
              <span>OR</span>
              <hr className={styles.line} />
            </div>

            <button className={styles.googleLogin}>
              <img src="./src/assets/google.png" alt="Google Logo" /> Login with
              Google
            </button>

            <p className={styles.terms}>
              By proceeding, you agree to Spark Tour & Travels
              <Link to="/privacy"> Privacy Policy</Link>,
              <Link to="/userAgreement"> User Agreement</Link>, and
              <Link to="/terms"> T&Cs.</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
