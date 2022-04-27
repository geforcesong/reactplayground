import { useState } from "react";

function CheckboxTest() {
  const [checked, setChecked] = useState(false);

  return (
    <div style={{ margin: "10px" }}>
      <label htmlFor="cbInput">
        <input
          id="cbInput"
          name="checked"
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(!checked)}
        />
        <span>Finished</span>
      </label>
      <button onClick={()=>console.log('checked:', checked)}>Test</button>
    </div>
  );
}

export default CheckboxTest;
