import React from "react";

function AddExpense() {
  return (
    <div>
      <div className="max-w-xl shadow p-5 rounded mt-4 mx-auto">
        <h1 className="text-2xl font-semibold">Add Expense Here</h1>
        <form action="">
          <div className="mt-3">
            <input
              className="w-full  rounded py-2 px-3 bg-gray-300"
              placeholder="Enter expense title"
              type="text"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddExpense;
