import React from 'react';
import './App.scss';
import SearchBar from './components/SearchBar/SearchBar.tsx';
import { Outlet } from 'react-router-dom'
import { OrderProvider } from './contexts/OrderContext.tsx'


export default function App() {
  return (
    <>
      <OrderProvider>
        <SearchBar />
        <div className="outlet-content">
          <Outlet />
        </div>
      </OrderProvider>
    </>
  );
}