import React, { useContext, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";

export const BudgetContext = React.createContext();

export const  UNCATEGORIZED_BUDGET_ID = 'Uncategorized';

export function useBudget() {
  return useContext(BudgetContext);
}

export const BudgetProvider = ({ children }) => {
  const [budgets, setBudgets] = useLocalStorage("budgets", []);
  const [expenses, setExpenses] = useLocalStorage("expenses", []);

  function getBudgetExpenses(budgetId) {
    return expenses.filter((e) => e.budgetId === budgetId);
  }
  function addBudget({ name, max }) {
    if (budgets.find((b) => b.name === name)) {
      return;
    }
    const newBudgets = [...budgets, { id: uuidV4(), name, max }];
    setBudgets(newBudgets);
  }
  function addExpense({ description, amount, budgetId }) {
    const newExpenses = [
      ...expenses,
      { id: uuidV4(), description, amount, budgetId },
    ];
    setExpenses(newExpenses);
  }
  function deleteBudget({ id }) {
    setBudgets((preBudgets) => {
      return preBudgets.filter((budget) => budget.id !== id);
    });
  }
  function deleteExpense({ id }) {
    setExpenses((preExpenses) => {
      return preExpenses.filter((expense) => expense.id !== id);
    });
  }

  return (
    <BudgetContext.Provider
      value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addBudget,
        addExpense,
        deleteBudget,
        deleteExpense,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
