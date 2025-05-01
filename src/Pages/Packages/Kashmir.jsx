import React, { useEffect, useState } from "react";
import styles from "./options.module.css";
import Footer from "../../Components/Footer";

import Kashmir1 from "../../assets/Kashmir1.jpg";
import Kashmir2 from "../../assets/Kashmir2.jpg";
import Kashmir3 from "../../assets/Kashmir3.jpg";
import Kashmir4 from "../../assets/Kashmir4.jpg";

const images = [Kashmir1, Kashmir2, Kashmir3, Kashmir4];

// Package data with price, itinerary, inclusions, and exclusions

const packageDetails = {
  "6 Nights/7 Days": {
    price: "₹ 14,000 per person ",
    duration: "6 Nights / 7 Days",
    itinerary: [
      {
        day: "Jammu to Srinagar ",
        content: (
          <>
            <p>
              Start the trip with a drive from Jammu to Srinagar (around 260 km,
              6–7 hours) in a private taxi. Reach Srinagar by the afternoon and
              check-in to your hotel. Later in the night, take a romantic ride
              on Dal Lake in a Shikara and have a warm dinner at the hotel.
              Dinner
            </p>
            <div className={styles.DropdownBelow}>
              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>
                Stay at Hotel/HouseBoat(optional)
              </span>
            </div>
          </>
        ),
      },
      {
        day: "Srinagar Sightseeing ",
        content: (
          <>
            <p>
              After a healthy breakfast at the hotel, proceed to visit the
              breathtaking Mughal Gardens— Nishat Bagh and Shalimar Bagh. Have
              lunch and spend some time at the local markets. In the evening,
              visit the hilltop Shankaracharya Temple with panoramic views of
              the valley.
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
              <span id={styles.dropdownspan}>Stay at Hotel</span>
            </div>
          </>
        ),
      },
      {
        day: "Srinagar to Gulmarg Excursion  ",
        content: (
          <>
            <p>
              Begin the day with breakfast, followed by a trip to Gulmarg (about
              56 km, 2 hours). Take in the renowned Gondola cable car ride to
              Apharwat Peak and other optional activities such as skiing or
              snowboarding (seasonal). Have lunch among the snow-clad
              surroundings before returning to Srinagar.
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
              <span id={styles.dropdownspan}>Stay</span>
            </div>
          </>
        ),
      },
      {
        day: " Srinagar to Pahalgam   ",
        content: (
          <>
            <p>
              After breakfast, leave for Pahalgam (about 140 km, 4–5 hours). On
              arrival, check in to your hotel and have lunch. In the later part
              of the day, visit the breathtaking Betaab Valley and Chandanwari,
              set amidst peaceful mountain scenery.
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
              <span id={styles.dropdownspan}>Stay</span>
            </div>
          </>
        ),
      },
      {
        day: "Pahalgam to Jammu via Aru Valley & Baisaran ",
        content: (
          <>
            <p>
              Following breakfast, proceed to Aru Valley for a short horse ride
              or easy trek. Spend the time at leisure at your hotel with lunch,
              followed by a visit to the picturesque Baisaran Meadow before
              returning to Jammu by road (approx. 260 km, 6–7 hours).
            </p>
            <div className={styles.DropdownBelow}>
              <img
                className={styles.dropdownIcon}
                src="src/assets/breakfast.png"
              />
              <span id={styles.dropdownspan}>Breakfast</span>
              <br />
              <img className={styles.dropdownIcon} src="src/assets/lunch.png" />
              <span id={styles.dropdownspan}>Lunch</span>
              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>Stay</span>
            </div>
          </>
        ),
      },
      {
        day: "  Katra Darshan  ",
        content: (
          <>
            <p>
              Morning drive from Jammu to Katra for Vaishno Devi Darshan. After
              your religious excursion, check into your hotel at Katra for rest.
            </p>
            <div className={styles.DropdownBelow}>
              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>Stay at Katra Hotel</span>
            </div>
          </>
        ),
      },
      {
        day: "  Katra to Jammu Departure  ",
        content: (
          <>
            <p>
              After a leisurely morning, check out and drive from Katra to Jammu
              for your departure, ending your memorable pilgrimage through the
              divine landscapes of Kashmir.
            </p>
          </>
        ),
      },
    ],
    inclusions: [
      {
        icon: "src/assets/include.png",
        text: "Accommodation in recommended hotels (City Hill Resort, Moon View Resort, Deluxe Houseboat)  ",
      },
      {
        icon: "src/assets/include.png",
        text: "Breakfast and Dinner Daily  ",
      },
      {
        icon: "src/assets/include.png",
        text: "1-hour Shikara ride on Dal Lake  ",
      },
      {
        icon: "src/assets/include.png",
        text: "Private cab (Innova) driven by experienced person ",
      },
      {
        icon: "src/assets/include.png",
        text: "Houseboat stay  ",
      },
    ],

    exclusions: [
      { icon: "src/assets/exclude.png", text: " Airfare/train fare " },
      {
        icon: "src/assets/exclude.png",
        text: " Lunches (except otherwise specifically mentioned)  ",
      },
      {
        icon: "src/assets/exclude.png",
        text: " Personal expenses: tips, laundry, etc. ",
      },
      {
        icon: "src/assets/exclude.png",
        text: " Entry fees for sightseeing  ",
      },
      {
        icon: "src/assets/exclude.png",
        text: " Personal expenses: tips, laundry, etc. ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Any unexpected cost due to weather or road conditions  ",
      },
    ],
  },

  "4 Nights/5 Days": {
    price: "₹12,000 per person ",
    duration: "4 Nights/ 5 Days",
    itinerary: [
      {
        day: "Arrival at Srinagar – Local Sightseeing & Stay on Houseboat  ",
        content: (
          <>
            <p>
              Upon arrival at Srinagar Airport, you’ll be warmly received by our
              representative and transferred to your houseboat on Dal Lake.
              After check-in, relax and soak in the tranquil lake views. Later,
              visit the Apple Garden, and the famous Mughal Gardens—Nishat Bagh
              (Garden of Pleasure) and Shalimar Bagh (Abode of Love). In the
              evening, enjoy a peaceful Shikara ride on Dal Lake, embracing the
              serene surroundings.
            </p>
            <div className={styles.DropdownBelow}>
              <img
                className={styles.dropdownIcon}
                src="src/assets/dinner.png"
              />
              <span id={styles.dropdownspan}>Dinner</span>
              <br />
              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>
                Stay at Houseboat in Srinagar
              </span>
            </div>
          </>
        ),
      },
      {
        day: "Day Excursion to Gulmarg  ",
        content: (
          <>
            <p>
              Begin the day with a tasty breakfast at the hotel, and then leave
              for a full-day tour to Gulmarg, the "Meadow of Flowers." Drive
              through villages and rice fields, taking in the rich cultural
              heritage. Go to Khilanmarg or take the famous Gondola ride (cable
              car). Take in the scenic beauty and perhaps indulge in some winter
              sports such as skiing (seasonal). In the evening, return to
              Srinagar.
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
              <span id={styles.dropdownspan}>Stay at Srinagar Hotel</span>
            </div>
          </>
        ),
      },
      {
        day: " Day Trip to Pahalgam  ",
        content: (
          <>
            <p>
              Breakfast and then proceed for a day trip to Pahalgam, also known
              as "Valley of Shepherds" or "Trekker's Paradise." The town is the
              favorite haunt of the Indian film industry and provides scenic
              natural splendor. Visit the green valleys, take pony rides, or
              just relax amidst nature.
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
              <span id={styles.dropdownspan}>Stay at Pahalgam Hotel</span>
            </div>
          </>
        ),
      },
      {
        day: "Sonamarg Day Trip – Return to Srinagar   ",
        content: (
          <>
            <p>
              Take a satisfying breakfast, and proceed to the regal Sonamarg,
              which is famous for its snow capped mountains and beautiful
              meadows. On arrival, indulge in optional activities like a pony
              ride to Thajiwas Glacier, or temple visits to Khir Bhawani and
              Narang. After an adventurous day with nature, return to Srinagar
              in the evening.
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
              <span id={styles.dropdownspan}>Stay at Srinagar Hotel</span>
            </div>
          </>
        ),
      },
      {
        day: " Departure from Srinagar ",
        content: (
          <>
            <p>
              Start your last day in Kashmir with a hearty breakfast at the
              hotel, then check out and move to Srinagar Airport for your return
              flight home, with memories of foggy mountains, picturesque
              gardens, and serene lakes.
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
        text: "Breakfast and Dinner daily at hotels (4B + 4D)  ",
      },
      {
        icon: "src/assets/include.png",
        text: "Houseboat and hotel stay  ",
      },
      {
        icon: "src/assets/include.png",
        text: "Shikara Ride on Dal Lake  ",
      },
      {
        icon: "src/assets/include.png",
        text: "Transportation with toll, parking, and driver allowance",
      },
      {
        icon: "src/assets/include.png",
        text: "All sightseeing according to itinerary ",
      },
    ],

    exclusions: [
      { icon: "src/assets/exclude.png", text: " Airfare / Train fare" },
      {
        icon: "src/assets/exclude.png",
        text: "Lunches and personal expenses ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Entry tickets to attractions  ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Travel insurance   ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Expenses due to weather, delays, or road closures  ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Anything not included in (Inclusions)",
      },
    ],
  },
};

const Kashmir = () => {
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
          <h1>Kashmir</h1>
          <p className={styles.description}>
            From snowflakes to saffron fields – Kashmir is magic you don’t
            visit, you live it.
          </p>
        </section>

        <section className={styles.content}>
          <div className={styles.left}>
            <img
              src={images[currentImageIndex]}
              alt="Dubai"
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1702967.2863314939!2d73.94534277324063!3d33.52457806085088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1092499ffa89d%3A0x6567a6d4697e7f1!2sJammu%20and%20Kashmir!5e0!3m2!1sen!2sin!4v1745656697280!5m2!1sen!2sin"
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

export default Kashmir;
