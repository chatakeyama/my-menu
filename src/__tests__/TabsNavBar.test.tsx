import TabsNavBar from '../components/TabsNavBar/TabsNavBar'
import { render, screen, waitFor } from '../__test-utils__/custom-render'
import React from 'react'

test('Displays the categories', async () => {
  const display = true
  render(<TabsNavBar display={display} />)
  await waitFor(async () => {
    const categoriesLinks = await screen.findAllByRole('link')
    expect(categoriesLinks).toHaveLength(3)
  })
})
