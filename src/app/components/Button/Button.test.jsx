import { render, screen } from "@testing-library/react"
import Button from "./index"
import "@testing-library/jest-dom"

describe("button", ()=>{
  test("should render the button", ()=>{
    render(<Button text={"Click!"}/>)
    const button = screen.getByRole('button', {name: "Click!"})
    expect(button).toBeInTheDocument()
  })
})