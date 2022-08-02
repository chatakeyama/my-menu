import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar/SearchBar.tsx";
import { OrderProvider } from "./contexts/OrderContext.tsx";
import Menu from "./routes/menu/Menu.tsx";
import About from "./routes/about/About.tsx";
import NotFound from "./routes/not-found/NotFound.tsx";

export default function App() {
  return (
    <>
      {
        <OrderProvider>
          <SearchBar />
          <div className="outlet-content">
            <Routes>
              <Route path="/" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </OrderProvider>
      }
    </>
  );
}
