import React from 'react';
import ListItemMenu from '../../components/ListItemMenu/ListItemMenu.tsx';
import OrderButton from '../../components/OrderButton/OrderButton.tsx';
import TabsNavBar from '../../components/TabsNavBar/TabsNavBar.tsx';
import { useOrderContext, useOrderContextUpdate } from '../../contexts/OrderContext.tsx'

function Menu() {

  const order = useOrderContext()
  const orderUpdate = useOrderContextUpdate()

  return (
    <>
      <TabsNavBar />
      <ListItemMenu order={order} setOrder={orderUpdate}/>
      <OrderButton order={order} />
    </>
  );
}

export default Menu;
