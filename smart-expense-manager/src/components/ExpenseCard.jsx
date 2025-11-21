import React from "react";
import styles from "../css/ExpenseCard.module.css";
import { MdClose } from "react-icons/md";
function ExpenseCard({ expense }) {
  return (
    <div className="bg-gray-900 my-2 text-gray-200 p-4 rounded-2xl shadow-2xl w-[calc(33%-20px)] flex flex-col gap-4 cursor-pointer relative hover:scale-105 transition-all duration-100">
      <h1 className="text-lg font-semibold">{expense.title}</h1>
      <p className="text-lg font-light">{expense.description}</p>
      <div className="flex justify-between">
        <p>Amount ₹ {expense.amount}</p>
        <p className="px-2 text-sm py-1 bg-orange-500 rounded-full">
          Mode {expense.mode}
        </p>
      </div>
      <MdClose
        size={25}
        className="hover:bg-gray-700 hover:rounded-full absolute right-5 top-5"
      />
    </div>
  );
}

export default ExpenseCard;
