import { useBudget } from "./contexts/BudgetContext";
function TestComponent() {
  console.log(`Test Component: ${Math.random()}`);
  const { budgets } = useBudget();

  return <h1>I am TestComponent, Budget Total is: {budgets.length}</h1>;
}

export default TestComponent;
