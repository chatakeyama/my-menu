import React, { ReactNode, useContext, useState } from "react"
import MenuItem from "../interfaces/MenuItem"

type OrderProviderProps = {
  children: ReactNode
}

const OrderContext = React.createContext({})
const OrderUpdateContext = React.createContext({})

export function useOrderContext() {
  return useContext(OrderContext) as MenuItem[]
}

export function useOrderContextUpdate() {
  return useContext(OrderUpdateContext) as any
}

export function OrderProvider({ children }: OrderProviderProps) {
  const [order, setOrder] = useState<MenuItem[]>([])

  return (
    <OrderContext.Provider value={order}>
      <OrderUpdateContext.Provider value={setOrder}>
        {children}
      </OrderUpdateContext.Provider>
    </OrderContext.Provider>
  )
}
