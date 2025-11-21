import React, { useState } from "react";
import ExpenseCard from "./ExpenseCard";
import PrimaryButton from "./PrimaryButton";

function ViewExpenses({ expenses }) {
  function addExpense() {
    alert("add expense");
  }

  function removeExpense() {
    alert("remove expense");
  }

  return (
    <div className="p-10 lg:px-32">
      <h1 className="text-2xl font-semibold underline text-gray-800 ">
        You have done {expenses.length} total expenses this month
      </h1>

      <div className="expense-container py-5 flex gap-3 flex-wrap">
        {expenses.map((expense, index) => (
          <ExpenseCard expense={expense} key={index} />
        ))}
      </div>
      <div className="flex justify-center gap-2">
        <PrimaryButton clickFunction={addExpense} text="Add Expense" />
        {/* <PrimaryButton clickFunction={removeExpense} text="Remove Expense" /> */}
      </div>
    </div>
  );
}

export default ViewExpenses;
