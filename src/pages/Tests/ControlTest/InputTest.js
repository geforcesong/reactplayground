import { useState } from "react";

function InputTest() {
  const [inputValue, setInputValue] = useState("");
  const handleClick = () => {
    console.log(`inputValue: ${inputValue}`);
    // setInputValue(() => "");
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleClick}>Test</button>
    </div>
  );
}

export default InputTest;
