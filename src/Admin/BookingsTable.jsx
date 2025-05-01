import { useState } from "react";
import styles from "./AdminDashboard.module.css";

const BookingsTable = () => {
  const [upcomingSearch, setUpcomingSearch] = useState("");
  const [previousSearch, setPreviousSearch] = useState("");

  // Dummy data
  const upcomingBookings = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      startDate: "2024-08-01",
      endDate: "2024-08-07",
      destination: "Dubai",
      persons: 2,
      contact: "1234567890",
    },
  ];

  const previousBookings = [
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      email: "jane@example.com",
      startDate: "2024-06-01",
      endDate: "2024-06-05",
      destination: "Goa",
      persons: 4,
      contact: "9876543210",
    },
  ];

  const filterBookings = (bookings, searchTerm) => {
    return bookings.filter((booking) =>
      booking.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <>
      {/* ✅ Upcoming Bookings Section */}
      <div className={styles.bookingSection}>
        <div className={styles.bookingHeader}>
          <h4>Upcoming Bookings</h4>
          <div className={styles.bookingsearchBar}>
            <input
              type="text"
              placeholder="Search user"
              value={upcomingSearch}
              onChange={(e) => setUpcomingSearch(e.target.value)}
            />{" "}
            <img className={styles.bookingsearch} src="src/assets/search.png" />
          </div>
        </div>

        <div className={styles.tableArea}>
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Destination</th>
                <th>No. of persons</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {filterBookings(upcomingBookings, upcomingSearch).map(
                (booking) => (
                  <tr key={booking.id}>
                    <td>{booking.firstName}</td>
                    <td>{booking.lastName}</td>
                    <td>{booking.email}</td>
                    <td>{booking.startDate}</td>
                    <td>{booking.endDate}</td>
                    <td>{booking.destination}</td>
                    <td>{booking.persons}</td>
                    <td>{booking.contact}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ✅ Previous Bookings Section */}
      <div className={styles.bookingSection}>
        <div className={styles.bookingHeader}>
          <h4>Previous Bookings</h4>
          <div className={styles.bookingsearchBar}>
            <input
              type="text"
              placeholder="Search user"
              value={previousSearch}
              onChange={(e) => setPreviousSearch(e.target.value)}
            />{" "}
            <img className={styles.bookingsearch} src="src/assets/search.png" />
          </div>
        </div>

        <div className={styles.tableArea}>
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Destination</th>
                <th>No. of persons</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {filterBookings(previousBookings, previousSearch).map(
                (booking) => (
                  <tr key={booking.id}>
                    <td>{booking.firstName}</td>
                    <td>{booking.lastName}</td>
                    <td>{booking.email}</td>
                    <td>{booking.startDate}</td>
                    <td>{booking.endDate}</td>
                    <td>{booking.destination}</td>
                    <td>{booking.persons}</td>
                    <td>{booking.contact}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default BookingsTable;
