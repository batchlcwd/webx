import React from "react";

function Header({ toggleShowExpenses }) {
  return (
    <nav className="bg-neutral-900 py-4 text-neutral-100 flex justify-between items-center px-1 lg:px-40">
      {/* brand name */}
      <div>
        <span className="text-3xl font-semibold">SmartExpense</span>
      </div>
      {/* links */}
      <div className="flex gap-4">
        <a className="cursor-pointer hover:text-neutral-500">Features</a>
        <a
          className="cursor-pointer hover:text-neutral-500"
          onClick={() => {
            toggleShowExpenses(false);
          }}
        >
          Add
        </a>
        <a
          className="cursor-pointer hover:text-neutral-500"
          onClick={() => {
            toggleShowExpenses(true);
          }}
        >
          View
        </a>
        <a className="cursor-pointer hover:text-neutral-500">Login</a>
        <a className="cursor-pointer hover:text-neutral-500">Signup</a>
      </div>
    </nav>
  );
}

export default Header;
