import React, { useEffect, useState } from "react";
import styles from "./AdminPackages.module.css";
import { Link } from "react-router-dom";

const AdminPackages = () => {
  const [packages, setPackages] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [route, setRoute] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("packages");
    if (stored) {
      setPackages(JSON.parse(stored));
    }
  }, []);

  const handleAdd = () => {
    if (!name.trim() || !image.trim() || !route.trim()) {
      return alert("All fields are required");
    }

    const newPackage = { name, image, route };
    const updatedPackages = [...packages, newPackage];
    setPackages(updatedPackages);
    localStorage.setItem("packages", JSON.stringify(updatedPackages));

    // Clear inputs
    setName("");
    setImage("");
    setRoute("");
  };

  const handleDelete = (index) => {
    const updated = [...packages];
    updated.splice(index, 1);
    setPackages(updated);
    localStorage.setItem("packages", JSON.stringify(updated));
  };

  return (
    <div className={styles.adminContainer}>
      <h2>Admin Panel: Manage Travel Packages</h2>

      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Package Name (e.g., Manali)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          placeholder="Details Page Route (e.g., /manali)"
          value={route}
          onChange={(e) => setRoute(e.target.value)}
        />
        <button onClick={handleAdd}>Add Package</button>
      </div>

      <div className={styles.packageList}>
        {packages.map((pkg, index) => (
          <div key={index} className={styles.packageCard}>
            <Link to={pkg.route}>
              <img src={pkg.image} alt={pkg.name} />
              <p>{pkg.name}</p>
            </Link>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPackages;
