import React from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { search, getAll } from "./services/MenuService.tsx";
import SearchBar from "./components/SearchBar/SearchBar.tsx";
import { OrderProvider } from "./contexts/OrderContext.tsx";
import Menu from "./routes/menu/Menu.tsx";
import About from "./routes/about/About.tsx";
import NotFound from "./routes/not-found/NotFound.tsx";
import "./App.scss";

export default function App() {

  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    loadDishes();
  }, []);

  const loadDishes = async () => {
    const allMenu = await getAll();
    setDishes(allMenu);
  };

  const searchDish = async (e: any) => {
    const result = await search(e.target.value);
    const { data } = result;
    setDishes(data);
  };

  return (
    <>
      {
        <OrderProvider>
          <SearchBar handleOnChange={searchDish} />
          <div className="outlet-content">
            <Routes>
              <Route path="/" element={<Menu dishes={dishes} />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </OrderProvider>
      }
    </>
  );
}
