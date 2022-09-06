import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import OrderButton from '../components/OrderButton/OrderButton'

describe('OrderButton', () => {
  test('Should calculate the total price of an order', () => {
    let order = [
      {
        id: 1,
        title: 'Hamburguer de carne',
        description: 'Hamburguer de carne com alface, queijo e maionese.',
        price: 20.0,
        categoryName: 'Carnes',
        categoryId: '3',
        image: '',
      },
      {
        id: 2,
        title: 'Hamburguer de frango',
        description: 'Hamburguer de frango com alface, queijo e maionese.',
        price: 15.5,
        categoryName: 'Carnes',
        categoryId: '3',
        image: '',
      },
    ]
    const oderUpdated = null
    render(<OrderButton order={order} setOrder={oderUpdated} />)
    userEvent.click(screen.getByRole('button', { name: 'Ver pedido' }))
    expect(screen.getByText('R$ 35,50')).toBeInTheDocument()
  })

  test("Shouldn't display order button if no item is selected", () => {
    const oderUpdated = null
    const order = null
    render(<OrderButton order={order} setOrder={oderUpdated} />)
    expect(screen.queryByText('Ver pedido')).not.toBeInTheDocument()
  })

  test('Should display order button if at least one item is selected', () => {
    const oderUpdated = null
    const order = [
      {
        id: 1,
        title: 'Hamburguer de carne',
        description: 'Hamburguer de carne com alface, queijo e maionese.',
        price: 20.0,
        categoryName: 'Carnes',
        categoryId: '3',
        image: '',
      },
    ]
    render(<OrderButton order={order} setOrder={oderUpdated} />)
    expect(
      screen.getByRole('button', { name: 'Ver pedido' })
    ).toBeInTheDocument()
  })

  test('Should open the modal with order when button is clicked', () => {
    const oderUpdated = null
    const order = [
      {
        id: 1,
        title: 'Hamburguer de carne',
        description: 'Hamburguer de carne com alface, queijo e maionese.',
        price: 20.0,
        categoryName: 'Carnes',
        categoryId: '3',
        image: '',
      },
    ]
    render(<OrderButton order={order} setOrder={oderUpdated} />)
    userEvent.click(screen.getByText('Ver pedido'))
    expect(screen.getByTestId('modal-order')).toHaveTextContent(/Seu pedido/i)
  })

  test('Should remove an item from order when remove button is clicked', () => {
    let order = [
      {
        id: 1,
        title: 'Hamburguer de carne',
        description: 'Hamburguer de carne com alface, queijo e maionese.',
        price: 20.0,
        categoryName: 'Carnes',
        categoryId: '3',
        image: '',
      },
      {
        id: 2,
        title: 'Hamburguer de frango',
        description: 'Hamburguer de frango com alface, queijo e maionese.',
        price: 15.5,
        categoryName: 'Carnes',
        categoryId: '3',
        image: '',
      },
    ]

    const orderUpdated = (newOrder) => {
      order = newOrder
    }
    const { rerender } = render(
      <OrderButton order={order} setOrder={orderUpdated} />
    )
    userEvent.click(screen.getByText('Ver pedido'))
    userEvent.click(screen.getByTestId('delete-button-2'))
    rerender(<OrderButton order={order} setOrder={orderUpdated} />)
    const listOfRemoveButtons = screen.getAllByRole('button', {
      name: 'Remover',
    })
    expect(listOfRemoveButtons).toHaveLength(1)
  })
})
