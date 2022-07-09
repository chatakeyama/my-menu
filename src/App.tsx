import './App.scss';
import TabsNavBar from './components/TabsNavBar/TabsNavBar.tsx';
import ListItemMenu from './components/ListItemMenu/ListItemMenu.tsx';
import SearchBar from './components/SearchBar/SearchBar.tsx';
import OrderButton from './components/OrderButton/OrderButton.tsx';
import React, { useEffect, useState } from 'react';

function App() {

  const [order, setOrder] = useState([]);

  return (
    <>
      <div className="container">
        <SearchBar />
        <TabsNavBar />
        <main className="main-content">
          <ListItemMenu setOrder={setOrder} order={order}/>
          <OrderButton order={order} />
        </main>
      </div>
    </>
  );
}

export default App;
