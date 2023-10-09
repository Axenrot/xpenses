import {
  ForkKnife,
  BeerBottle,
  Plant,
  PawPrint,
  Basket,
  Receipt,
  PiggyBank,
  PencilSimple,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import Category from "./Category";
import SelectOptions from "../Input/SelectOptions";

const CategorySelect = ({
  category = "",
  setCategory = () => {},
  size = 32,
}) => {
  const categories = {
    food: <ForkKnife size={size} weight="fill" />,
    alcohol: <BeerBottle size={size} weight="fill" />,
    plant: <Plant size={size} weight="fill" />,
    pets: <PawPrint size={size} weight="fill" />,
    bill: <Receipt size={size} weight="fill" />,
    income: <PiggyBank size={size} weight="fill" />,
    default: <Basket size={size} weight="fill" />,
  };

  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (!category) {
      setCategory(Object.keys(categories)[0]);
    }
  });

  return (
    <button
      onClick={() => {
        setEdit(!edit);
      }}
      className="relative flex items-center justify-start h-full gap-1 p-3 text-white transition-all duration-300 border-2 rounded-md hover:border-butter hover:text-butter group aspect-square w-fit bg-charcoal"
    >
      <Category category={category} setCategory={setCategory} />
      <PencilSimple
        size={10}
        weight="fill"
        className="absolute self-start right-1 bottom-[5px]"
      />
      {edit && (
        <SelectOptions options={categories} setSelectedOption={setCategory} />
      )}
    </button>
  );
};

export default CategorySelect;
