import React, { useState } from "react";
import { BiDollar } from "react-icons/bi";
import { CgAdd } from "react-icons/cg";
import MyButton from "./MyButton";
import PrimaryButton from "./PrimaryButton";
import toast from "react-hot-toast";

function todayISO() {
  console.log(new Date().toISOString());
  return new Date().toISOString().slice(0, 10);
}

function AddExpense({ addExpenseFun }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    amount: 10,
    paymentMode: "upi",
    date: todayISO(),
  });

  const [error, setError] = useState({
    title: "",
    description: "",
    amount: "",
    paymentMode: "",
    date: "",
    isError: false,
  });

  /*

  handleChange(title,mobile recharge')
  handleChange(amount,20)


  */
  function handleChange(event) {
    console.log(event);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  //function for form submission

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formData);

    let errorLocal = {
      title: "",
      description: "",
      amount: "",
      paymentMode: "",
      date: "",
      isError: false,
    };

    if (formData.title.trim() === "") {
      //title
      errorLocal.title = "Name is required !!";
      errorLocal.isError = true;
    }

    if (formData.description.trim() === "") {
      errorLocal.description = "Description is required !!";
      errorLocal.isError = true;
    }

    if (formData.amount === "") {
      errorLocal.amount = "Invalid amount";
      errorLocal.isError = true;
    } else if (formData.amount <= 0) {
      errorLocal.amount = "Amount cannot be negative Value !!";
      errorLocal.isError = true;
    }

    //validation

    // if (formData.title.trim() === "") {
    //   toast.error("Title required !!");
    //   return;
    // } else if (formData.title.length < 4) {
    //   toast.error("Title must be atleast 5 characters");
    //   return;
    // }

    // //description validations

    // if (formData.description.trim() === "") {
    //   toast.error("Description required !!");
    //   return;
    // }

    //set global
    setError({ ...errorLocal });

    if (errorLocal.isError) {
      toast.error("Your form is invalid");
      return;
    }

    addExpenseFun(formData);
    // alert("Expese added");
    setFormData({
      title: "",
      description: "",
      amount: 10,
      paymentMode: "upi",
      date: todayISO(),
    });
  }
  return (
    <div>
      <div className="max-w-xl shadow p-5 rounded mt-4 mx-auto">
        <BiDollar size={40} />
        <h1 className="text-2xl font-semibold">Add Expense Here</h1>
        <p className="font-light">
          Add your expense detail here by filling this form..
        </p>
        {error.isError && (
          <p className="text-red-600 py-4 border rounded my-2 px-2">
            You form has an error, Form is Invalid
          </p>
        )}
        {/* {JSON.stringify(formData)} */}
        <form noValidate onSubmit={handleFormSubmit}>
          <div className="mt-5 flex flex-col gap-4">
            {/* expense title */}
            <div>
              <label
                formHtml="expense_title"
                class="block ml-2 mb-1 text-sm font-medium text-heading"
              >
                Expense Title
              </label>
              <input
                name="title"
                type="text"
                id="expense_title"
                className=" rounded-xl px-4 py-2 w-full bg-gray-300"
                placeholder="Enter here"
                onChange={handleChange}
                value={formData.title}
                required
              />
              {error.title && (
                <p className="text-red-500 mt-1 pl-2">{error.title}</p>
              )}
            </div>

            {/* Expense desc */}
            <div>
              <label
                forHtml="expense_desc"
                class="block ml-2 mb-1 text-sm font-medium text-heading"
              >
                Description
              </label>
              <textarea
                name="description"
                id="expense_desc"
                placeholder="Enter here"
                className="rounded-xl h-30 px-4 py-2 w-full bg-gray-300"
                onChange={handleChange}
                value={formData.description}
              ></textarea>
              {error.description && (
                <p className="text-red-500 mt-1 pl-2">{error.description}</p>
              )}
            </div>

            {/* amount + mode */}
            <div className="flex  flex-wrap gap-3">
              <div className="w-1/2">
                {/* amound */}
                <label
                  forHtml="expense_amt"
                  class="block ml-2 mb-1 text-sm font-medium text-heading"
                >
                  Amount
                </label>
                <input
                  name="amount"
                  type="number"
                  id="expense_amt"
                  className=" rounded-xl px-4 py-2 w-full bg-gray-300"
                  placeholder="Enter here"
                  onChange={handleChange}
                  value={formData.amount}
                  required
                />
                {error.amount && (
                  <p className="text-red-500 mt-1 pl-2">{error.amount}</p>
                )}
              </div>
              <div className="flex-1">
                {/* payment mode */}
                <label
                  formHtml="payment_mode"
                  class="block ml-2 mb-1 text-sm font-medium text-heading"
                >
                  Payment Mode
                </label>

                <select
                  name="paymentMode"
                  id="payment_mode"
                  className=" rounded-xl px-4 py-2 w-full bg-gray-300"
                  onChange={handleChange}
                  value={formData.paymentMode}
                >
                  <option value="upi">✅UPI</option>
                  <option value="card">💳Card</option>
                  <option value="cash">💵Cash</option>
                </select>
                {error.paymentMode && (
                  <p className="text-red-500 mt-1 pl-2">{error.paymentMode}</p>
                )}
              </div>
            </div>

            {/* date */}
            <div>
              <label
                forHtml="date"
                class="block ml-2 mb-1 text-sm font-medium text-heading"
              >
                Date
              </label>
              <input
                name="date"
                type="date"
                id="date"
                className=" rounded-xl px-4 py-2 w-full bg-gray-300"
                placeholder="Enter here"
                onChange={handleChange}
                value={formData.date}
                required
              />
              {error.date && (
                <p className="text-red-500 mt-1 pl-2">{error.date}</p>
              )}
            </div>
            {/* buttons */}
            <div className="flex justify-center gap-2">
              <PrimaryButton type="submit" text="Add Expense" />
              <PrimaryButton
                classes="bg-blue-600 hover:bg-blue-500 text-white"
                type="button"
                text="Clear"
                clickFunction={(event) => {
                  setFormData({
                    title: "",
                    description: "",
                    amount: 10,
                    paymentMode: "upi",
                    date: todayISO(),
                  });
                }}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddExpense;
