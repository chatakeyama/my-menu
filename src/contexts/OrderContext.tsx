import React, { useContext, useState } from "react";

const OrderContext = React.createContext({})
const OrderUpdateContext = React.createContext({})

export function useOrderContext() {
    return useContext(OrderContext)
}

export function useOrderContextUpdate() {
    return useContext(OrderUpdateContext)
}

export function OrderProvider({ children }) {

    const [order, setOrder] = useState([]);

    return (
        <OrderContext.Provider value={order}>
            <OrderUpdateContext.Provider value={setOrder}>
                {children}
            </OrderUpdateContext.Provider>
        </OrderContext.Provider>
    )
}