import React, { useEffect, useState } from "react";
import styles from "./options.module.css";
import Footer from "../../Components/Footer";

import Udaipur1 from "../../assets/Udaipur1.jpg";
import Udaipur2 from "../../assets/Udaipur2.jpg";
import Udaipur3 from "../../assets/Udaipur3.jpg";
import Udaipur4 from "../../assets/Udaipur4.jpg";

const images = [Udaipur3, Udaipur2, Udaipur1, Udaipur4];

// Package data with price, itinerary, inclusions, and exclusions

const packageDetails = {
  "2 Nights/3 Days": {
    price: "₹4800 per person",
    duration: "2 Nights/3 Days ",
    itinerary: [
      {
        day: "Arrival at Udaipur – City Sightseeing",
        content: (
          <>
            <p>
              Arrive in Udaipur, the City of Lakes, and get checked into your
              hotel. Relax and freshen up and rest for some time before
              venturing out to explore the city on an action-packed day of
              sightseeing. Places to Visit:
              <br /> Pichola Lake – Soak in the peaceful waters and city views
              <br /> Gordhan Sagar – A stunning lake to unwind and relax
              <br />
              Karni Mata Ropeway – For panoramic city views <br /> Jagdish
              Temple – A historic and spiritual landmark
              <br /> City Palace – A grand mixture of Rajasthani and Mughal
              styles
              <br /> Gangaur Ghat – Ideal spot for photography <br /> Bagore Ki
              Haveli – A glimpse of royal past
            </p>
            <div className={styles.DropdownBelow}>
              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>Stay at Udaipur hotel</span>
            </div>
          </>
        ),
      },
      {
        day: "Kumbhalgarh Fort & Udaipur Lakes Visit  ",
        content: (
          <>
            <p>
              After a cooling breakfast at the hotel, start the day and visit
              the stupendous Kumbhalgarh Fort, a UNESCO World Heritage Site with
              its huge walls and historical prestige. In the evening, get back
              to Udaipur and visit: <br /> Fateh Sagar Lake – A favorite
              lakeside destination <br /> Rani Road – A pleasant drive around
              town <br />
              Finish off the day with a filling dinner and a relaxing overnight
              stay in the hotel.
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
              <span id={styles.dropdownspan}>Stay at Udaipur hotel</span>
            </div>
          </>
        ),
      },
      {
        day: " Shopping and Departure from Udaipur",
        content: (
          <>
            <p>
              Break your breakfast in the hotel, and make it a day for exploring
              local shopping markets at Udaipur, ideal to get handicrafts,
              souvenirs, and Rajasthani delicacies. In the afternoon, depart
              from the hotel after checking out and continue ahead for your
              return journey, holding nice memories about the royal town.
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
    ],
    inclusions: [
      {
        icon: "src/assets/include.png",
        text: "Comfortable AC Traveller transfer",
      },
      {
        icon: "src/assets/include.png",
        text: " Accommodation 2 nights / 3 days including pool entry ",
      },
      {
        icon: "src/assets/include.png",
        text: "  2 Breakfasts & 2 Dinners included ",
      },
      {
        icon: "src/assets/include.png",
        text: " Sightseeing as per itinerary ",
      },
      {
        icon: "src/assets/include.png",
        text: " Pickup and drop facility ",
      },
    ],

    exclusions: [
      {
        icon: "src/assets/exclude.png",
        text: "Any extra meals other than mentioned above ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Personal expenses such as tips, shopping, etc.  ",
      },
      {
        icon: "src/assets/exclude.png",
        text: " Entrance fees for monuments  ",
      },
      {
        icon: "src/assets/exclude.png",
        text: " Travel insurance ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Expenses incurred due to unavoidable circumstances (weather, traffic, etc.)",
      },
    ],
  },
};

const Udaipur = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("itinerary");
  const [selectedPackage, setSelectedPackage] = useState("2 Nights/3 Days");

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
          <h1>Udaipur</h1>
          <p className={styles.description}>
            Udaipur – Where Every Lake Whispers Stories of Kings and Dreams.
          </p>
        </section>

        <section className={styles.content}>
          <div className={styles.left}>
            <img
              src={images[currentImageIndex]}
              alt="Udaipur"
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.3984017848816!2d73.67515987997598!3d24.575443221691142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967efecf87f0b8b%3A0x2708953a0e177443!2sTaj%20Lake%20Palace%2C%20Udaipur!5e0!3m2!1sen!2sin!4v1745693062237!5m2!1sen!2sin"
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

export default Udaipur;
