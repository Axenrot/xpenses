import AddNewExpense from "./components/Expenses/AddNewExpense";
import Expenses from "./components/Expenses/Expenses";

export default function Home() {
  let expensesListExample = [
    {
      amount: -12,
      description: "Saltless Butter",
      category: "food",
      date: new Date("December 17, 1995 03:24:00"),
    },
    {
      amount: -5.6,
      description: "Chocolate Powder",
      category: "food",
      date: new Date("January 17, 2012 03:24:00"),
    },
    {
      amount: -13.85,
      description: "Rock's Chocolate",
      category: "food",
      date: new Date(),
    },
    {
      amount: -130.5,
      description: "Rock's Chocolate",
      category: "bill",
      date: new Date(),
    },
    {
      amount: 4550,
      description: "Salary",
      category: "income",
      date: new Date(),
    },
  ];

  return (
    <main className="grid items-start h-full grid-cols-4 gap-6 font-bold text-black grid-rows-8 md:grid-rows-4 lg:grid-rows-1 md:grid-cols-6 lg:grid-cols-8">
      <div className="flex flex-row h-full row-span-1 bg-gray-200 lg:row-span-1 lg:flex-col col-span-full lg:col-span-2 xl:col-span-1">
        Block 1
      </div>
      <div className="self-start h-full row-span-4 bg-gray-200 lg:row-span-1 col-span-full md:col-span-4 lg:col-span-3 xl:col-span-4">
        <Expenses expensesList={expensesListExample} currency="brl" />
      </div>
      <div className="h-full row-span-3 bg-gray-200 col-span-full sm:row-span-4 lg:row-span-1 md:col-span-2 lg:col-span-3 xl:col-span-3">
        <AddNewExpense />
      </div>
    </main>
  );
}
