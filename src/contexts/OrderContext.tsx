import React, { ReactNode, useContext, useState } from "react"
import MenuItem from "../interfaces/MenuItem"

type OrderProviderProps = {
  children: ReactNode
}

const OrderContext = React.createContext({})
const OrderUpdateContext = React.createContext((order: MenuItem[]) => {})

export function useOrderContext() {
  return useContext(OrderContext) as MenuItem[]
}

export function useOrderContextUpdate() {
  return useContext(OrderUpdateContext)
}

export function OrderProvider({ children }: OrderProviderProps) {
  const [order, setOrder] = useState<MenuItem[]>([])

  const updateOrder = (order: MenuItem[]) => {
    setOrder(order)
  }

  return (
    <OrderContext.Provider value={order}>
      <OrderUpdateContext.Provider value={updateOrder}>
        {children}
      </OrderUpdateContext.Provider>
    </OrderContext.Provider>
  )
}
