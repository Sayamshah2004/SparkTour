import React, { useEffect, useState } from "react";
import styles from "./options.module.css";
import Footer from "../../Components/Footer";

import Mathura1 from "../../assets/Mathura1.jpg";
import Mathura2 from "../../assets/Mathura2.jpg";
import Mathura3 from "../../assets/Mathura3.jpg";
import Mathura4 from "../../assets/Mathura4.jpg";

const images = [Mathura1, Mathura2, Mathura3, Mathura4];

// Package data with price, itinerary, inclusions, and exclusions

const packageDetails = {
  "3 Nights/4 Days": {
    price: "₹ 10,000 per person ",
    duration: "3 Days,4 Nights",
    itinerary: [
      {
        day: "Leaving Banswara – Overnight Travel  ",
        content: (
          <>
            <p>
              You start your spiritual journey as you leave Banswara for Mathura
              through overnight travel. Take it easy, be comfortable, and
              prepare to enter a land full of devotion and mythologies.
            </p>
          </>
        ),
      },
      {
        day: "Discovering the Divine City of Mathura ",
        content: (
          <>
            <p>
              Reach Mathura, the birthplace of Lord Krishna. Freshen up at your
              hotel and have a wonderful breakfast to prepare for the day.
              <br /> Start your spiritual tour with tours of:
              <br /> Krishna Janmabhoomi – the holy birthplace of Lord Krishna
              <br />
              Gokuldham – glimpse into the divine childhood of Krishna
              <br /> Raman Reti – walk along the mystical sands where Krishna
              played <br />
              End the day with an overnight stay in peaceful Mathura.
            </p>
            <div className={styles.DropdownBelow}>
              <img
                className={styles.dropdownIcon}
                src="src/assets/breakfast.png"
              />
              <span id={styles.dropdownspan}>Breakfast</span>
              <br />
              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>Stay in Mathura Hotel</span>
            </div>
          </>
        ),
      },
      {
        day: "Spiritual Day in Vrindavan ",
        content: (
          <>
            <p>
              Begin the day with a nutritious breakfast and proceed to the holy
              town of Vrindavan, a place full of Krishna's existence. <br />
              Temple Tour Highlights: <br />
              Banke Bihari Temple – experience the divine presence <br />
              ISKCON Temple – a paradise of devotion and melodies <br />
              Prem Mandir – see the breathtaking white marble temple <br />
              Pagal Baba Mandir – famous for its peculiar appeal and peace
              <br />
              Evening Highlight <br />
              Don't miss Prem Mandir's Mesmerizing Light Show, a stunning visual
              ode to worship. Back to Mathura for a satisfying dinner and
              overnight stay.
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
              <span id={styles.dropdownspan}>Stay in Mathura Hotel</span>
            </div>
          </>
        ),
      },
      {
        day: "Back Journey from the Land of Legends ",
        content: (
          <>
            <p>
              Start your last morning with a peaceful breakfast at the hotel,
              and then proceed on your return journey to Banswara, with divine
              blessings and warm memories of Krishna's home.
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
        text: "Hotel stay in Mathura  ",
      },
      {
        icon: "src/assets/include.png",
        text: "Breakfast daily ",
      },
      {
        icon: "src/assets/include.png",
        text: "Dinner on Day 3 ",
      },
      {
        icon: "src/assets/include.png",
        text: "Local sightseeing: Mathura & Vrindavan highlights  ",
      },
      {
        icon: "src/assets/include.png",
        text: "Spiritual experiences including temples and light show",
      },
    ],

    exclusions: [
      {
        icon: "src/assets/exclude.png",
        text: " Dinner on Day 1 (self-arranged) ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Lunches for all days  ",
      },
      {
        icon: "src/assets/exclude.png",
        text: " Personal expenses: shopping, tips, etc. ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Any entry fees not mentioned  ",
      },
      {
        icon: "src/assets/exclude.png",
        text: " Travel cover or unexpected expenses  ",
      },
    ],
  },
};

const Rameswaram = () => {
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
          <h1>Mathura</h1>
          <p className={styles.description}>
            Mathura & Vrindavan – Where Every Corner Echoes with Krishna’s Song
          </p>
        </section>

        <section className={styles.content}>
          <div className={styles.left}>
            <img
              src={images[currentImageIndex]}
              alt="Mathura"
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113274.76694268464!2d77.60175292967767!3d27.47435009609499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397371163d4d5205%3A0x4273a09defe10ea5!2sMathura%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1745690783194!5m2!1sen!2sin"
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

export default Rameswaram;
