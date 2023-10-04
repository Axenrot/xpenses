import { render, screen } from "@testing-library/react";
import Expense from "./Expense";

describe("<Expense />", () => {
  test("expense should render it's amount and description", () => {
    render(<Expense amount={10} description={"Car fixes"} />);
    let amount = screen.findByText("10");
    let description = screen.findByText("Car fixes");
  });
});
