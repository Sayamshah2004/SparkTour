import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "./Signup.module.css";
import { useAuth } from "../context/AuthContext"; // 🔁 Global auth context

const Signup = ({ closePopup }) => {
  const { signIn } = useAuth(); // 🔁 Global login handler
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(
        "http://192.168.255.159:5000/api/auth/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password, role: "customer" }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }

      localStorage.setItem("token", data.token); // ✅ Save JWT
      signIn(); // ✅ Update global auth state
      alert("Signup successful!");
      closePopup(); // ✅ Close modal
    } catch (err) {
      setError(err.message);
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

            <form className={styles.form} onSubmit={handleSignup}>
              <input
                type="email"
                placeholder="Email"
                className={styles.inputField}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className={styles.inputField}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className={styles.passwordContainer}>
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <span className={styles.eyeIcon} onClick={togglePassword}>
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {error && <p className={styles.error}>{error}</p>}

              <button type="submit" className={styles.loginButton}>
                SIGNUP
              </button>
            </form>

            <Link
              className={styles.popupButton}
              onClick={() => {
                setShowLogin(true);
                closePopup();
              }}
            >
              <p className={styles.signupText}>
                Already have an account? <a>Login</a>
              </p>
            </Link>

            {showLogin && <Login closePopup={() => setShowLogin(false)} />}

            <p className={styles.terms}>
              By proceeding, you agree to Spark Tour & Travels
              <Link to="/privacy"> Privacy Policy</Link>,{" "}
              <Link to="/userAgreement"> User Agreement</Link>, and{" "}
              <Link to="/terms"> T&Cs.</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
