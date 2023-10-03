"use client";
import { useRef, useState } from "react";
import Expense from "./Expense";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import Category from "../Categories/Category";

const Expenses = ({ expensesList, currentMonth = true }) => {
  const descriptionRef = useRef(null);
const [amount, setAmount] = useState("");
function expensesTotal(){
  let total = 0;
  expensesList.forEach(expense=>{
    total+=expense.amount
  })
  return <div className="flex flex-row self-start w-full gap-3 mb-12">
    
  <span className="flex flex-col gap-2">
  <h2 className="text-3xl font-bold">You {`${total<0 ? "Wasted": "Saved"}`}</h2>
  
  <h3 data-expense={total < 0} className="data-[expense=true]:text-red-600 text-green-600 flex items-center justify-end w-full gap-2 text-2xl">{amount < 0 ? <CaretDown size={16} weight="fill" /> : <CaretUp  size={16} weight="fill" />} <p className="text-black">{total}</p></h3>
  </span>

  <span className="flex flex-col self-end gap-2 ml-auto">
    <h3 className="font-bold text-center">Top Categories</h3>
    <span className="flex justify-between gap-3">
      <div className="p-1 border-2 border-black rounded-full w-fit h-fit aspect-square"><Category category="food" size={20} /></div>
      <div className="p-1 border-2 border-black rounded-full w-fit h-fit aspect-square"><Category category="bill" size={20} /></div>
      <div className="p-1 border-2 border-black rounded-full w-fit h-fit aspect-square"><Category category="plant" size={20} /></div>
    </span>

  </span>
  </div>
  

}
 return (
    <div className="flex flex-col gap-1 p-3 border-green-500">
      
      {expensesTotal()}

      {expensesList?.map((expense, index) => (
        <Expense
          key={`expense-${index}`}
          amount={expense?.amount}
          description={expense?.description}
          category={expense?.category}
          date={expense?.date}
        />
      )) || <span>Nenhuma despesa registrada</span>}
      {/* {currentMonth && (
        <span className="flex justify-between w-full p-2 rounded-md">
          <input
            ref={descriptionRef}
            type="text"
            placeholder="Description"
            className="text-white bg-transparent"
          />
          <input
            value={amount}
            onChange={(e) => setAmount(e?.target?.value)}
            type="text"
            placeholder="Amount"
            className="text-white bg-transparent"
          />
        </span>
      )} */}
    </div>
  );
};

export default Expenses;
