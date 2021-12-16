import { useState } from "react";

const Child = ({ parentNum, setParentNum }) => {
  const [num, setNum] = useState(1);

  console.log("Child render");
  return (
    <div>
      This is Child, The number is {num}. and Parent num is {parentNum} <br />
      <button
        onClick={() => {
          setNum(num + 1);
          setParentNum(30);
        }}
      >
        Add One
      </button>
    </div>
  );
};

export default Child;
