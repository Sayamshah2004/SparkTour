import { useState } from "react";
import styles from "./AdminDashboard.module.css";
import UsersTable from "./UsersTable";
import BookingsTable from "./BookingsTable";
import AdminNav from "./AdminNav";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("users");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <AdminNav />
      <div className={styles.adminContainer}>
        <div className={styles.buttonGroup}>
          <button
            className={activeTab === "users" ? styles.active : ""}
            onClick={() => setActiveTab("users")}
          >
            Users
          </button>

          <button
            className={activeTab === "bookings" ? styles.active : ""}
            onClick={() => setActiveTab("bookings")}
          >
            Bookings
          </button>
        </div>

        {activeTab === "users" && (
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Search user"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img
              className={styles.searchIcon}
              src="src/assets/search.png"
              alt="Search icon"
            />
          </div>
        )}

        <div className={styles.tableArea}>
          {activeTab === "users" ? (
            <UsersTable searchTerm={searchTerm} />
          ) : (
            <BookingsTable />
          )}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
