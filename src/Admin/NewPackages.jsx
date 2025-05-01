import { useState } from "react";
import styles from "./NewPackages.module.css";
import AdminNav from "./AdminNav";

const NewPackages = () => {
  const [days, setDays] = useState([
    {
      description: "",
      meals: { breakfast: false, lunch: false, dinner: false, stay: false },
    },
    {
      description: "",
      meals: { breakfast: false, lunch: false, dinner: false, stay: false },
    },
  ]);
  const [inclusions, setInclusions] = useState([""]);
  const [exclusions, setExclusions] = useState([""]);

  const handleDayChange = (index, value) => {
    const newDays = [...days];
    newDays[index].description = value;
    setDays(newDays);
  };

  const handleMealChange = (index, mealType, value) => {
    const newDays = [...days];
    newDays[index].meals[mealType] = value;
    setDays(newDays);
  };

  const addDay = () => {
    setDays([
      ...days,
      {
        description: "",
        meals: { breakfast: false, lunch: false, dinner: false, stay: false },
      },
    ]);
  };

  const handleInclusionChange = (index, value) => {
    const newList = [...inclusions];
    newList[index] = value;
    setInclusions(newList);
  };

  const addInclusion = () => {
    setInclusions([...inclusions, ""]);
  };

  const handleExclusionChange = (index, value) => {
    const newList = [...exclusions];
    newList[index] = value;
    setExclusions(newList);
  };

  const addExclusion = () => {
    setExclusions([...exclusions, ""]);
  };

  return (
    <>
      <div className={styles.container}>
        <form className={styles.form}>
          <label>
            City/Country Name:
            <input type="text" />
          </label>

          <label>
            Tagline:
            <input type="text" />
          </label>

          <div className={styles.inlineInputs}>
            <label>
              Number of Days:
              <input type="number" />
            </label>
            <label>
              Price:
              <input type="number" />
            </label>
          </div>

          <h3 className={styles.itinerary}>Itinerary</h3>
          {days.map((day, index) => (
            <div key={index} className={styles.daySection}>
              <label>Day {index + 1}:</label>
              <textarea
                value={day.description}
                onChange={(e) => handleDayChange(index, e.target.value)}
              />
              <div className={styles.mealOptions}>
                {["breakfast", "lunch", "dinner", "stay"].map((meal) => (
                  <label key={meal}>
                    {meal.charAt(0).toUpperCase() + meal.slice(1)}:
                    <input
                      type="radio"
                      className={styles.YesButton}
                      name={`${meal}${index}`}
                      checked={day.meals[meal] === true}
                      onChange={() => handleMealChange(index, meal, true)}
                    />
                    Yes
                    <input
                      type="radio"
                      className={styles.NoButton}
                      name={`${meal}${index}`}
                      checked={day.meals[meal] === false}
                      onChange={() => handleMealChange(index, meal, false)}
                    />
                    No
                  </label>
                ))}
              </div>
            </div>
          ))}
          <button type="button" className={styles.addButton} onClick={addDay}>
            ➕
          </button>

          <h3 className={styles.itinerary}>Tour Inclusions</h3>
          {inclusions.map((item, index) => (
            <input
              key={index}
              type="text"
              value={item}
              onChange={(e) => handleInclusionChange(index, e.target.value)}
            />
          ))}
          <button
            type="button"
            className={styles.addButton}
            onClick={addInclusion}
          >
            ➕
          </button>

          <h3 className={styles.itinerary}>Tour Exclusions</h3>
          {exclusions.map((item, index) => (
            <input
              key={index}
              type="text"
              value={item}
              onChange={(e) => handleExclusionChange(index, e.target.value)}
            />
          ))}
          <button
            type="button"
            className={styles.addButton}
            onClick={addExclusion}
          >
            ➕
          </button>

          <div className={styles.formButtons}>
            <button type="button" className={styles.cancel}>
              Cancel
            </button>
            <button type="submit" className={styles.submit}>
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewPackages;
