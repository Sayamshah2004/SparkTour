import React, { useEffect, useState } from "react";
import styles from "./options.module.css";
import Footer from "../../Components/Footer";

import Darjeeling1 from "../../assets/Darjeeling1.jpg";
import Darjeeling2 from "../../assets/Darjeeling2.jpg";
import Darjeeling3 from "../../assets/Darjeeling3.jpg";
import Darjeeling4 from "../../assets/Darjeeling4.jpg";

const images = [Darjeeling1, Darjeeling2, Darjeeling3, Darjeeling4];

// Package data with price, itinerary, inclusions, and exclusions

const packageDetails = {
  "7 Nights/8 Days": {
    price: "₹1,20,000 per couple",
    duration: "7 Nights/8 Days ",
    itinerary: [
      {
        day: "Arrival in Gangtok",
        content: (
          <>
            <p>
              Arrive at the beautiful city of Gangtok, Sikkim's capital.
              Check-in to the hotel and relax. Start your local sightseeing with
              a visit to:
              <br /> Enchey Monastery – A tranquil Buddhist monastery
              <br />
              Namgyal Institute of Tibetology – Discover Tibetan artifacts and
              history <br />A relaxed walk along M.G. Road, the colorful
              shopping area <br />
              Finish the day with a lovely dinner at the hotel and an overnight
              stay.
            </p>
            <div className={styles.DropdownBelow}>
              <img className={styles.dropdownIcon} src="src/assets/lunch.png" />
              <span id={styles.dropdownspan}>Lunch(Local Restaurant)</span>
              <br />
              <img
                className={styles.dropdownIcon}
                src="src/assets/dinner.png"
              />
              <span id={styles.dropdownspan}> Dinner</span>
              <br />
              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>Stay at Gangtok Hotel</span>
            </div>
          </>
        ),
      },
      {
        day: " Tsomgo Lake & Baba Mandir Excursion ",
        content: (
          <>
            <p>
              Begin the day with a delicious breakfast at the hotel. Then take a
              drive through picturesque scenery to:
              <br /> Tsomgo Lake – A breathtaking glacial lake
              <br /> Baba Mandir – A sacred Hindu temple at high altitude <br />
              Return to Gangtok by evening to unwind.
            </p>
            <div className={styles.DropdownBelow}>
              <img
                className={styles.dropdownIcon}
                src="src/assets/breakfast.png"
              />
              <span id={styles.dropdownspan}>Breakfast</span>
              <br />
              <img className={styles.dropdownIcon} src="src/assets/lunch.png" />
              <span id={styles.dropdownspan}>Lunch (local restaurant)</span>
              <br />

              <img
                className={styles.dropdownIcon}
                src="src/assets/dinner.png"
              />
              <span id={styles.dropdownspan}>Dinner</span>
              <br />
              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>Stay at Gangtok Hotel</span>
            </div>
          </>
        ),
      },
      {
        day: "Gangtok to Lachen",
        content: (
          <>
            <p>
              Relish breakfast, then set off on a scenic 6-hour drive to Lachen,
              nestled amidst mountains. Upon arrival, check into your hotel and
              visit:
              <br /> Lachen Monastery
              <br /> Lachen Village
              <br /> A serene evening awaits you with dinner at the hotel and a
              comfortable overnight stay.
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
              <span id={styles.dropdownspan}>Stay at Lachen Hotel</span>
            </div>
          </>
        ),
      },
      {
        day: "Chopta Valley, Zero Point & Lachung",
        content: (
          <>
            <p>
              Start early with a drive to:
              <br /> Chopta Valley – Feel the unspoiled beauty of Sikkim
              <br /> Zero Point – See breathtaking snow-capped views
              <br /> Have lunch at a local restaurant before going on to
              Lachung.
            </p>
            <div className={styles.DropdownBelow}>
              <img
                className={styles.dropdownIcon}
                src="src/assets/breakfast.png"
              />
              <span id={styles.dropdownspan}>Breakfast</span>
              <br />
              <img className={styles.dropdownIcon} src="src/assets/lunch.png" />
              <span id={styles.dropdownspan}>Lunch (local restaurant) </span>
              <br />

              <img
                className={styles.dropdownIcon}
                src="src/assets/dinner.png"
              />
              <span id={styles.dropdownspan}> Dinner</span>
              <br />
              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>Stay at Lachung Hotel</span>
            </div>
          </>
        ),
      },
      {
        day: "Yumthang Valley Trip",
        content: (
          <>
            <p>
              Following breakfast at the hotel, take an unforgettable tour to:
              <br />
              Yumthang Valley – Famous as the "Valley of Flowers" <br />
              Immerse yourself in the healing Hot Springs <br />
              See Lachung Monastery and tour Lachung Village <br />
              Have lunch at a local restaurant and relax over dinner at the
              hotel.
            </p>
            <div className={styles.DropdownBelow}>
              <img
                className={styles.dropdownIcon}
                src="src/assets/breakfast.png"
              />
              <span id={styles.dropdownspan}>Breakfast</span>
              <br />
              <img className={styles.dropdownIcon} src="src/assets/lunch.png" />
              <span id={styles.dropdownspan}>Lunch (local restaurant) </span>
              <br />

              <img
                className={styles.dropdownIcon}
                src="src/assets/dinner.png"
              />
              <span id={styles.dropdownspan}> Dinner</span>
              <br />
              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>Stay at Lachung Hotel</span>
            </div>
          </>
        ),
      },
      {
        day: "Nathula Pass Excursion & Return to Gangtok",
        content: (
          <>
            <p>
              Early morning drive to:
              <br /> Nathula Pass – View the Indo-China border (subject to
              availability of permits)
              <br /> Return to Gangtok after the excursion. After a refreshing
              lunch, shopping at Gangtok Market.
            </p>
            <div className={styles.DropdownBelow}>
              <img
                className={styles.dropdownIcon}
                src="src/assets/breakfast.png"
              />
              <span id={styles.dropdownspan}>Breakfast</span>
              <br />
              <img className={styles.dropdownIcon} src="src/assets/lunch.png" />
              <span id={styles.dropdownspan}>Lunch (local restaurant) </span>
              <br />

              <img
                className={styles.dropdownIcon}
                src="src/assets/dinner.png"
              />
              <span id={styles.dropdownspan}> Dinner</span>
              <br />
              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>Stay at Gangtok Hotel</span>
            </div>
          </>
        ),
      },
      {
        day: "Gangtok to Darjeeling Transfer & Local Exploration ",
        content: (
          <>
            <p>
              After breakfast, drive to the quaint hill station of Darjeeling.
              Upon arrival, check-in to your hotel and then explore:
              <br /> Take a ride on the iconic Darjeeling Himalayan Railway (Toy
              Train) – a UNESCO World Heritage property <br />
              Free time at Chowrasta Market
              <br /> Wind up the day with a comfortable dinner at the hotel and
              retire.
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
              <span id={styles.dropdownspan}>Stay at Darjeeling Hotel</span>
            </div>
          </>
        ),
      },
      {
        day: "Departure from Darjeeling ",
        content: (
          <>
            <p>
              Have your last breakfast at the hotel, check out, and proceed to
              Bagdogra Airport for your further journey, with memories of the
              majestic mountains and spiritual valleys.
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
        text: "Private taxi during the tour for a comfortable ride ",
      },
      {
        icon: "src/assets/include.png",
        text: "7 nights hotel stay in Gangtok, Lachen, Lachung, and Darjeeling ",
      },
      {
        icon: "src/assets/include.png",
        text: "7 Breakfasts & 7 Dinners ",
      },
      {
        icon: "src/assets/include.png",
        text: "Sightseeing tours and local experiences as per itinerary ",
      },
      {
        icon: "src/assets/include.png",
        text: "Flights included in the package price  ",
      },
    ],

    exclusions: [
      {
        icon: "src/assets/exclude.png",
        text: "  Personal expenses: shopping, drinks, tips, etc.",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Sightseeing place entry fees (if not included) ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Travel insurance  ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Weather, permit delay, or other unforeseen expenses arising ",
      },
    ],
  },
};

const Darjeeling = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("itinerary");
  const [selectedPackage, setSelectedPackage] = useState("7 Nights/8 Days");

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
          <h1>Sikkim & Darjeeling </h1>
          <p className={styles.description}>
            Where Clouds Kiss the Peaks – Sikkim & Darjeeling, A Journey Beyond
            Dreams.
          </p>
        </section>

        <section className={styles.content}>
          <div className={styles.left}>
            <img
              src={images[currentImageIndex]}
              alt="Darjeeling"
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d905177.4237840321!2d88.46659555000001!3d27.598201049999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6a56a5805eafb%3A0xa4c4b857c39b5a04!2sSikkim!5e0!3m2!1sen!2sin!4v1745734155101!5m2!1sen!2sin"
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

export default Darjeeling;
