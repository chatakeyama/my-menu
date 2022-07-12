import ListItemMenu from '../../components/ListItemMenu/ListItemMenu.tsx';
import OrderButton from '../../components/OrderButton/OrderButton.tsx';
import { useState } from 'react';
import React from 'react';

function Menu() {

  const [order, setOrder] = useState([]);

  return (
    <>
      <ListItemMenu setOrder={setOrder} order={order} />
      <OrderButton order={order} />
    </>
  );
}

export default Menu;
