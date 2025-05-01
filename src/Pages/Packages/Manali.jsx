import React, { useEffect, useState } from "react";
import styles from "./options.module.css";
import Footer from "../../Components/Footer";

import Manali1 from "../../assets/Manali1.jpg";
import Manali2 from "../../assets/Manali2.jpg";
import Manali3 from "../../assets/Manali3.jpg";
import Manali4 from "../../assets/Manali4.jpg";

const images = [Manali1, Manali2, Manali3, Manali4];

// Package data with price, itinerary, inclusions, and exclusions

const packageDetails = {
  "6 Nights/7 Days": {
    price: "₹ 14,999 per person ",
    duration: "6 Nights/7 Days",

    itinerary: [
      {
        day: " Udaipur Departure",
        content: (
          <>
            <p>
              Board an overnight train from Udaipur to Chandigarh in the
              evening. Have an overnight train ride towards your adventure
              place.
            </p>
            <div className={styles.DropdownBelow}></div>
          </>
        ),
      },
      {
        day: " Arrival at Shimla and Local Sightseeing  ",
        content: (
          <>
            <p>
              Reach Chandigarh Railway Station and proceed to Shimla (around 3-4
              hours). Check into your hotel and relax. After lunch, visit Christ
              Church, The Ridge, Viceregal Lodge, and take a leisurely stroll at
              Mall Road. Spend the evening viewing colonial architecture and
              busy street life.
            </p>
            <div className={styles.DropdownBelow}>
              <img
                className={styles.dropdownIcon}
                src="src/assets/dinner.png"
              />
              <span id={styles.dropdownspan}>Dinner</span>
              <br />
              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>Stay at Shimla Hotel</span>
            </div>
          </>
        ),
      },
      {
        day: " Kufri Adventure and Leisure ",
        content: (
          <>
            <p>
              After a good breakfast, move towards Kufri, famous for adventure
              activities such as skiing, horse riding, yak rides (self-paid).
              Visit the natural beauty of Kufri Valley. Return back to Shimla
              for evening leisure or local market visit.
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
              <span id={styles.dropdownspan}>Stay at Shimla Hotel</span>
            </div>
          </>
        ),
      },
      {
        day: "Shimla to Kasol - Riverside Camping",
        content: (
          <>
            <p>
              After breakfast, check out and proceed towards Kasol, the
              backpackers' paradise. Upon arrival, visit Kasol Market, indulge
              in local cafes, and visit Manikaran Sahib Gurudwara to witness hot
              springs. Night spent at a riverside campsite with bonfire and
              music.
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
              <span id={styles.dropdownspan}>Riverside Camp Stay in Kasol</span>
            </div>
          </>
        ),
      },
      {
        day: "Kullu River Rafting and Transfer to Manali ",
        content: (
          <>
            <p>
              Post-breakfast, check-out from Kasol. Prepare for exciting river
              rafting in Kullu (inclusive). Afterwards, visit Vaishno Devi
              Temple and proceed to Manali. Check-in at hotel and spend a
              peaceful evening bonfire.
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
              <span id={styles.dropdownspan}>Stay at Manali Hotel </span>
            </div>
          </>
        ),
      },
      {
        day: "Manali Local Sightseeing ",
        content: (
          <>
            <p>
              Post-breakfast, visit the charm of Manali to Hadimba Temple,
              Vashisht Hot Springs, Club House, and Van Vihar. Shopping time at
              Mall Road.
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
              <span id={styles.dropdownspan}>Stay at Manali Hotel </span>
            </div>
          </>
        ),
      },
      {
        day: " Atal Tunnel, Sissu Excursion and Adventure Sports",
        content: (
          <>
            <p>
              After breakfast, leave to explore Atal Tunnel and Sissu Village.
              Witness beautiful scenery, enjoy snow play, and get involved in
              Ziplining adventure (included). Return to Manali in the evening.
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
              <span id={styles.dropdownspan}>Stay at Manali Hotel</span>
            </div>
          </>
        ),
      },
      {
        day: "Trek to Jogini Waterfall and Return ",
        content: (
          <>
            <p>
              After breakfast, check out and hike to Jogini Waterfall, a scenic
              short trek. After trek, depart for Chandigarh to board your return
              train to Udaipur with memories galore.
            </p>
            <div className={styles.DropdownBelow}></div>
          </>
        ),
      },
    ],
    inclusions: [
      {
        icon: "src/assets/include.png",
        text: "Udaipur–Chandigarh–Udaipur train tickets   ",
      },
      {
        icon: "src/assets/include.png",
        text: " Hotel and camp stay on double sharing   ",
      },
      {
        icon: "src/assets/include.png",
        text: "Breakfast and Dinner daily (MAP plan)  ",
      },
      {
        icon: "src/assets/include.png",
        text: "Private Innova Crysta transport  ",
      },
      {
        icon: "src/assets/include.png",
        text: " River rafting experience at Kullu   ",
      },
      {
        icon: "src/assets/include.png",
        text: " Zipline adventure activity   ",
      },
      {
        icon: "src/assets/include.png",
        text: " Riverside camping with bonfire   ",
      },
      {
        icon: "src/assets/include.png",
        text: "Toll taxes, parking, and driver allowances  ",
      },
    ],

    exclusions: [
      {
        icon: "src/assets/exclude.png",
        text: " Personal costs such as snacks, shopping, tips ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Tickets for monuments, skiing, yak ride ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Alcoholic drinks and additional meals  ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Medical costs and travel insurance   ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Anything not mentioned specifically in inclusions   ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Additional costs resulting from natural calamities or delay    ",
      },
    ],
  },

  "3 Nights/4 Days": {
    price: "₹ 9,999 per person ",
    duration: "3 Nights/4 Days",

    itinerary: [
      {
        day: "Arrival in Manali – Local Sightseeing  ",

        content: (
          <>
            <p>
              Arrival at Manali Volvo Stand and get picked up by our driver.
              Check-in at the hotel and relax after your journey. Later, set out
              to explore local attractions like Hadimba Temple, Manu Temple,
              Club House, Tibetan Monastery, and Vashisht Hot Springs. Spend the
              evening shopping at Mall Road.
            </p>
            <div className={styles.DropdownBelow}>
              <img
                className={styles.dropdownIcon}
                src="src/assets/dinner.png"
              />
              <span id={styles.dropdownspan}>Dinner</span>
              <br />
              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>Stay at Manali Hotel</span>
            </div>
          </>
        ),
      },
      {
        day: "Solang Valley / Atal Tunnel Adventure   ",
        content: (
          <>
            <p>
              Post breakfast, depart for Solang Valley, renowned for adventure
              activities such as paragliding, horse ride, skiing, and zorbing
              (self-pay). Explore the iconic Atal Tunnel and Sissu Village for
              breathtaking landscapes and snow adventures. Return to Manali in
              the evening.
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
              <span id={styles.dropdownspan}>Stay at Manali Hotel</span>
            </div>
          </>
        ),
      },
      {
        day: " Kullu - Naggar Castle – Adventure Day ",
        content: (
          <>
            <p>
              After breakfast, check out and drive to Kullu to indulge in
              thrilling river rafting (on personal expense) and shopping for
              local handicrafts. Explore Naggar Castle and Art Gallery to admire
              traditional Himachali architecture. Free time in the evening for
              leisure and café visits at Manali.
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
              <span id={styles.dropdownspan}>Stay at Manali Hotel</span>
            </div>
          </>
        ),
      },
      {
        day: "Departure from Manali    ",
        content: (
          <>
            <p>
              After breakfast, check out of the hotel and drop at Manali Volvo
              Stand for return journey, with eternal memories in mind.
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
        text: "3 Nights accommodation in hotel (twin sharing)   ",
      },
      {
        icon: "src/assets/include.png",
        text: "Breakfast and Dinner (MAP Plan) on daily basis  ",
      },
      {
        icon: "src/assets/include.png",
        text: "Private cab for transfers and sightseeing  ",
      },
      {
        icon: "src/assets/include.png",
        text: "Pickup and Drop from Manali Volvo Stand  ",
      },
      {
        icon: "src/assets/include.png",
        text: " Solang Valley, Atal Tunnel, Sissu, Kullu, Naggar Castle sightseeing  ",
      },
    ],

    exclusions: [
      {
        icon: "src/assets/exclude.png",
        text: " Personal expenditure like shopping, snacks, tips  ",
      },
      {
        icon: "src/assets/exclude.png",
        text: " Adventure sports charges (skiing, paragliding, rafting) ",
      },
      {
        icon: "src/assets/exclude.png",
        text: " Monument entry fees  ",
      },
      {
        icon: "src/assets/exclude.png",
        text: " Travel insurance and medical emergencies   ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Check-in or late checkout fees    ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Dining that is not otherwise specifically mentioned under inclusions   ",
      },
    ],
  },
  "5 Nights/6 Days": {
    price: "₹ 11,999 per person ",
    duration: "5 Nights/6 Days",

    itinerary: [
      {
        day: " Manali Arrival and Local Sightseeing  ",

        content: (
          <>
            <p>
              Arrive at Manali Volvo Stand and get transferred to your hotel.
              Post-freshening up, go for a half-day local sightseeing tour.
              Explore the renowned Hadimba Devi Temple, Vashisht Hot Springs,
              Tibetan Monastery, Club House, and Mall Road. Relax in the evening
              amidst the cool mountain breeze and bustling local cafes.
            </p>
            <div className={styles.DropdownBelow}>
              <img
                className={styles.dropdownIcon}
                src="src/assets/dinner.png"
              />
              <span id={styles.dropdownspan}>Dinner</span>
              <br />
              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>Stay at Manali Hotel</span>
            </div>
          </>
        ),
      },
      {
        day: "Solang Valley Adventure and Atal Tunnel Excursion   ",
        content: (
          <>
            <p>
              After a rejuvenating breakfast, proceed towards Solang Valley and
              enjoy adventure activities such as paragliding, zorbing, skiing
              (self-paid). See the Atal Tunnel and visit Sissu village famous
              for its scenic views and snow sports. Return to your hotel for a
              relaxing evening.
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
              <span id={styles.dropdownspan}>Stay at Manali Hotel </span>
            </div>
          </>
        ),
      },
      {
        day: " Manikaran and Kasol Excursion",
        content: (
          <>
            <p>
              After breakfast, go for a day outing to Manikaran, which is
              renowned for its hot springs and religious significance. Visit
              Manikaran Sahib Gurudwara and stroll through the quaint village of
              Kasol, which is also called the 'Mini Israel of India'. Back to
              Manali by evening for relaxation.
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
              <span id={styles.dropdownspan}>Stay at Manali Hotel </span>
            </div>
          </>
        ),
      },
      {
        day: "Kullu Adventure and Shopping    ",
        content: (
          <>
            <p>
              After breakfast, check out for a day of adventure. Go to Kullu for
              river rafting (on your own) and visit Vaishno Devi Temple. Shop
              for woolen garments, handicrafts, and souvenirs at the Kullu
              market. In the evening, return to Manali.
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
              <span id={styles.dropdownspan}>Stay at Manali Hotel </span>
            </div>
          </>
        ),
      },
      {
        day: "Leisure Day or Optional Excursions",
        content: (
          <>
            <p>
              After breakfast, spend the day at leisure to visit Manali at your
              own convenience or take optional excursions like Naggar Castle,
              Rohtang Pass (subject to permission), or relax in the hotel with
              the peaceful views.
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
              <span id={styles.dropdownspan}>Stay at Manali Hotel </span>
            </div>
          </>
        ),
      },
      {
        day: " Departure from Manali   ",
        content: (
          <>
            <p>
              After your last breakfast at the hotel, check out and get dropped
              at Manali Volvo Stand for your journey back home with plenty of
              wonderful memories.
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
        text: "5 Nights hotel accommodation    ",
      },
      {
        icon: "src/assets/include.png",
        text: "Daily Breakfast and Dinner (MAP Plan)  ",
      },
      {
        icon: "src/assets/include.png",
        text: "Private cab for sightseeing and transfer   ",
      },
      {
        icon: "src/assets/include.png",
        text: "Pickup and Drop from Manali Volvo Stand   ",
      },
      {
        icon: "src/assets/include.png",
        text: " Sightseeing including Manali, Solang Valley, Atal Tunnel, Kasol, Manikaran, Kullu  ",
      },
    ],

    exclusions: [
      {
        icon: "src/assets/exclude.png",
        text: " Personal expenses like shopping, snacks, tips  ",
      },
      {
        icon: "src/assets/exclude.png",
        text: " Adventure activities charges (river rafting, paragliding, skiing)  ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Monument entry tickets  ",
      },
      {
        icon: "src/assets/exclude.png",
        text: " Early check-in and late checkout fee   ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Unlisted meals in the itinerary    ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Medical and travel insurance and medical charges    ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Rohtang Pass permission and transport (if applicable)     ",
      },
    ],
  },
};

const Manali = () => {
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
          <h1>Manali</h1>
          <p className={styles.description}>
            From Snowy Peaks to Pine-Scented Dreams – Manali Awaits You.
          </p>
        </section>

        <section className={styles.content}>
          <div className={styles.left}>
            <img
              src={images[currentImageIndex]}
              alt="Manali"
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26997.532023013075!2d77.1871198!3d32.23947205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39048708163fd03f%3A0x8129a80ebe5076cd!2sManali%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1745772820046!5m2!1sen!2sin"
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

export default Manali;
