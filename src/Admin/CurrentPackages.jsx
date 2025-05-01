import { useState } from "react";
import styles from "./PackageManagement.module.css";

const dummyPackages = [
  { id: 1, title: "Thailand", image: "./src/assets/thailand1.jpg" },
  { id: 2, title: "Manali", image: "./src/assets/manali1.jpg" },
  { id: 3, title: "Goa", image: "./src/assets/goa1.jpg" },
  { id: 4, title: "Kashmir", image: "./src/assets/kashmir1.jpg" },
  { id: 5, title: "Ooty", image: "./src/assets/ooty1.jpg" },
  { id: 6, title: "Leh Ladakh", image: "./src/assets/leh_ladakh1.jpg" },
];

const CurrentPackages = () => {
  const [packages, setPackages] = useState(dummyPackages);

  const handleEdit = (id) => {
    alert(`Edit package ID: ${id}`);
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this package?"
    );
    if (confirmed) {
      setPackages(packages.filter((pkg) => pkg.id !== id));
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {packages.map((pkg) => (
          <div key={pkg.id} className={styles.card}>
            <img src={pkg.image} alt={pkg.title} className={styles.image} />
            <div className={styles.info}>
              <h3>{pkg.title}</h3>
              <div className={styles.actions}>
                <button onClick={() => handleEdit(pkg.id)}>Edit</button>
                <button onClick={() => handleDelete(pkg.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentPackages;
