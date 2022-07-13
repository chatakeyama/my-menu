import ListItemMenu from '../../components/ListItemMenu/ListItemMenu.tsx';
import OrderButton from '../../components/OrderButton/OrderButton.tsx';
import React from 'react';
import { useOrderContext, useOrderContextUpdate } from '../../contexts/OrderContext.tsx'

function Menu() {

  const order = useOrderContext()
  const orderUpdate = useOrderContextUpdate()

  return (
    <>
      <ListItemMenu order={order} setOrder={orderUpdate}/>
      <OrderButton order={order} />
    </>
  );
}

export default Menu;
