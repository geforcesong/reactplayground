import withCounter from "./withCounter";

function ClickerCounter({ count, incrementCount }) {
  return (
    <div>
      <h1>This is ClickerCounter</h1>
      <button onClick={incrementCount}>Clicked {count} Times</button>
    </div>
  );
}

export default withCounter(ClickerCounter);
