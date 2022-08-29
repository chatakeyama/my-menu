import React from "react"
import ListItemMenu from "../components/ListItemMenu/ListItemMenu"
import "@testing-library/jest-dom"
import { render } from "@testing-library/react"

describe("ListItemMenu component", () => {
  test("Initial conditions", () => {
    const order = []
    const oderUpdated = null
    const menuItems = [
      {
        id: 1,
        title: "Porção de batatas fritas",
        description: "Porção de batatas fritas.",
        price: 18.0,
        categoryName: "Entradas",
        categoryId: "1",
        image: "",
      },
      {
        id: 2,
        title: "Sopa de abóbora",
        description: "Sopa de abóbora.",
        price: 25.0,
        categoryName: "Entradas",
        categoryId: "4",
        image: "",
      },
    ]

    const { getAllByRole } = render(
      <ListItemMenu
        setOrder={oderUpdated}
        order={order}
        menuItems={menuItems}
      />
    )
    const checkboxes = getAllByRole("checkbox")

    expect(checkboxes[0]).not.toBeChecked()
    expect(checkboxes[1]).not.toBeChecked()
  })
})
