import { useState } from "react";

function withCounter(WrappedComponent) {
  function WithCounter() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount((prev) => prev + 1);
    };

    return <WrappedComponent count={count} incrementCount={incrementCount} />;
  }
  return WithCounter;
}

export default withCounter;
