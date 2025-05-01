import React, { useEffect, useState } from "react";
import styles from "./options.module.css";
import Footer from "../../Components/Footer";

import Pachmarhi1 from "../../assets/Pachmarhi1.jpg";
import Pachmarhi2 from "../../assets/Pachmarhi2.jpg";
import Pachmarhi3 from "../../assets/Pachmarhi3.jpg";
import Pachmarhi4 from "../../assets/Pachmarhi4.jpg";

const images = [Pachmarhi1, Pachmarhi2, Pachmarhi3, Pachmarhi4];

// Package data with price, itinerary, inclusions, and exclusions

const packageDetails = {
  "3 Nights/ 4 Days": {
    price: "₹10,000  per person ",
    duration: "3 Nights/ 4 Days ",
    itinerary: [
      {
        day: " Banswara to Pachmarhi (Via Ratlam and Pipariya)  ",
        content: (
          <>
            <p>
              Start your tour as you leave for Ratlam from Banswara by AC Bus,
              and then Ratlam to Pipariya by 3AC Train. At Pipariya Railway
              Station, you will be received and driven to Pachmarhi, the sole
              hill resort of Madhya Pradesh. Check into your hotel after arrival
              and rest for the day.
            </p>
            <div className={styles.DropdownBelow}>
              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>Stay at Pachmarhi hotel</span>
            </div>
          </>
        ),
      },
      {
        day: " Leisure Day in Pachmarhi ",
        content: (
          <>
            <p>
              Spend a peaceful day soaking up the pleasant breeze and calm
              atmosphere of Pachmarhi. You may explore the surrounding areas at
              leisure or relax at leisure in your hotel.
            </p>
            <div className={styles.DropdownBelow}>
              <img
                className={styles.dropdownIcon}
                src="src/assets/breakfast.png"
              />
              <span id={styles.dropdownspan}>Breakfast</span>
              <br />
              <img
                className={styles.dropdownIcon}
                src="src/assets/dinner.png"
              />
              <span id={styles.dropdownspan}>Dinner</span>
              <br />
              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>Stay at Pachmarhi hotel</span>
            </div>
          </>
        ),
      },
      {
        day: "Pachmarhi Sightseeing & Departure ",
        content: (
          <>
            <p>
              Following a stimulating breakfast, take a checkout from the hotel
              and go for a sightseeing tour of:
              <br /> Handi Khoh – A spectacular ravine with breathtaking vistas
              <br /> Jata Shankar Caves – A holy natural cave temple
              <br />
              Priyadarshini Point – A viewpoint with breathtaking views
              <br /> Gupt Mahadev Cave <br /> Begum Palace
              <br /> Ambamai Temple
              <br /> After the sightseeing, you’ll be dropped at Pipariya
              Railway Station for your return journey to Banswara via the same
              route (3AC train to Ratlam and AC bus to Banswara).
            </p>
            <div className={styles.DropdownBelow}>
              <img
                className={styles.dropdownIcon}
                src="src/assets/breakfast.png"
              />
              <span id={styles.dropdownspan}>Breakfast</span>
            </div>
          </>
        ),
      },
      {
        day: "Pipariya To Ratlam By 3 Ac Train Ratlam To Banswara By Ac Bus  ",
        content: (
          <>
            <p></p>
            <div className={styles.DropdownBelow}></div>
          </>
        ),
      },
    ],
    inclusions: [
      {
        icon: "src/assets/include.png",
        text: " AC Sleeper Bus (Banswara to Ratlam)  ",
      },
      {
        icon: "src/assets/include.png",
        text: "3AC Train (Ratlam to Pipariya and back)  ",
      },
      {
        icon: "src/assets/include.png",
        text: " 3 Nights / 4 Days Accommodation ",
      },
      {
        icon: "src/assets/include.png",
        text: " Daily Breakfast and Dinner  ",
      },
      {
        icon: "src/assets/include.png",
        text: "Separate vehicle transfers from Pipariya to Pachmarhi   ",
      },
      {
        icon: "src/assets/include.png",
        text: " Local sightseeing as per itinerary   ",
      },
    ],

    exclusions: [
      {
        icon: "src/assets/exclude.png",
        text: " Personal expenses: tips, laundry, phone calls, liquor, etc. ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Sightseeing entry charges  ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "VIP Darshan fee  ",
      },
      {
        icon: "src/assets/exclude.png",
        text: " Travel Insurance  ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Amounts spent due to inclement weather, landslides, or road blockage ",
      },
    ],
  },
};

const Pachmarhi = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("itinerary");
  const [selectedPackage, setSelectedPackage] = useState("3 Nights/ 4 Days");

  // Save selected package on change
  useEffect(() => {
    localStorage.setItem("selectedPackage", selectedPackage);
  }, [selectedPackage]);

  const selected = packageDetails[selectedPackage] || {};
  const {
    itinerary = [],
    price = "",
    duration = "",
    inclusions = [],
    exclusions = [],
  } = selected;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleToggle = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  return (
    <>
      <div className={styles.container}>
        <section className={styles.hero}>
          <h1>Pachmarhi</h1>
          <p className={styles.description}>
            Where the hills whisper ancient tales – Pachmarhi, Madhya Pradesh’s
            hidden gem.
          </p>
        </section>

        <section className={styles.content}>
          <div className={styles.left}>
            <img
              src={images[currentImageIndex]}
              alt="Pachmarhi"
              className={styles.image}
            />
            <div className={styles.meta}>
              <p>
                <img
                  className={styles.calender}
                  src="src/assets/calendar.png"
                  alt="calendar"
                />
                {duration}
              </p>
              <div className={styles.tabs}>
                <button onClick={() => setActiveTab("itinerary")}>
                  Itinerary
                </button>
                <button onClick={() => setActiveTab("inclusions")}>
                  Tour Inclusions
                </button>
                <button onClick={() => setActiveTab("exclusions")}>
                  Tour Exclusions
                </button>
                <select
                  className={styles.selection}
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                >
                  {Object.keys(packageDetails).map((pkg) => (
                    <option key={pkg} value={pkg}>
                      {pkg}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.tabContent}>
              {activeTab === "itinerary" && (
                <div className={styles.itinerary}>
                  <h2>
                    Itinerary <span id={styles.daywise}>(Day-Wise)</span>
                  </h2>
                  {itinerary.length > 0 ? (
                    itinerary.map((item, idx) => (
                      <div key={idx} className={styles.dayItem}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <div>
                            <span>
                              <img
                                className={styles.location}
                                src="src/assets/locationn.png"
                                alt="location"
                              />
                            </span>
                            <strong>Day-{idx + 1}</strong> {item.day}
                          </div>
                          <span
                            className={styles.expand}
                            style={{ cursor: "pointer" }}
                            onClick={() => handleToggle(idx)}
                          >
                            <img
                              src={
                                openDropdownIndex === idx
                                  ? "src/assets/minus.png"
                                  : "src/assets/plus.png"
                              }
                              alt="toggle-icon"
                            />
                          </span>
                        </div>
                        {openDropdownIndex === idx && (
                          <div className={styles.dropdown}>{item.content}</div>
                        )}
                      </div>
                    ))
                  ) : (
                    <p>No itinerary available for this package.</p>
                  )}
                </div>
              )}

              {activeTab === "inclusions" && (
                <div className={styles.include}>
                  {inclusions.length > 0 ? (
                    inclusions.map((item, index) => (
                      <p key={index}>
                        <img
                          className={styles.inclusionIcon}
                          src={item.icon}
                          alt="inclusion-icon"
                        />
                        {item.text}
                      </p>
                    ))
                  ) : (
                    <p>No inclusions available for this package.</p>
                  )}
                </div>
              )}

              {activeTab === "exclusions" && (
                <div className={styles.exclude}>
                  {exclusions.length > 0 ? (
                    exclusions.map((item, index) => (
                      <p key={index}>
                        <img
                          className={styles.exclusionIcon}
                          src={item.icon}
                          alt="exclusion-icon"
                        />
                        {item.text}
                      </p>
                    ))
                  ) : (
                    <p>No exclusions available for this package.</p>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className={styles.right}>
            <p className={styles.offer}>
              The Trip of a Lifetime is One Click Away!
            </p>
            <div className={styles.priceBox}>
              <h3>Grab the Deal</h3>
              <p className={styles.price}>
                {selectedPackage} <br /> <strong>{price}</strong>
              </p>
              <button className={styles.bookBtn}>Book Now</button>
            </div>
          </div>
        </section>
      </div>

      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29496.00734480422!2d78.42847824999998!3d22.4665998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397e3a348b5f3e9d%3A0xf4322966c8376db6!2sPachmarhi%2C%20Madhya%20Pradesh%20461881!5e0!3m2!1sen!2sin!4v1745736860865!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default Pachmarhi;
