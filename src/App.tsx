import React, { useState } from 'react';
import './App.scss';
import TabsNavBar from './components/TabsNavBar/TabsNavBar.tsx';
import SearchBar from './components/SearchBar/SearchBar.tsx';
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <SearchBar />
      <TabsNavBar />
      <div className="outlet-content">
        <Outlet />
      </div>
    </>
  );
}

export default App;
