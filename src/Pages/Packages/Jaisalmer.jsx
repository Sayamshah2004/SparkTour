import React, { useEffect, useState } from "react";
import styles from "./options.module.css";
import Footer from "../../Components/Footer";

import Jaisalmer1 from "../../assets/Jaisalmer1.jpg";
import Jaisalmer2 from "../../assets/Jaisalmer2.jpg";
import Jaisalmer3 from "../../assets/Jaisalmer3.jpg";
import Jaisalmer4 from "../../assets/Jaisalmer4.jpg";

const images = [Jaisalmer1, Jaisalmer2, Jaisalmer3, Jaisalmer4];

// Package data with price, itinerary, inclusions, and exclusions

const packageDetails = {
  "3 Nights/4 Days": {
    price: "₹ 20,000 per person ",
    duration: "3 Nights/4 Days ",
    itinerary: [
      {
        day: " Leave Banswara – Overnight Trip  ",
        content: (
          <>
            <p>
              Your journey to the heart of Rajasthan's golden dunes starts as
              you take a departure from Banswara to Jaisalmer through Udaipur by
              AC sleeper bus. Prepare for a trip to the core of Rajasthan's
              golden dunes.
            </p>
            <div className={styles.DropdownBelow}>
              <img
                className={styles.dropdownIcon}
                src="src/assets/dinner.png"
              />
              <span id={styles.dropdownspan}>Indian Dinner</span>
            </div>
          </>
        ),
      },
      {
        day: "Arrive in Jaisalmer – Local Exploration ",
        content: (
          <>
            <p>
              Arrive in Jaisalmer in the morning and check into your hotel.
              After breakfast, start your tour of this ancient desert city with
              stops at:
              <br /> Jaisalmer Fort – The grand golden fort that overshadows the
              city
              <br /> Patwon Ki Haveli – A series of richly decorated mansions
              with stunning carvings
              <br /> Gadisar Lake – A serene area perfect for photography and
              relaxation
              <br /> Local Market – Purchase Rajasthani handicrafts and
              memorabilia <br />
              Return to your hotel in the evening for dinner and overnight stay.
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
              <span id={styles.dropdownspan}> Dinner</span>
              <br />
              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>Stay at Jaisalmer hotel</span>
            </div>
          </>
        ),
      },
      {
        day: " Desert Safari & Cultural Evening at Sam Sand Dunes ",
        content: (
          <>
            <p>
              Begin the day with a full breakfast, and then proceed to the
              famous Sam Sand Dunes. Upon arrival, get a traditional welcome of
              Dhol, Tika, and Nagada Swagat. Have an adventurous desert
              experience with:
              <br /> Camel Safari <br />
              Jeep Safari <br />
              Hi-tea in the evening
              <br /> A colorful evening with Rajasthani folk dance, bonfire, and
              music night
              <br /> Cap off your desert escapade with a yummy dinner and an
              exclusive overnight stay in luxury desert camps.
            </p>
            <div className={styles.DropdownBelow}>
              <img
                className={styles.dropdownIcon}
                src="src/assets/breakfast.png"
              />
              <span id={styles.dropdownspan}>Breakfast</span>
              <br />
              <img className={styles.dropdownIcon} src="src/assets/lunch.png" />
              <span id={styles.dropdownspan}>Evening Hi-Tea</span>
              <br />

              <img
                className={styles.dropdownIcon}
                src="src/assets/dinner.png"
              />
              <span id={styles.dropdownspan}> Dinner</span>
              <br />
              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>Stay at Desert Camps</span>
            </div>
          </>
        ),
      },
      {
        day: " Back to Udaipur  ",
        content: (
          <>
            <p>
              After breakfast, check out and drive towards Udaipur, concluding
              your royal desert retreat.
            </p>
          </>
        ),
      },
    ],
    inclusions: [
      {
        icon: "src/assets/include.png",
        text: "AC sleeper bus transport (Banswara – Jaisalmer – Banswara)  ",
      },
      {
        icon: "src/assets/include.png",
        text: "Stay (1 night hotel, 1 night desert camp)  ",
      },
      {
        icon: "src/assets/include.png",
        text: "Breakfast & Dinner daily, Evening Hi-Tea at camp  ",
      },
      {
        icon: "src/assets/include.png",
        text: "Camel Safari and Jeep Safari  ",
      },
      {
        icon: "src/assets/include.png",
        text: "Traditional welcome, folk dance, bonfire, and culture show ",
      },
    ],

    exclusions: [
      {
        icon: "src/assets/exclude.png",
        text: " Personal expenses (tips, laundry, phone calls, etc.) ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Sightseeing entry fees  ",
      },
      {
        icon: "src/assets/exclude.png",
        text: " VIP Darshan or optional activity  ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Travel Insurance  ",
      },
      {
        icon: "src/assets/exclude.png",
        text: " Weather, traffic, or other unexpected charges  ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "18% GST (applicable for online payments or GST bill request)  ",
      },
    ],
  },
};

const Jaisalmer = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("itinerary");
  const [selectedPackage, setSelectedPackage] = useState("3 Nights/4 Days");

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
          <h1>Jaisalmer</h1>
          <p className={styles.description}>
            Golden sands, royal echoes, and starry nights – Jaisalmer is a story
            written in dunes.
          </p>
        </section>

        <section className={styles.content}>
          <div className={styles.left}>
            <img
              src={images[currentImageIndex]}
              alt="Jaisalmer"
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56927.95780519142!2d70.89473019999998!3d26.9035788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3947bc28aa1b396b%3A0xf5ef9bd660d66ee3!2sJaisalmer%2C%20Rajasthan%20345001!5e0!3m2!1sen!2sin!4v1745691836160!5m2!1sen!2sin"
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

export default Jaisalmer;
