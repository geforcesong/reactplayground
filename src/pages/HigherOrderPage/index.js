import ClickerCounter from "./ClickerCounter";
import MouseOverCounter from "./MouseOverCounter";

function HigherOrderPage() {
  return (
    <div>
      Higher Order Components
      <ClickerCounter />
      <br />
      <br />
      <MouseOverCounter />
    </div>
  );
}

export default HigherOrderPage;
