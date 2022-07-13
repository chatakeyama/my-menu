import React from 'react';
import './App.scss';
import TabsNavBar from './components/TabsNavBar/TabsNavBar.tsx';
import SearchBar from './components/SearchBar/SearchBar.tsx';
import { Outlet } from 'react-router-dom'
import { OrderProvider } from './contexts/OrderContext.tsx'


export default function App() {
  return (
    <>
      <OrderProvider>
        <SearchBar />
        <TabsNavBar />
        <div className="outlet-content">
          <Outlet />
        </div>
      </OrderProvider>
    </>
  );
}