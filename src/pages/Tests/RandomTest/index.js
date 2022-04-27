import { useState } from "react";
import styles, { color0, color1, color2 } from "./random.module.scss";

const textStyles = {
  0: color0,
  1: color1,
  2: color2,
};

function RandomTest() {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    if (value < 2) {
      setValue((prev) => prev + 1);
    } else {
      setValue(() => 0);
    }
  };

  return (
    <div className={styles["random-holder"]}>
      Random Test
      <div className={textStyles[value]}>Text Color</div>
      <button onClick={handleClick}>Update</button>
    </div>
  );
}

export default RandomTest;
