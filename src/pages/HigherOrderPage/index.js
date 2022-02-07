import ClickerCounter from "./ClickerCounter";
import MouseOverCounter from "./MouseOverCounter";
import { testVw, testPercent, parent } from "./hop.module.scss";

function HigherOrderPage() {
  return (
    <div>
      Higher Order Components
      <ClickerCounter />
      <br />
      <br />
      <MouseOverCounter />
      <br />
      <br />
      <div className={parent}>
        <div className={testVw}>vw test</div>
        <div className={testPercent}>percent test</div>
      </div>
    </div>
  );
}

export default HigherOrderPage;
