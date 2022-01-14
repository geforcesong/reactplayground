import { Container, Stack, Button } from "react-bootstrap";
import styles, {testDiv} from "./Budget.module.scss";
import BudgetCard from "./BudgetCard";
import { UNCATEGORIZED_BUDGET_ID, useBudget } from "./contexts/BudgetContext";
import AddBudgetModal from "./AddBudgetModal";
import AddExpenseModal from "./AddExpenseModal";
import { useState } from "react";
import UnCategorizedCard from "./UnCategorizedCard";
import ViewExpenseModal from "./ViewExpenseModal";


function Budget() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  const [showAddExpenseModalBudgetId, setShowAddExpenseModalBudgetId] =
    useState(false);

    const [viewExpenseModalBudgetId, setViewExpenseModalBudgetId] =
    useState(null);



  const { budgets, getBudgetExpenses } = useBudget();

  function openAddExpenseModal(budgetId) {
    setShowAddExpenseModal(true);
    setShowAddExpenseModalBudgetId(budgetId);
  }

  return (
    <>
      <Container className="my-4">
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Budget</h1>
          <Button variant="primary" onClick={() => setShowAddBudgetModal(true)}>
            Add Budget
          </Button>
          <Button variant="outline-primary" onClick={openAddExpenseModal}>
            Add Expense
          </Button>
        </Stack>
        <div className={styles["budget-grid"]}>
          {budgets?.map((budget) => {
            const amount = getBudgetExpenses(budget.id)?.reduce(
              (total, expense) => total + expense.amount,
              0
            );
            return (
              <BudgetCard
                key={budget.id}
                name={budget.name}
                amount={amount}
                max={budget.max}
                onAddExpenseClick={() => openAddExpenseModal(budget.id)}
                onViewExpenseClick = {() => setViewExpenseModalBudgetId(budget.id)}
              />
            );
          })}
          <UnCategorizedCard onAddExpenseClick={openAddExpenseModal} onViewExpenseClick = {() => setViewExpenseModalBudgetId(UNCATEGORIZED_BUDGET_ID)} />
        </div>
        <div className={testDiv}>dfs</div>
      </Container>
      <AddBudgetModal
        show={showAddBudgetModal}
        handleClose={() => setShowAddBudgetModal(false)}
      />
      <AddExpenseModal
        show={showAddExpenseModal}
        defaultBudgetId={showAddExpenseModalBudgetId}
        handleClose={() => setShowAddExpenseModal(false)}
      />
      <ViewExpenseModal budgetId={viewExpenseModalBudgetId} handleClose={()=>setViewExpenseModalBudgetId(null)}  />
    </>
  );
}

export default Budget;
