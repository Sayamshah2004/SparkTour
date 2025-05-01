import React, { useEffect, useState } from "react";
import styles from "./options.module.css";
import Footer from "../../Components/Footer";

import Goa1 from "../../assets/Goa1.jpg";
import Goa2 from "../../assets/Goa2.jpg";
import Goa3 from "../../assets/Goa3.jpg";
import Goa4 from "../../assets/Goa4.jpg";

const images = [Goa1, Goa2, Goa3, Goa4];

// Package data with price, itinerary, inclusions, and exclusions

const packageDetails = {
  "De Mandarin Goa": {
    price: "₹ 43,999 per person ",
    duration: "4 Days,3 Nights",

    itinerary: [
      {
        day: "Arrival in Goa  ",
        content: (
          <>
            <p>
              Upon arrival in Goa, you will be picked up from the airport or
              railway station in a comfortable Innova Crysta. After reaching
              your hotel, check-in and take some time to relax and settle in.
              The rest of the day is at your leisure—you can choose to explore
              nearby beaches or indulge in delicious Goan cuisine. Enjoy a
              peaceful overnight stay at the hotel. Stay
            </p>
            <div className={styles.DropdownBelow}>
              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>Stay</span>
            </div>
          </>
        ),
      },
      {
        day: "North Goa Sightseeing  ",
        content: (
          <>
            <p>
              Start your day with a refreshing breakfast at the hotel before
              heading out for a scenic tour of North Goa. You'll visit
              historical and popular spots including Fort Aguada, Coco Beach,
              Calangute Annexe, Calangute Beach, Baga Beach, and Anjuna Beach.
              For adventure enthusiasts, optional water sports can be arranged
              at an additional cost. After a day full of sun and sand, return to
              your hotel for dinner and enjoy an overnight stay.
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
        day: "South Goa Sightseeing  ",
        content: (
          <>
            <p>
              Begin your morning with a hearty breakfast at the hotel, followed
              by a spiritual and cultural exploration of South Goa. Visit the
              revered Shri Shantadurga Temple and Shri Manguesh Temple, then
              head to the historic churches of Old Goa, including the Basilica
              of Bom Jesus and Se Cathedral. Later, take in the serene views at
              Dona Paula Bay and Miramar Beach, and spend some time shopping at
              the lively Panjim Market. In the evening, you have the option to
              enjoy a delightful Mandovi River Cruise. Return to the hotel for
              dinner and another restful overnight stay.
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
        day: "Departure   ",
        content: (
          <>
            <p>
              After enjoying your final breakfast at the hotel, check out and
              prepare for your departure. You will be dropped off at the airport
              or railway station in the Innova Crysta, concluding your memorable
              Goan getaway.
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
        text: "Daily Breakfast & Dinner (MAP Plan)  ",
      },
      {
        icon: "src/assets/include.png",
        text: "Pickup and Drop (Innova Crysta)  ",
      },
      {
        icon: "src/assets/include.png",
        text: "Private North & South Goa Tours  ",
      },
    ],

    exclusions: [
      {
        icon: "src/assets/exclude.png",
        text: " Personal expenses (e.g., shopping, snacks, etc.) ",
      },
      {
        icon: "src/assets/exclude.png",
        text: " Entry tickets and adventure sports charges  ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Anything not mentioned in the itinerary  ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Alcoholic beverages / Extra meals   ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Parking charges during sightseeing   ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Dudhsagar Waterfall Visit (available at extra nominal cost)   ",
      },
    ],
  },

  "Le Seasons Resort ": {
    price: "₹ 44,999 per person ",
    duration: "4 Days , 3 Nights",

    itinerary: [
      {
        day: "Arrival in Goa  ",

        content: (
          <>
            <p>
              Upon arrival in Goa, you will be picked up from the airport or
              railway station in a comfortable Innova Crysta. After reaching
              your hotel, check-in and take some time to relax and settle in.
              The rest of the day is at your leisure—you can choose to explore
              nearby beaches or indulge in delicious Goan cuisine. Enjoy a
              peaceful overnight stay at the hotel. Stay
            </p>
            <div className={styles.DropdownBelow}>
              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>Stay</span>
            </div>
          </>
        ),
      },
      {
        day: "North Goa Sightseeing  ",
        content: (
          <>
            <p>
              Start your day with a refreshing breakfast at the hotel before
              heading out for a scenic tour of North Goa. You'll visit
              historical and popular spots including Fort Aguada, Coco Beach,
              Calangute Annexe, Calangute Beach, Baga Beach, and Anjuna Beach.
              For adventure enthusiasts, optional water sports can be arranged
              at an additional cost. After a day full of sun and sand, return to
              your hotel for dinner and enjoy an overnight stay.
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
        day: "South Goa Sightseeing  ",
        content: (
          <>
            <p>
              Begin your morning with a hearty breakfast at the hotel, followed
              by a spiritual and cultural exploration of South Goa. Visit the
              revered Shri Shantadurga Temple and Shri Manguesh Temple, then
              head to the historic churches of Old Goa, including the Basilica
              of Bom Jesus and Se Cathedral. Later, take in the serene views at
              Dona Paula Bay and Miramar Beach, and spend some time shopping at
              the lively Panjim Market. In the evening, you have the option to
              enjoy a delightful Mandovi River Cruise. Return to the hotel for
              dinner and another restful overnight stay.
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
        day: "Departure   ",
        content: (
          <>
            <p>
              After enjoying your final breakfast at the hotel, check out and
              prepare for your departure. You will be dropped off at the airport
              or railway station in the Innova Crysta, concluding your memorable
              Goan getaway.
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
        text: "Daily Breakfast & Dinner (MAP Plan)  ",
      },
      {
        icon: "src/assets/include.png",
        text: "Pickup and Drop (Innova Crysta)  ",
      },
      {
        icon: "src/assets/include.png",
        text: "Private North & South Goa Tours  ",
      },
    ],

    exclusions: [
      {
        icon: "src/assets/exclude.png",
        text: " Personal expenses (e.g., shopping, snacks, etc.) ",
      },
      {
        icon: "src/assets/exclude.png",
        text: " Entry tickets and adventure sports charges  ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Anything not mentioned in the itinerary  ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Alcoholic beverages / Extra meals   ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Parking charges during sightseeing   ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Dudhsagar Waterfall Visit (available at extra nominal cost)   ",
      },
    ],
  },
  "Ocean Palm Pool View Jacuzzi ": {
    price: "₹ 54,999 per person ",
    duration: "4 Days , 3 Nights",

    itinerary: [
      {
        day: "Arrival in Goa  ",

        content: (
          <>
            <p>
              Upon arrival in Goa, you will be picked up from the airport or
              railway station in a comfortable Innova Crysta. After reaching
              your hotel, check-in and take some time to relax and settle in.
              The rest of the day is at your leisure—you can choose to explore
              nearby beaches or indulge in delicious Goan cuisine. Enjoy a
              peaceful overnight stay at the hotel. Stay
            </p>
            <div className={styles.DropdownBelow}>
              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>Stay</span>
            </div>
          </>
        ),
      },
      {
        day: "North Goa Sightseeing  ",
        content: (
          <>
            <p>
              Start your day with a refreshing breakfast at the hotel before
              heading out for a scenic tour of North Goa. You'll visit
              historical and popular spots including Fort Aguada, Coco Beach,
              Calangute Annexe, Calangute Beach, Baga Beach, and Anjuna Beach.
              For adventure enthusiasts, optional water sports can be arranged
              at an additional cost. After a day full of sun and sand, return to
              your hotel for dinner and enjoy an overnight stay.
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
        day: "South Goa Sightseeing  ",
        content: (
          <>
            <p>
              Begin your morning with a hearty breakfast at the hotel, followed
              by a spiritual and cultural exploration of South Goa. Visit the
              revered Shri Shantadurga Temple and Shri Manguesh Temple, then
              head to the historic churches of Old Goa, including the Basilica
              of Bom Jesus and Se Cathedral. Later, take in the serene views at
              Dona Paula Bay and Miramar Beach, and spend some time shopping at
              the lively Panjim Market. In the evening, you have the option to
              enjoy a delightful Mandovi River Cruise. Return to the hotel for
              dinner and another restful overnight stay.
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
        day: "Departure   ",
        content: (
          <>
            <p>
              After enjoying your final breakfast at the hotel, check out and
              prepare for your departure. You will be dropped off at the airport
              or railway station in the Innova Crysta, concluding your memorable
              Goan getaway.
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
        text: "Daily Breakfast & Dinner (MAP Plan)  ",
      },
      {
        icon: "src/assets/include.png",
        text: "Pickup and Drop (Innova Crysta)  ",
      },
      {
        icon: "src/assets/include.png",
        text: "Private North & South Goa Tours  ",
      },
    ],

    exclusions: [
      {
        icon: "src/assets/exclude.png",
        text: " Personal expenses (e.g., shopping, snacks, etc.) ",
      },
      {
        icon: "src/assets/exclude.png",
        text: " Entry tickets and adventure sports charges  ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Anything not mentioned in the itinerary  ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Alcoholic beverages / Extra meals   ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Parking charges during sightseeing   ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Dudhsagar Waterfall Visit (available at extra nominal cost)   ",
      },
    ],
  },
  "Ocean Palm Junior Suite": {
    price: "₹ 58,999 per person ",
    duration: "4 Days , 3 Nights",

    itinerary: [
      {
        day: "Arrival in Goa  ",
        content: (
          <>
            <p>
              Upon arrival in Goa, you will be picked up from the airport or
              railway station in a comfortable Innova Crysta. After reaching
              your hotel, check-in and take some time to relax and settle in.
              The rest of the day is at your leisure—you can choose to explore
              nearby beaches or indulge in delicious Goan cuisine. Enjoy a
              peaceful overnight stay at the hotel. Stay
            </p>
            <div className={styles.DropdownBelow}>
              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>Stay</span>
            </div>
          </>
        ),
      },
      {
        day: "North Goa Sightseeing  ",
        content: (
          <>
            <p>
              Start your day with a refreshing breakfast at the hotel before
              heading out for a scenic tour of North Goa. You'll visit
              historical and popular spots including Fort Aguada, Coco Beach,
              Calangute Annexe, Calangute Beach, Baga Beach, and Anjuna Beach.
              For adventure enthusiasts, optional water sports can be arranged
              at an additional cost. After a day full of sun and sand, return to
              your hotel for dinner and enjoy an overnight stay.
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
        day: "South Goa Sightseeing  ",
        content: (
          <>
            <p>
              Begin your morning with a hearty breakfast at the hotel, followed
              by a spiritual and cultural exploration of South Goa. Visit the
              revered Shri Shantadurga Temple and Shri Manguesh Temple, then
              head to the historic churches of Old Goa, including the Basilica
              of Bom Jesus and Se Cathedral. Later, take in the serene views at
              Dona Paula Bay and Miramar Beach, and spend some time shopping at
              the lively Panjim Market. In the evening, you have the option to
              enjoy a delightful Mandovi River Cruise. Return to the hotel for
              dinner and another restful overnight stay.
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
        day: "Departure   ",
        content: (
          <>
            <p>
              After enjoying your final breakfast at the hotel, check out and
              prepare for your departure. You will be dropped off at the airport
              or railway station in the Innova Crysta, concluding your memorable
              Goan getaway.
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
        text: "Daily Breakfast & Dinner (MAP Plan)  ",
      },
      {
        icon: "src/assets/include.png",
        text: "Pickup and Drop (Innova Crysta)  ",
      },
      {
        icon: "src/assets/include.png",
        text: "Private North & South Goa Tours  ",
      },
    ],

    exclusions: [
      {
        icon: "src/assets/exclude.png",
        text: " Personal expenses (e.g., shopping, snacks, etc.) ",
      },
      {
        icon: "src/assets/exclude.png",
        text: " Entry tickets and adventure sports charges  ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Anything not mentioned in the itinerary  ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Alcoholic beverages / Extra meals   ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Parking charges during sightseeing   ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Dudhsagar Waterfall Visit (available at extra nominal cost)   ",
      },
    ],
  },
  "Hard Rock Goa ": {
    price: "₹ 59,000 per person ",
    duration: "4 Days , 3 Nights",

    itinerary: [
      {
        day: "Arrival in Goa  ",
        content: (
          <>
            <p>
              Upon arrival in Goa, you will be picked up from the airport or
              railway station in a comfortable Innova Crysta. After reaching
              your hotel, check-in and take some time to relax and settle in.
              The rest of the day is at your leisure—you can choose to explore
              nearby beaches or indulge in delicious Goan cuisine. Enjoy a
              peaceful overnight stay at the hotel. Stay
            </p>
            <div className={styles.DropdownBelow}>
              <img className={styles.dropdownIcon} src="src/assets/bed.png" />
              <span id={styles.dropdownspan}>Stay</span>
            </div>
          </>
        ),
      },
      {
        day: "North Goa Sightseeing  ",
        content: (
          <>
            <p>
              Start your day with a refreshing breakfast at the hotel before
              heading out for a scenic tour of North Goa. You'll visit
              historical and popular spots including Fort Aguada, Coco Beach,
              Calangute Annexe, Calangute Beach, Baga Beach, and Anjuna Beach.
              For adventure enthusiasts, optional water sports can be arranged
              at an additional cost. After a day full of sun and sand, return to
              your hotel for dinner and enjoy an overnight stay.
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
        day: "South Goa Sightseeing  ",
        content: (
          <>
            <p>
              Begin your morning with a hearty breakfast at the hotel, followed
              by a spiritual and cultural exploration of South Goa. Visit the
              revered Shri Shantadurga Temple and Shri Manguesh Temple, then
              head to the historic churches of Old Goa, including the Basilica
              of Bom Jesus and Se Cathedral. Later, take in the serene views at
              Dona Paula Bay and Miramar Beach, and spend some time shopping at
              the lively Panjim Market. In the evening, you have the option to
              enjoy a delightful Mandovi River Cruise. Return to the hotel for
              dinner and another restful overnight stay.
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
        day: "Departure   ",
        content: (
          <>
            <p>
              After enjoying your final breakfast at the hotel, check out and
              prepare for your departure. You will be dropped off at the airport
              or railway station in the Innova Crysta, concluding your memorable
              Goan getaway.
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
        text: "Daily Breakfast & Dinner (MAP Plan)  ",
      },
      {
        icon: "src/assets/include.png",
        text: "Pickup and Drop (Innova Crysta)  ",
      },
      {
        icon: "src/assets/include.png",
        text: "Private North & South Goa Tours  ",
      },
    ],

    exclusions: [
      {
        icon: "src/assets/exclude.png",
        text: " Personal expenses (e.g., shopping, snacks, etc.) ",
      },
      {
        icon: "src/assets/exclude.png",
        text: " Entry tickets and adventure sports charges  ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Anything not mentioned in the itinerary  ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Alcoholic beverages / Extra meals   ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Parking charges during sightseeing   ",
      },
      {
        icon: "src/assets/exclude.png",
        text: "Dudhsagar Waterfall Visit (available at extra nominal cost)   ",
      },
    ],
  },
};

const Goa = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("itinerary");
  const [selectedPackage, setSelectedPackage] = useState("De Mandarin Goa");

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
          <h1>Goa</h1>
          <p className={styles.description}>
            Golden sands, vibrant shacks, and a pulse that never sleeps – Goa is
            a vibe you live, not just visit.
          </p>
        </section>

        <section className={styles.content}>
          <div className={styles.left}>
            <img
              src={images[currentImageIndex]}
              alt="Goa"
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d492479.1876321049!2d74.00669440000003!3d15.349728449999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba106336b741%3A0xeaf887ff62f34092!2sGoa!5e0!3m2!1sen!2sin!4v1745653617314!5m2!1sen!2sin"
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

export default Goa;
