"use client";
import { useRef, useState } from "react";
import Expense from "./Expense";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import Category from "../Categories/Category";

const Expenses = ({ expensesList, currency = "usd" }) => {
  function expensesTotal() {
    let total = 0;
    expensesList.forEach((expense) => {
      total += expense.amount;
    });
    return (
      <div className="flex flex-row items-start justify-between w-full gap-3 mb-6">
        <span className="flex flex-col justify-around gap-2">
          <h3 className="text-lg font-bold text-center">Top Categories</h3>
          <span className="flex justify-between gap-3">
            <div className="p-1 border-2 border-black rounded-full w-fit h-fit aspect-square">
              <Category category="food" size={20} />
            </div>
            <div className="p-1 border-2 border-black rounded-full w-fit h-fit aspect-square">
              <Category category="bill" size={20} />
            </div>
            <div className="p-1 border-2 border-black rounded-full w-fit h-fit aspect-square">
              <Category category="plant" size={20} />
            </div>
          </span>
        </span>

        <span className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold">
            You {`${total < 0 ? "Wasted" : "Saved"}`}
          </h2>

          <h3
            data-expense={total < 0}
            className="data-[expense=true]:text-red-600 text-green-600 flex items-center justify-end w-full gap-2 text-2xl"
          >
            {total < 0 ? (
              <CaretDown size={16} weight="fill" />
            ) : (
              <CaretUp size={16} weight="fill" />
            )}
            <p className="text-black">
              {Math.abs(total).toLocaleString(
                `${currency == "brl" ? "pt-br" : "en-us"}`,
                {
                  style: "currency",
                  currency: `${currency}`,
                }
              )}
            </p>
          </h3>
        </span>
      </div>
    );
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
          currency="brl"
        />
      )) || <span>Nenhuma despesa registrada</span>}
    </div>
  );
};

export default Expenses;
