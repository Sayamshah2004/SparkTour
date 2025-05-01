import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Package.module.css";
import Login from "../Pages/Login";
import Navbar from "../Components/Navbar";
import searchIcon from "../assets/Search.png";

// Default packages with their route
const defaultPackages = [];

const Packages = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredPackages, setFilteredPackages] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowLogin(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("packages");
    const adminPackages = stored ? JSON.parse(stored) : [];
    const mergedPackages = [...defaultPackages, ...adminPackages];
    setFilteredPackages(mergedPackages);
  }, []);

  const handleSearch = (e) => {
    const input = e.target.value;
    setSearch(input);

    const stored = localStorage.getItem("packages");
    const adminPackages = stored ? JSON.parse(stored) : [];
    const allPackages = [...defaultPackages, ...adminPackages];

    const filtered = allPackages.filter((pkg) =>
      pkg.name.toLowerCase().includes(input.toLowerCase())
    );

    setFilteredPackages(filtered);

    if (input.trim() !== "" && filtered.length === 0) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.packagesContainer}>
        <h2 className={styles.title}>Explore Our Travel Packages</h2>

        <div className={styles.searchContainer}>
          <img className={styles.search} src={searchIcon} alt="Search" />
          <input
            className={styles.searchBar}
            type="text"
            placeholder="Search by Destination"
            value={search}
            onChange={handleSearch}
          />
          {showPopup && (
            <div className={styles.popup}>No such package found</div>
          )}
        </div>

        <div className={styles.gridContainer}>
          {filteredPackages.map((pkg, index) => (
            <Link to={pkg.route || "/"} key={index} className={styles.card}>
              <img src={pkg.image} alt={pkg.name} />
              <p>{pkg.name}</p>
            </Link>
          ))}
        </div>

        <h3 className={styles.cta}>
          START EXPLORING. START TRAVELING. START WITH SPARK.
        </h3>
      </div>

      {showLogin && <Login closePopup={() => setShowLogin(false)} />}
    </>
  );
};

export default Packages;
