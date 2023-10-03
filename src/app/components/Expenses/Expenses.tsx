import { useRef, useState } from "react";
import Expense from "./Expense";

interface ExpenseItem {
  amount: number;
  description: string;
}

type ExpensesProps = {
  expensesList: ExpenseItem[];
  currentMonth?: boolean;
};

const Expenses = ({ expensesList, currentMonth = true }: ExpensesProps) => {
  const descriptionRef = useRef(null);
  const [amount, setAmount] = useState("");
  return (
    <div className="flex flex-col gap-1 border-green-500">
      {expensesList?.map((expense, index) => (
        <Expense
          key={`expense-${index}`}
          amount={expense?.amount}
          description={expense?.description}
        />
      )) || <span>Nenhuma despesa registrada</span>}
      {currentMonth && (
        <span className="w-full flex justify-between bg-gray-700 p-2 rounded-md">
          <input
            value={amount}
            onChange={(e) => setAmount(e?.target?.value)}
            type="text"
            placeholder="Amount"
            className="bg-transparent text-white"
          />
          <input
            ref={descriptionRef}
            type="text"
            placeholder="Description"
            className="bg-transparent text-white"
          />
        </span>
      )}
    </div>
  );
};

export default Expenses;
