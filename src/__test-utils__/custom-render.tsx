import React, { FC, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { OrderProvider } from '../contexts/OrderContext'
import { ServerErrorProvider } from '../contexts/ServerErrorContext'
import { BrowserRouter } from 'react-router-dom'

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <BrowserRouter>
      <OrderProvider>
        <ServerErrorProvider>{children}</ServerErrorProvider>
      </OrderProvider>
    </BrowserRouter>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
