import { ForkKnife, BeerBottle, Plant, PawPrint, Basket, Receipt, PiggyBank } from "@phosphor-icons/react";

const Category = ({category = "", size=32}) => {
  const categories = {
    "food": <ForkKnife size={size} weight="fill" />,
    "alcohol": <BeerBottle size={size} weight="fill" />,
    "plant": <Plant size={size} weight="fill" />,
    "pets": <PawPrint size={size} weight="fill" />,
    "bill": <Receipt size={size} weight="fill" />,
    "income": <PiggyBank size={size} weight="fill" />,
    "default": <Basket size={size} weight="fill" />,
  }

  if(!Object.keys(categories).includes(category)){
    return (categories["default"]);
  }

  return (categories[category]);
}
 
export default Category;