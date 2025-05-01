import { useState } from "react";
import styles from "./PackageManagement.module.css";
import CurrentPackages from "./CurrentPackages";
import NewPackages from "./NewPackages";
import AdminNav from "./AdminNav";

const PackageManagement = () => {
  const [activeTab, setActiveTab] = useState("current");

  return (
    <>
      <AdminNav />
      <div className={styles.container}>
        <div className={styles.tabButtons}>
          <button
            className={activeTab === "current" ? styles.activeTab : ""}
            onClick={() => setActiveTab("current")}
          >
            Current Packages
          </button>
          <button
            className={activeTab === "new" ? styles.activeTab : ""}
            onClick={() => setActiveTab("new")}
          >
            Add New Package
          </button>
        </div>

        {activeTab === "current" ? <CurrentPackages /> : <NewPackages />}
      </div>
    </>
  );
};

export default PackageManagement;
