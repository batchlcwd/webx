//function to perform operatiosn with localstorage

const expenseKey = "expenses";

export const addExpensesToLocal = (expenses) => {
  localStorage.setItem(expenseKey, JSON.stringify(expenses));
};

export const getExpensesFromLocal = () => {
  const expenseStr = localStorage.getItem(expenseKey);
  if (expenseStr) return JSON.parse(expenseStr);
  return null;
};
