import { BudgetProvider } from "./contexts/BudgetContext";
import Budget from "./Budget";
import TestComponent from "./TestComponent";

function BudgetWrapper() {
  return (
    <BudgetProvider>
      <>
        <Budget></Budget>
        <TestComponent />
      </>
    </BudgetProvider>
  );
}

export default BudgetWrapper;
