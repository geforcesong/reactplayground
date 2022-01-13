import BudgetCard from "./BudgetCard";
import { useBudget, UNCATEGORIZED_BUDGET_ID } from "./contexts/BudgetContext";

function UnCategorizedCard(props) {
  const { getBudgetExpenses } = useBudget();
  const amount = getBudgetExpenses(UNCATEGORIZED_BUDGET_ID)?.reduce(
    (total, expense) => total + expense.amount,
    0
  );
  if(!amount){
      return null;
  }

  return <BudgetCard amount={amount} gray {...props} name="UnCategorized" />;
}

export default UnCategorizedCard;
