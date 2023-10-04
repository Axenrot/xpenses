import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { maskDate } from "../../utils/masks.js";
import Category from "../Categories/Category.jsx";

const Expense = ({ amount, description, category, date, currency = "usd" }) => {
  return (
    <div className="flex items-center justify-between w-full p-2 text-black rounded-md">
      <span className="flex items-center justify-start h-full w-fit">
        {<Category category={category} />}
      </span>
      <span className="flex flex-col w-full mx-2">
        <p>{description}</p>
        <span className="text-sm font-normal opacity-60">{maskDate(date)}</span>
      </span>
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
      </span>
    </div>
  );
};

export default Expense;
