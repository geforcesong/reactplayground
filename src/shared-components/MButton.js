import { useEffect } from "react";
import { useState } from "react";
import styles from "./MButton.module.scss";

function MButton({ value, label, field, width, height, onChange }) {
  const [focus, setFocus] = useState(false);
  const [content, setContent] = useState(value || "");

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
    if (onChange) {
      onChange({
        field,
        content
      });
    }
  }, [content]);

  useEffect(() => {
    setContent(() => value);
  }, [value]);

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
