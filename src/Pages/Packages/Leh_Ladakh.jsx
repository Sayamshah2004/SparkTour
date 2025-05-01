import React, { useEffect, useState } from "react";
import styles from "./options.module.css";
import Footer from "../../Components/Footer";

import Leh_Ladakh1 from "../../assets/Leh_Ladakh1.jpg";
import Leh_Ladakh2 from "../../assets/Leh_Ladakh2.jpg";
import Leh_Ladakh3 from "../../assets/Leh_Ladakh3.jpg";
import Leh_Ladakh4 from "../../assets/Leh_Ladakh4.jpg";

const images = [Leh_Ladakh1, Leh_Ladakh2, Leh_Ladakh3, Leh_Ladakh4];

// Package data with price, itinerary, inclusions, and exclusions

const packageDetails = {
  "7 Nights/ 8 Days": {
    price: "₹22,500 per person ",
    duration: "7 Nights/ 8 Days",
    itinerary: [
      {
        day: "Delhi to Manali – Overnight Travel  ",
        content: (
          <>
            <p>
              Travel by Volvo bus from Delhi to Manali for an overnight travel,
              enjoying beautiful scenery on the way.
            </p>
            <div className={styles.DropdownBelow}></div>
          </>
        ),
      },
      {
        day: " Manali to Sarchu / Jispa ",
        content: (
          <>
            <p>
              After fresh-up and arrival at Manali, start your journey towards
              Sarchu through Rohtang Pass, Keylong, and Baralacha Pass. The
              scenes keep changing totally as you move up. Stay at Jispa or
              Sarchu hotel/camps
            </p>
            <div className={styles.DropdownBelow}></div>
          </>
        ),
      },
      {
        day: " Sarchu / Jispa to Leh ",
        content: (
          <>
            <p>
              Early breakfast, proceed with your adventurous drive to Leh
              through: <br /> Lachangla Pass (16,617 ft)
              <br />
              Skyangchu Thang – the highest plateau stretch in the world <br />
              Tanglangla Pass – another high-altitude mountain pass
              <br /> Enjoy the scenic Manali-Leh Highway views and arrive at Leh
              in the evening.
            </p>
            <div className={styles.DropdownBelow}>
              <img
                className={styles.dropdownIcon}
                src="src/assets/breakfast.png"
              />
              <span id={styles.dropdownspan}>Breakfast</span>
              <br />

              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>Stay at Leh hotel</span>
            </div>
          </>
        ),
      },
      {
        day: "Leh to Nubra Valley  ",
        content: (
          <>
            <p>
              After breakfast, travel to the mystical Nubra Valley through the
              legendary Khardungla Pass— one of the world's highest motorable
              roads. In the evening, visit: <br />
              Sand Dunes
              <br />
              Double Humped Camel Ride (on your own)
            </p>
            <div className={styles.DropdownBelow}>
              <img
                className={styles.dropdownIcon}
                src="src/assets/breakfast.png"
              />
              <span id={styles.dropdownspan}>Breakfast</span>
              <br />

              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>
                Stay at Nubra Valley hotel/camp
              </span>
            </div>
          </>
        ),
      },
      {
        day: " Nubra Valley Sightseeing & Back to Leh ",
        content: (
          <>
            <p>
              After breakfast, visit:
              <br /> Diskit Monastery
              <br /> Hunder Village
              <br /> Experience the local way of life of this India's
              northernmost area. Later, return to Leh by road through Khardungla
              Pass.
            </p>
            <div className={styles.DropdownBelow}>
              <img
                className={styles.dropdownIcon}
                src="src/assets/breakfast.png"
              />
              <span id={styles.dropdownspan}>Breakfast</span>
              <br />
              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>Stay at Leh hotel</span>
            </div>
          </>
        ),
      },
      {
        day: "  Leh to Pangong Lake ",
        content: (
          <>
            <p>
              After an early breakfast, take a scenic drive to Pangong Lake
              through:
              <br /> Shey Palace
              <br /> Thiksey Monastery
              <br /> Hemis Monastery
              <br /> Sindhu Ghat
              <br /> Changla Pass (17,586 ft)
              <br /> Arrive at the stunning Pangong Lake, renowned for its
              changing hues and backdrop from the movie 3 Idiots. Take a
              leisurely walk along the lake shores in the evening.
            </p>
            <div className={styles.DropdownBelow}>
              <img
                className={styles.dropdownIcon}
                src="src/assets/breakfast.png"
              />
              <span id={styles.dropdownspan}>Breakfast</span>
              <br />
              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>
                Stay near Pangong Lake (camp/accommodation)
              </span>
            </div>
          </>
        ),
      },
      {
        day: " Pangong Lake to Leh ",
        content: (
          <>
            <p>
              After breakfast, drive back to Leh with a stopover at Changla Pass
              for a warm tea break. Visit Rancho School and Shanti Stupa upon
              reaching Leh. Spend the evening exploring Leh Market.
            </p>
            <div className={styles.DropdownBelow}>
              <img
                className={styles.dropdownIcon}
                src="src/assets/breakfast.png"
              />
              <span id={styles.dropdownspan}>Breakfast</span>
              <br />
              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>Stay at Leh hotel</span>
            </div>
          </>
        ),
      },
      {
        day: "Leh to Manali to Delhi  ",
        content: (
          <>
            <p>
              After your final breakfast, begin your drive back to
              Manali/Sarchu, and from there, continue the journey to Delhi by
              overnight Volvo.
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
        text: "Volvo trip Delhi–Manali–Delhi  ",
      },
      {
        icon: "src/assets/include.png",
        text: "Private car for Leh-Ladakh sightseeing ",
      },
      {
        icon: "src/assets/include.png",
        text: " Hotel and camp stay",
      },
      {
        icon: "src/assets/include.png",
        text: " Breakfast every day included  ",
      },
      {
        icon: "src/assets/include.png",
        text: " Major sightseeing such as Nubra Valley, Pangong Lake, and monasteries  ",
      },
    ],

    exclusions: [
      {
        icon: "src/assets/exclude.png",
        text: " Not mentioned meals (Lunch and some dinners) ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Camel ride fees at Nubra  ",
      },
      {
        icon: "src/assets/exclude.png",
        text: " Sightseeing spot entry fees  ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Travel insurance  ",
      },
      {
        icon: "src/assets/exclude.png",
        text: " Personal expenses such as shopping, tips, etc. ",
      },
    ],
  },
};

const Leh_Ladakh = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("itinerary");
  const [selectedPackage, setSelectedPackage] = useState("7 Nights/ 8 Days");

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
          <h1>Leh Ladakh</h1>
          <p className={styles.description}>
            Beyond the Mountains, Beyond the Clouds – Leh is Where Adventure
            Finds Your Soul.
          </p>
        </section>

        <section className={styles.content}>
          <div className={styles.left}>
            <img
              src={images[currentImageIndex]}
              alt="Ladakh"
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3390969.72528067!2d72.42868156895229!3d33.902686619798324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38fd86bce37d7139%3A0xc6c2990fdad28ac7!2sLadakh!5e0!3m2!1sen!2sin!4v1745771020627!5m2!1sen!2sin"
          width="600"
          height="450"
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

export default Leh_Ladakh;
