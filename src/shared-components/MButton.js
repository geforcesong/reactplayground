import { useEffect } from "react";
import { useState } from "react";
import styles from "./MButton.module.scss";

function MButton({ inputValue, label, width, height }) {
  const [focus, setFocus] = useState(false);
  const [content, setContent] = useState(inputValue || "");

  const handleFocus = () => {
    setFocus(() => true);
  };

  const handleBlur = () => {
    if (!content) {
      setFocus(() => false);
    }
  };

  const handleInput = (e) => {
    setContent(() => e.target.value);
  };

  useEffect(() => {
    if (content) {
      setFocus(() => true);
    }
  }, []);

  const size = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <div className={`${styles.MButton} ${focus ? styles.focus : ""}`}>
      <div className={styles.input}>
        <label>{label}</label>
        <input
          type="text"
          validation=""
          onFocus={handleFocus}
          onBlur={handleBlur}
          onInput={handleInput}
          value={content}
          style={size}
        />
      </div>
    </div>
  );
}

export default MButton;
