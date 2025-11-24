import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyButton from "./components/MyButton";
import Header from "./components/Header";
import ViewExpenses from "./components/ViewExpenses";
import AddExpense from "./components/AddExpense";

function App() {
  const [expenses, setExpenses] = useState([
    {
      title: "Mobile Recharge",
      description: "For self, monthly recharge",
      amount: 399,
      paymentMode: "UPI",
      date: new Date(),
    },
  ]);

  const [showExpense, setShowExpense] = useState(true);

  function toggleShowExpenses(value) {
    setShowExpense(value);
  }

  function addExpense(expense) {
    setExpenses([...expenses, expense]);
  }

  return (
    <>
      <Header x={16} toggleHeader={toggleShowExpenses} />
      {showExpense ? (
        <ViewExpenses expenses={expenses} />
      ) : (
        <AddExpense addExpenseFun={addExpense} />
      )}
    </>
  );
}

export default App;
