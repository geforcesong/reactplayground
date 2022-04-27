import { useState } from "react";

function DropDownTest() {
  const [items] = useState([
    {
      label: "Luke Sky",
      value: "Luke Sky",
    },
    { label: "C-3PO", value: "C-3PO" },
    { label: "R2-D2", value: "R2-D2" },
  ]);

  const [value, setValue] = useState(null);
  return (
    <div style={{ margin: "10px" }}>
      <select value={value} onChange={(e) => setValue(e.currentTarget.value)}>
        {items.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>

      <button onClick={() => console.log("selected value", value)}>Test</button>
    </div>
  );
}

export default DropDownTest;
