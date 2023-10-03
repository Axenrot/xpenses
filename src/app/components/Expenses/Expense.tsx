type ExpenseProps = {
  amount: number;
  description: string;
};

const Expense = ({ amount, description }: ExpenseProps) => {
  return (
    <div className="flex justify-between w-full p-2 text-white bg-gray-500 rounded-md">
      <span>{description}</span>
      <span>
        {Number(amount).toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </span>
    </div>
  );
};

export default Expense;
