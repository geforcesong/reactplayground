import { useState } from "react";

function RadioTest() {
  const [favoritePet, setFavoritePet] = useState("");
  const handleClick = () => {
    console.log("favoritePet", favoritePet);
  };
  return (
    <div>
      <label htmlFor="radCat">
        <input
          id="radCat"
          type="radio"
          value="cat"
          checked={favoritePet == "cat"}
          onChange={(e) => setFavoritePet(e.target.value)}
        />
        <span>Cat</span>
      </label>
      <label htmlFor="radDog" style={{ padding: "20px" }}>
        <input
          id="radDog"
          type="radio"
          value="dog"
          checked={favoritePet == "dog"}
          onChange={(e) => setFavoritePet(e.target.value)}
        />
        <span>Dog</span>
      </label>
      <button onClick={handleClick}>click me</button>
    </div>
  );
}

export default RadioTest;
