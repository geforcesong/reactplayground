import withCounter from "./withCounter";

function MouseOverCounter({ count, incrementCount }) {
  return (
    <div>
      <h1>This is ClickerCounter</h1>
      <button onMouseOver={incrementCount}>Mouseover {count} Times</button>
    </div>
  );
}

export default withCounter(MouseOverCounter);
