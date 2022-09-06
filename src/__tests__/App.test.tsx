import { render, screen } from '../test-utils/custom-render'
import { rest } from 'msw'
import React from 'react'
import App from '../App'
import { server } from '../__mocks__/server'

test('Handle errors while getting menu items from server', async () => {
  render(<App />)
  server.resetHandlers(
    rest.get('http://localhost:3000/menuItems', (req, res, ctx) =>
      res(ctx.status(404))
    )
  )

  const messageAlert = await screen.findByText(
    /Erro de comunicação com o servidor./
  )
  expect(messageAlert).toBeInTheDocument()
})
