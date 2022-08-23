import React from "react"
import { render } from "@testing-library/react"
import OrderButton from "../components/OrderButton/OrderButton"

describe("OrderButton", () => {
  test("Should calculate the total price of an order", () => {
    const order = []
    render(<OrderButton order={order} setOrder={() => {}} />)
  })
})
