"use client";
import { useRef, useState } from "react";
import { maskDate, maskReal, maskRealReverse } from "@/app/utils/masks";
import { CheckFat } from "@phosphor-icons/react";
import CategorySelect from "../Categories/CategorySelect";
import axios from "axios";

const AddNewExpense = ({ currency = "brl" }) => {
  const descriptionRef = useRef(null);
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date());
  const [category, setCategory] = useState("");

  function addNewExpense() {
    const expenseData = {
      description: descriptionRef.current.value,
      amount: maskRealReverse(amount), // Convert amount to a float
      date: date.toISOString(), // Convert date to ISO format
      category,
    };

    axios
      .post("/api/expenses", expenseData)
      .then((response) => {
        // Handle success, e.g., show a success message or reset the form
        console.log("Expense added successfully:", response.data);
        // Reset form fields
        descriptionRef.current.value = "";
        setAmount("");
        setDate(new Date());
        setCategory("");
      })
      .catch((error) => {
        // Handle errors, e.g., show an error message
        console.error("Error adding expense:", error);
      });
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addNewExpense();
      }}
      className="flex items-start justify-between w-full p-2 text-black border rounded-md border-primary"
    >
      <CategorySelect category={category} setCategory={setCategory} />

      <span className="flex flex-col w-full mx-2">
        <input
          ref={descriptionRef}
          type="text"
          placeholder="Description"
          className="p-2 text-white transition-all duration-300 bg-black border-2 rounded-md outline-none hover:border-butter focus:border-butter hover:placeholder:text-butter focus:placeholder:text-butter"
        />
        <span className="text-sm font-normal opacity-60">{maskDate(date)}</span>
      </span>

      {/*         
        <span className="flex items-center gap-2 text-lg whitespace-nowrap">
          <span
            data-expense={amount < 0}
            className="data-[expense=true]:text-red-600 text-green-600"
          >
            {amount < 0 ? (
              <CaretDown size={16} weight="fill" />
            ) : (
              <CaretUp size={16} weight="fill" />
            )}
          </span>
  
          {Math.abs(amount).toLocaleString(
            `${currency == "brl" ? "pt-br" : "en-us"}`,
            {
              style: "currency",
              currency: `${currency}`,
            }
          )}
        </span> */}

      <span className="flex items-center gap-2">
        <input
          value={amount}
          onChange={(e) => setAmount(maskReal(e.target.value))}
          placeholder="Amount"
          className="w-full p-2 text-white transition-all duration-300 bg-black border-2 rounded-md outline-none hover:border-butter focus:border-butter hover:placeholder:text-butter focus:placeholder:text-butter"
        />
        <button className="p-1 text-white transition-all duration-200 border-2 rounded-md hover:border-butter hover:text-butter bg-charcoal">
          <CheckFat size={32} weight="fill" />
        </button>
      </span>
    </form>
  );
};

export default AddNewExpense;
