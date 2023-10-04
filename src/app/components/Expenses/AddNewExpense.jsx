"use client";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { useRef, useState } from "react";

const AddNewExpense = () => {
  const descriptionRef = useRef(null);
  const [amount, setAmount] = useState("");

  return (
    <div className="flex flex-col w-full gap-3 p-3">
      <h2 className="text-lg font-bold">Add New Expense</h2>
      <span className="flex flex-col justify-between w-full gap-3 border rounded-md">
        <input
          ref={descriptionRef}
          type="text"
          placeholder="Description"
          className="p-2 text-white bg-black outline-none"
        />
        <span className="flex w-full">
          {/* <select name="" id="" placeholder="positive">
            <option value="-" className="text-red-600">
              <CaretDown size={16} weight="fill" />
            </option>
            <option value="+">
              <CaretUp size={16} weight="fill" />
            </option>
          </select> */}
          <input
            value={amount}
            onChange={(e) => setAmount(e?.target?.value)}
            type="text"
            placeholder="Amount"
            className="w-full p-2 text-white bg-black outline-none"
          />
        </span>
      </span>
    </div>
  );
};

export default AddNewExpense;
