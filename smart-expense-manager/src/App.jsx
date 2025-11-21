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
      mode: "UPI",
      datetime: new Date(),
    },
    {
      title: "Morning Tea",
      description: "For self, daily routine",
      amount: 10,
      mode: "UPI",
      datetime: new Date(),
    },
    {
      title: "Morning Tea",
      description: "For self, daily routine",
      amount: 10,
      mode: "UPI",
      datetime: new Date(),
    },
    {
      title: "Morning Tea",
      description: "For self, daily routine",
      amount: 10,
      mode: "UPI",
      datetime: new Date(),
    },
    {
      title: "Morning Tea",
      description: "For self, daily routine",
      amount: 10,
      mode: "UPI",
      datetime: new Date(),
    },
    {
      title: "Morning Tea",
      description: "For self, daily routine",
      amount: 10,
      mode: "UPI",
      datetime: new Date(),
    },
    {
      title: "Morning Tea",
      description: "For self, daily routine",
      amount: 10,
      mode: "UPI",
      datetime: new Date(),
    },
  ]);

  const [showExpense, setShowExpense] = useState(true);

  function toggleShowExpenses(value) {
    setShowExpense(value);
  }

  return (
    <>
      <Header toggleShowExpenses={toggleShowExpenses} />
      {showExpense ? <ViewExpenses expenses={expenses} /> : <AddExpense />}
    </>
  );
}

export default App;
