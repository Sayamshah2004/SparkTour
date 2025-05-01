import React, { useEffect, useState } from "react";
import styles from "./options.module.css";
import Footer from "../../Components/Footer";

import thailand1 from "../../assets/thailand1.jpg";
import thailand2 from "../../assets/thailand2.jpg";
import thailand3 from "../../assets/thailand3.jpg";
import thailand4 from "../../assets/thailand4.jpg";

const images = [thailand1, thailand2, thailand3, thailand4];

// Package data with price, itinerary, inclusions, and exclusions

const packageDetails = {
  "3-Star Hotels (Pattaya & Bangkok)": {
    price: "₹ 70,000 per person ",
    duration: "6 Days,5 Nights",
    itinerary: [
      {
        day: "Pattaya ",
        content: (
          <>
            <p>
              After landing at Bangkok Airport, meet our friendly local guide
              and board your Private AC Coach for a scenic 2-hour drive to
              Pattaya, the popular beach resort town on Thailand’s eastern Gulf
              coast.
              <br />
              As you settle in, enjoy your journey with brief stopovers and
              insights from the tour guide.
              <br />
              On arrival in Pattaya, enjoy a delicious Indian lunch at a local
              restaurant.
              <br />
              Later in the afternoon, embark on a guided city tour of Pattaya,
              covering famous landmarks, scenic viewpoints, and bustling streets
              that reflect the vibrant spirit of the city.
              <br /> End your day with a flavorful Indian dinner, followed by
              check-in at the hotel for rest
            </p>
            <div className={styles.DropdownBelow}>
              <img className={styles.dropdownIcon} src="src/assets/lunch.png" />
              <span id={styles.dropdownspan}>
                Indian Lunch at a local restaurant
              </span>
              <br />
              <img
                className={styles.dropdownIcon}
                src="src/assets/dinner.png"
              />
              <span id={styles.dropdownspan}>Indian Dinner</span>
              <br />
              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>
                Night stay in Golden Beach Hotel Pattaya(3-Star)
              </span>
            </div>
          </>
        ),
      },
      {
        day: "Coral Island & Alcazar Show",
        content: (
          <>
            <p>
              Start your day with a hearty breakfast at the hotel.
              <br />
              Get ready for a day full of excitement with the Coral Island Tour
              (Koh Larn). Board a speedboat and head into the blue waters to
              enjoy time on pristine beaches and optional thrilling water sports
              such as parasailing, banana boat rides, and snorkeling.
              <br />
              Return to Pattaya and recharge with Indian lunch.
              <br />
              In the evening, enjoy the world-famous Alcazar Cabaret Show,
              featuring dazzling costumes, colorful lighting, and incredible
              performances blending Thai culture with global flair. <br />
              Wrap up your day with a sumptuous Indian dinner before
              returning to the hotel.
            </p>
            <div className={styles.DropdownBelow}>
              <img
                className={styles.dropdownIcon}
                src="src/assets/breakfast.png"
              />
              <span id={styles.dropdownspan}>Breakfast</span>
              <br />
              <img className={styles.dropdownIcon} src="src/assets/lunch.png" />
              <span id={styles.dropdownspan}>Indian Lunch</span>
              <br />

              <img
                className={styles.dropdownIcon}
                src="src/assets/dinner.png"
              />
              <span id={styles.dropdownspan}>Indian Dinner</span>
              <br />
              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>
                {" "}
                Night stay in Golden Beach Hotel Pattaya(3-Star)
              </span>
            </div>
          </>
        ),
      },
      {
        day: "Pattaya-Bangkok & Temple Tour",
        content: (
          <>
            <p>
              Enjoy breakfast at the hotel and check out.
              <br />
              Begin your journey to Bangkok in a comfortable AC coach,
              accompanied by your guide.
              <b />
              Upon arrival, start the Bangkok Temple Tour, visiting iconic
              landmarks like Wat Traimit (Golden Buddha) and Wat Benchamabophit
              (Marble Temple). Experience the spiritual charm and architectural
              beauty of Thai culture.
              <br />
              Visit the Gems Gallery, where you can learn about Thailand’s
              precious stones and shop if you wish.
              <br />
              Enjoy Indian lunch at a well-rated restaurant.
              <br />
              Later, stroll through popular Bangkok street markets (optional),
              ideal for souvenir hunting and soaking in local vibes. <br />
              End the day with Indian dinner and check into your hotel for a
              restful night.
            </p>
            <div className={styles.DropdownBelow}>
              <img
                className={styles.dropdownIcon}
                src="src/assets/breakfast.png"
              />
              <span id={styles.dropdownspan}>Breakfast</span>
              <br />
              <img className={styles.dropdownIcon} src="src/assets/lunch.png" />
              <span id={styles.dropdownspan}>Indian Lunch</span>
              <br />

              <img
                className={styles.dropdownIcon}
                src="src/assets/dinner.png"
              />
              <span id={styles.dropdownspan}>Indian Dinner</span>
              <br />
              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>
                {" "}
                Night stay in Golden Beach Hotel Pattaya(3-Star)
              </span>
            </div>
          </>
        ),
      },
      {
        day: "Safari World & River Cruise ",
        content: (
          <>
            <p>
              After breakfast, head to Safari World & Marine Park, one of
              Thailand’s most popular attractions.
              <br />
              Witness exotic animals on a safari-style ride and enjoy live shows
              featuring dolphins, sea lions, and stunt performers.
              <br />
              Enjoy lunch inside the park, amidst natural surroundings.
              <br />
              In the evening, get ready for a luxury dinner cruise aboard the
              Chao Phraya Princess. Glide along Bangkok’s lifeline river while
              enjoying music, cultural performances, and a grand buffet.
              <br />
              Optional: For those interested, explore Bangkok’s nightlife with
              suggestions from your guide.
            </p>
            <div className={styles.DropdownBelow}>
              <img
                className={styles.dropdownIcon}
                src="src/assets/breakfast.png"
              />
              <span id={styles.dropdownspan}>Breakfast</span>
              <br />
              <img className={styles.dropdownIcon} src="src/assets/lunch.png" />
              <span id={styles.dropdownspan}>Indian Lunch</span>
              <br />

              <img
                className={styles.dropdownIcon}
                src="src/assets/dinner.png"
              />
              <span id={styles.dropdownspan}>Indian Dinner</span>
              <br />
              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>
                {" "}
                Night stay in Golden Beach Hotel Pattaya(3-Star)
              </span>
            </div>
          </>
        ),
      },
      {
        day: "Departure from Bangkok",
        content: (
          <>
            <p>
              Have a relaxed breakfast at your hotel.
              <br />
              Complete check-out formalities and board your Private Coach for
              transfer to Bangkok International Airport. <br />
              Carry home a bag full of memories, souvenirs, and smiles
              as you fly back!
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
        text: "Private AC Coach for all transfers & tours ",
      },
      {
        icon: "src/assets/include.png",
        text: "3-Star Hotels (Pattaya & Bangkok) ",
      },
      {
        icon: "src/assets/include.png",
        text: "Daily Breakfast & Indian Meals ",
      },
      {
        icon: "src/assets/include.png",
        text: "Entry Fees for All Mentioned Activities ",
      },
    ],

    exclusions: [
      {
        icon: "src/assets/exclude.png",
        text: " Personal Expenses such as shopping, laundry, telephone calls, room service, minibar, etc.",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Optional Water Sports at Coral Island (e.g., parasailing, snorkeling, banana boat rides) – payable directly at the activity site. ",
      },
      {
        icon: "src/assets/exclude.png",
        text: " Meals not mentioned in the itinerary or outside of pre-fixed group dining schedules. ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Any expenses due to flight delays, rescheduling, or cancellations beyond the control of the tour operator. ",
      },
      {
        icon: "src/assets/exclude.png",
        text: " Any expenses due to flight delays, rescheduling, or cancellations beyond the control of the tour operator. ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Excess Baggage Charges if weight limit exceeds airline policy. ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Camera/Video Fees at monuments or sightseeing places (if charged separately). ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Early Check-in or Late Check-out at hotels (standard hotel policy applies). ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Travel Insurance for guests above 70 years of age – to be borne additionally. ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Visa Fee (if applicable) and processing charges, if not included in your specific package. ",
      },
    ],
  },
};

const Kerala = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("itinerary");
  const [selectedPackage, setSelectedPackage] = useState(
    "3-Star Hotels (Pattaya & Bangkok)"
  );

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
          <h1>Thailand</h1>
          <p className={styles.description}>
            A vibrant mix of ancient temples, tropical beaches , and unstoppable
            energy.
          </p>
        </section>

        <section className={styles.content}>
          <div className={styles.left}>
            <img
              src={images[currentImageIndex]}
              alt="Thailand"
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11507537.997228317!2d103.18332378090956!3d11.870824980631127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304d8df747424db1%3A0x9ed72c880757e802!2sThailand!5e0!3m2!1sen!2sin!4v1745644122614!5m2!1sen!2sin"
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

export default Kerala;
