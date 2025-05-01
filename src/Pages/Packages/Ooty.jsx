import React, { useEffect, useState } from "react";
import styles from "./options.module.css";
import Footer from "../../Components/Footer";

import Ooty1 from "../../assets/Ooty1.jpg";
import Ooty2 from "../../assets/Ooty2.jpg";
import Ooty3 from "../../assets/Ooty3.jpg";
import Ooty4 from "../../assets/Ooty4.jpg";

const images = [Ooty1, Ooty2, Ooty3, Ooty4];

// Package data with price, itinerary, inclusions, and exclusions

const packageDetails = {
  "4 Nights/5 Days": {
    price: "₹11,999 per person",
    duration: "4 Nights/5 Days",
    itinerary: [
      {
        day: "Arrive in Ooty ",
        content: (
          <>
            <p>
              Arrive at the scenic hill station of Ooty and check-in to your
              hotel or resort. Begin the day with a visit to:
              <br /> Ooty Lake – Take a peaceful boat ride (₹200–₹500 per
              person) <br /> Ooty Botanical Gardens – Be awed by the gardens
              (₹30–₹50 per person)
              <br /> In the evening, take a walk around the energetic streets of
              Ooty and relish the local cuisine.
            </p>
            <div className={styles.DropdownBelow}>
              <br />
              <img
                className={styles.dropdownIcon}
                src="src/assets/dinner.png"
              />
              <span id={styles.dropdownspan}> Dinner(Local Restaurant)</span>
              <br />
              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>Stay at Ooty hotel/resort</span>
            </div>
          </>
        ),
      },
      {
        day: "Ooty to Coonoor Day Trip ",
        content: (
          <>
            <p>
              Following a hearty breakfast, drive to Coonoor (approx. 1 hour).
              Explore:
              <br /> Sim's Park – A well-landscaped park (₹50–₹100 per person)
              <br />
              Coonoor Market – Buy tea and local fruits and vegetables
              <br /> Dolphin's Nose Viewpoint – Panorama of the valley (free
              entry) <br />
              Return to Ooty in the evening and enjoy a tasty dinner at a local
              eatery.
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
              <span id={styles.dropdownspan}>Stay at Ooty hotel/resort</span>
            </div>
          </>
        ),
      },
      {
        day: "Ooty to Coorg ",
        content: (
          <>
            <p>
              After breakfast, take a beautiful drive to Coorg (about 5–6
              hours). On arrival, check into hotel and then explore: <br />{" "}
              Abbey Falls – Beautiful waterfall (₹50–₹100 per person)
              <br /> Coorg Market – Renowned for coffee and spices
              <br /> Afterwards, take a warm dinner at a nearby restaurant and
              relax.
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
              <span id={styles.dropdownspan}>Stay at Coorg hotel/resort</span>
            </div>
          </>
        ),
      },
      {
        day: "Coorg to Wayanad",
        content: (
          <>
            <p>
              Begin the day with breakfast, followed by a drive to Wayanad (3–4
              hours). Check into your hotel and start your activities:
              <br /> Edakkal Caves – Ancient rock inscriptions (₹20–₹50 per
              person) <br /> Wayanad Wildlife Sanctuary – Jungle walk (₹300–₹500
              per person) <br />
              Finish the day with a good dinner at a local restaurant.
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
              <span id={styles.dropdownspan}>Stay at Wayanad hotel/resort</span>
            </div>
          </>
        ),
      },
      {
        day: "Wayanad Exploration & Departure ",
        content: (
          <>
            <p>
              Have a good breakfast before discovering more of Wayanad's
              wonders:
              <br /> Banasura Sagar Dam – Scenic view paradise (free visit){" "}
              <br />
              Wayanad Heritage Museum – Immersive history (₹50–₹100 per person)
              <br />
              Post-discovery, come back to the hotel, check-out, and depart for
              your further journey.
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
        text: "Clean hotel/resort stay (quad sharing basis)  ",
      },
      {
        icon: "src/assets/include.png",
        text: "Breakfast and Dinner every day  ",
      },
      {
        icon: "src/assets/include.png",
        text: "Hygienic private transportation for sightseeing and transfers  ",
      },
      {
        icon: "src/assets/include.png",
        text: "All sightseeing as indicated  ",
      },
    ],

    exclusions: [
      {
        icon: "src/assets/exclude.png",
        text: "Sightseeing entrance fees ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Lunches  ",
      },
      {
        icon: "src/assets/exclude.png",
        text: " Personal expenditure like shopping, tips, etc. ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Travel insurance ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Any expense incurred due to unexpected circumstances (weather, transportation delays, etc.) ",
      },
    ],
  },
};

const Ooty = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("itinerary");
  const [selectedPackage, setSelectedPackage] = useState("4 Nights/5 Days");

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
          <h1>Ooty</h1>
          <p className={styles.description}>
            Mist-kissed hills, ancient echoes, and wild wonders – South India,
            where every journey feels like a poem.
          </p>
        </section>

        <section className={styles.content}>
          <div className={styles.left}>
            <img
              src={images[currentImageIndex]}
              alt="Ooty"
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62575.05133734779!2d76.6522217066162!3d11.411849727064205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8bd84b5f3d78d%3A0x179bdb14c93e3f42!2sOoty%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1745769527934!5m2!1sen!2sin"
          width="600"
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

export default Ooty;
