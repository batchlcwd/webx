import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import ViewExpenses from "./components/ViewExpenses";
import AddExpense from "./components/AddExpense";
import toast, { Toaster } from "react-hot-toast";
import {
  addExpensesToLocal,
  getExpensesFromLocal,
} from "./services/LocalStorageService";

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

  const [firstTime, setFirstTime] = useState(true);

  //localstorage sync
  useEffect(() => {
    if (firstTime) {
      console.log("app loaded..");
      console.log(expenses);
      const exps = getExpensesFromLocal();
      if (exps) setExpenses(exps);
      setFirstTime(false);
    } else {
      addExpensesToLocal(expenses);
    }
  }, [expenses]);

  const [showExpense, setShowExpense] = useState(true);

  function toggleShowExpenses(value) {
    setShowExpense(value);
  }

  function addExpense(expense) {
    setExpenses([...expenses, expense]);
    toast.success("Expense Added");
  }

  return (
    <>
      <Toaster position="top-center" />
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
