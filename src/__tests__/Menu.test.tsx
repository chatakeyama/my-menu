import Menu from '../routes/menu/Menu'
import React from 'react'
import { render, screen } from '../__test-utils__/custom-render'

test('Handles zero results from searching', async () => {
  render(
    <Menu
      menuItems={[]}
      activeSearch={true}
      resetSearchResult={function (): void {}}
    />
  )

  const messageAlert = await screen.findByText(/Item não encontrad/, {
    exact: false,
  })
  expect(messageAlert).toBeInTheDocument()
})
