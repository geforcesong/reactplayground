import { useState } from "react";
import Child from "./Child";
import StandChild from "./StandChild";

const Parent = (props) => {
  const [parentNum, setParentNum] = useState(100);

  console.log("Parent render");

  

  return (
    <div>
      This is parent
      <button
        onClick={() => {
          setParentNum(parentNum + 10);
        }}
      >Add Parent 10</button>
      <br />
      <Child parentNum={parentNum} setParentNum={setParentNum}></Child>
      <StandChild />
    </div>
  );
};

export default Parent;
