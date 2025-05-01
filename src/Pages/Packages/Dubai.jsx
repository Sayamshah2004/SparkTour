import React, { useEffect, useState } from "react";
import styles from "./options.module.css";
import Footer from "../../Components/Footer";

import Dubai1 from "../../assets/Dubai1.jpg";
import Dubai2 from "../../assets/Dubai2.jpg";
import Dubai3 from "../../assets/Dubai3.jpg";
import Dubai4 from "../../assets/Dubai4.jpg";

const images = [Dubai1, Dubai2, Dubai3, Dubai4];

// Package data with price, itinerary, inclusions, and exclusions

const packageDetails = {
  "Citymax Bur Dubai (3-star)": {
    price: "₹ 74,990 per person ",
    itinerary: [
      {
        day: "Arrival in Dubai ",
        content: (
          <>
            <p>
              Upon arrival at Dubai International Airport, you will be welcomed
              and transferred to your hotel in Bur Dubai/Deira via private
              vehicle (1–7 seater). Check-in at the Citymax Hotel Bur Dubai
              (3-star) and take time to relax. The rest of the day is free for
              leisure, giving you the chance to explore nearby attractions or
              unwind. Enjoy a comfortable overnight stay at the hotel.
            </p>
            <div className={styles.DropdownBelow}>
              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>
                Stay at Citymax Bur Dubai (3-star)
              </span>
            </div>
          </>
        ),
      },
      {
        day: "Dubai City Tour & Marina Dhow Cruise ",
        content: (
          <>
            <p>
              Begin the day with a tasty breakfast at the hotel, followed by a
              half-day Dubai city tour (SIC basis), visiting key attractions
              across the city. In the evening, head for the Marina Dhow Cruise
              (SIC basis), a traditional boat ride along the illuminated
              skyline, accompanied by entertainment and a buffet dinner onboard.
              After the cruise, return for a relaxing overnight stay at the
              hotel.
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
        day: "Dubai Mall & Burj Khalifa ",
        content: (
          <>
            <p>
              Start your day with a delightful breakfast at the hotel. Today’s
              excursion includes a visit to the iconic Dubai Mall, with entry to
              the Burj Khalifa’s 124th Floor (non-prime hours) (two way SIC
              transfers included). Enjoy shopping, dining, or sightseeing within
              the mall before heading back for an overnight stay at the hotel.
            </p>
            <div className={styles.DropdownBelow}>
              <img
                className={styles.dropdownIcon}
                src="src/assets/breakfast.png"
              />
              <span id={styles.dropdownspan}>Breakfast</span>
              <br />
              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>Stay</span>
            </div>
          </>
        ),
      },
      {
        day: "Miracle Garden & Global Village  ",
        content: (
          <>
            <p>
              After a satisfying breakfast at the hotel, set out to explore the
              enchanting Miracle Garden and lively Global Village, with
              transfers and entry tickets included (SIC basis). These
              attractions offer a mix of nature, entertainment, and cultural
              experiences. Return to the hotel in the evening for a comfortable
              overnight stay.
            </p>
            <div className={styles.DropdownBelow}>
              <img
                className={styles.dropdownIcon}
                src="src/assets/breakfast.png"
              />
              <span id={styles.dropdownspan}>Breakfast</span>
              <br />
              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>Stay</span>
            </div>
          </>
        ),
      },
      {
        day: "Museum of the Future & Desert Safari with Dinner",
        content: (
          <>
            <p>
              Enjoy a delicious breakfast at the hotel, then transfer by private
              vehicle to the iconic Museum of the Future (subject to ticket
              availability). Later in the afternoon, experience the exciting
              Desert Safari (SIC basis), which includes dune bashing, cultural
              entertainment, and a lavish BBQ dinner at the desert camp. Return
              to your hotel afterward for an overnight stay.
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
              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>Stay</span>
            </div>
          </>
        ),
      },
      {
        day: " Abu Dhabi City Tour & Departure ",
        content: (
          <>
            <p>
              On your final day, begin with breakfast at the hotel, followed by
              a full-day Abu Dhabi city tour with access to any one park, such
              as Ferrari World (SIC basis). After your adventure filled day,
              return and proceed for airport drop-off in a private vehicle,
              bringing your Dubai holiday to a close.
            </p>
            <div className={styles.DropdownBelow}>
              <img
                className={styles.dropdownIcon}
                src="src/assets/breakfast.png"
              />
            </div>
          </>
        ),
      },
    ],
    inclusions: [
      {
        icon: "src/assets/include.png",
        text: "05 nights stay at Citymax Bur Dubai (3-star) on double occupancy ",
      },
      {
        icon: "src/assets/include.png",
        text: "Meal Plan: Breakfast daily; Dinners on Dhow Cruise & Desert Safari ",
      },
      {
        icon: "src/assets/include.png",
        text: "Private airport transfers (arrival & departure) ",
      },
      {
        icon: "src/assets/include.png",
        text: "Marina Dhow Cruise with Dinner – SIC ",
      },
      {
        icon: "src/assets/include.png",
        text: "Dubai City Tour – SIC ",
      },
      {
        icon: "src/assets/include.png",
        text: "Dubai Mall with Burj Khalifa entry – SIC ",
      },
      {
        icon: "src/assets/include.png",
        text: "Miracle Garden & Global Village with entry – SIC  ",
      },
      {
        icon: "src/assets/include.png",
        text: "Museum of the Future – private transfer & ticket (subject to availability) ",
      },
      {
        icon: "src/assets/include.png",
        text: "Desert Safari with BBQ Dinner – SIC ",
      },
      {
        icon: "src/assets/include.png",
        text: "Abu Dhabi City Tour + Ferrari World ticket – SIC  ",
      },
      {
        icon: "src/assets/include.png",
        text: "Visa and Travel Insurance  ",
      },
    ],

    exclusions: [
      { icon: "src/assets/exclude.png", text: " Airfare" },
      { icon: "src/assets/exclude.png", text: " TCS (if applicable) " },
      {
        icon: "src/assets/exclude.png",
        text: " Tourism Dirham (to be paid directly at the hotel) ",
      },
    ],
  },

  "Majestic Premier Bur Dubai (4-star) ": {
    price: "₹82,990 per person ",
    itinerary: [
      {
        day: "Arrival in Dubai ",
        content: (
          <>
            <p>
              Upon arrival at Dubai International Airport, you will be welcomed
              and transferred to your hotel in Bur Dubai/Deira in a private
              vehicle (1–7 seater). After checking in to the Majestic Premier
              Bur Dubai (4-star hotel), take some time to relax and settle in.
              The rest of the day is free for leisure, where you may explore the
              surrounding area or simply unwind. Enjoy a comfortable overnight
              stay at the hotel.
            </p>
            <div className={styles.DropdownBelow}>
              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>Stay</span>
            </div>
          </>
        ),
      },
      {
        day: "Dubai City Tour & Marina Dhow Cruise ",
        content: (
          <>
            <p>
              Start your morning with a delicious breakfast at the hotel, then
              set off on a fascinating half day city tour of Dubai (on SIC
              basis) covering the city's major highlights. In the evening,
              transfer (SIC) to the Marina Dhow Cruise, where you’ll enjoy a
              serene boat ride with entertainment and a delectable buffet dinner
              onboard. Return to your accommodation for a restful overnight stay
              at the hotel.
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
        day: "Dubai Mall & Burj Khalifa ",
        content: (
          <>
            <p>
              After a satisfying breakfast at the hotel, you’ll be transferred
              to the world-renowned Dubai Mall (two-way SIC transfer). There,
              enjoy an unforgettable visit to the Burj Khalifa’s 124th Floor
              (non-prime hours) for spectacular views of the city. Afterward,
              explore the mall or relax in the downtown area. Return to your
              hotel in the evening for an overnight stay.
            </p>
            <div className={styles.DropdownBelow}>
              <img
                className={styles.dropdownIcon}
                src="src/assets/breakfast.png"
              />
              <span id={styles.dropdownspan}>Breakfast</span>
              <br />
              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>Stay</span>
            </div>
          </>
        ),
      },
      {
        day: "Miracle Garden & Global Village  ",
        content: (
          <>
            <p>
              Begin the day with a hearty breakfast at the hotel. Proceed to
              explore two of Dubai’s most unique attractions—Miracle Garden, a
              botanical wonderland, followed by a cultural and entertainment
              experience at Global Village (both attractions with entry tickets
              included and SIC transfers). After the tour, return to your hotel
              for a relaxing overnight stay.
            </p>
            <div className={styles.DropdownBelow}>
              <img
                className={styles.dropdownIcon}
                src="src/assets/breakfast.png"
              />
              <span id={styles.dropdownspan}>Breakfast</span>
              <br />
              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>Stay</span>
            </div>
          </>
        ),
      },
      {
        day: "Museum of the Future & Desert Safari with Dinner",
        content: (
          <>
            <p>
              Enjoy a delightful breakfast at the hotel, then transfer (private
              vehicle) to visit the cutting edge Museum of the Future (subject
              to availability). In the afternoon, get ready for the thrilling
              Desert Safari (SIC transfer), which includes dune bashing,
              cultural performances, and a traditional BBQ dinner at the desert
              camp. After the adventure, return to the hotel for a peaceful
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
              <span id={styles.dropdownspan}>Dinner</span>
              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>Stay</span>
            </div>
          </>
        ),
      },
      {
        day: " Abu Dhabi City Tour & Departure ",
        content: (
          <>
            <p>
              On your final day, begin with breakfast at the hotel before
              setting out for a full-day Abu Dhabi city tour, which includes
              access to any one park—in this case, Ferrari World (SIC transfer).
              After the excursion, return and prepare for your departure. You’ll
              be dropped at Dubai International Airport in a private vehicle,
              marking the end of your incredible Dubai experience.
            </p>
            <div className={styles.DropdownBelow}>
              <img
                className={styles.dropdownIcon}
                src="src/assets/breakfast.png"
              />
            </div>
          </>
        ),
      },
    ],
    inclusions: [
      {
        icon: "src/assets/include.png",
        text: "05 nights stay at Majestic Premier Bur Dubai (4-star) on double occupancy  ",
      },
      {
        icon: "src/assets/include.png",
        text: "Meal Plan: Breakfast daily; Dinners on Dhow Cruise & Desert Safari ",
      },
      {
        icon: "src/assets/include.png",
        text: "Airport transfers (arrival & departure) – private vehicle  ",
      },
      {
        icon: "src/assets/include.png",
        text: "Marina Dhow Cruise with Dinner – SIC ",
      },
      {
        icon: "src/assets/include.png",
        text: "Dubai City Tour – SIC ",
      },
      {
        icon: "src/assets/include.png",
        text: "Dubai Mall with Burj Khalifa entry – SIC ",
      },
      {
        icon: "src/assets/include.png",
        text: "Miracle Garden & Global Village with entry – SIC  ",
      },
      {
        icon: "src/assets/include.png",
        text: "Museum of the Future – private transfer & ticket (subject to availability) ",
      },
      {
        icon: "src/assets/include.png",
        text: "Desert Safari with BBQ Dinner – SIC ",
      },
      {
        icon: "src/assets/include.png",
        text: "Abu Dhabi City Tour + Ferrari World ticket – SIC  ",
      },
      {
        icon: "src/assets/include.png",
        text: "Visa and Travel Insurance  ",
      },
    ],

    exclusions: [
      { icon: "src/assets/exclude.png", text: " Airfare" },
      { icon: "src/assets/exclude.png", text: " TCS (if applicable) " },
      {
        icon: "src/assets/exclude.png",
        text: " Tourism Dirham (to be paid directly at the hotel) ",
      },
    ],
  },
};

const Dubai = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("itinerary");
  const [selectedPackage, setSelectedPackage] = useState(
    "Citymax Bur Dubai (3-star)"
  );

  // Save selected package on change
  useEffect(() => {
    localStorage.setItem("selectedPackage", selectedPackage);
  }, [selectedPackage]);

  const selected = packageDetails[selectedPackage] || {};
  const {
    itinerary = [],
    price = "",
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
          <h1>Dubai</h1>
          <p className={styles.description}>
            Where luxury meets legacy, and every moment sparkles – Dubai is not
            just a place, it’s an experience.
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
                6 Days, 5 Nights
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462561.6574537445!2d55.22748795!3d25.076022449999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1745654198036!5m2!1sen!2sin"
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

export default Dubai;
