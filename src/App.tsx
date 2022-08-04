import React from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import useDebounce from "./hooks/useDebounce.js";
import { search, getAll } from "./services/MenuService.tsx";
import SearchBar from "./components/SearchBar/SearchBar.tsx";
import { OrderProvider } from "./contexts/OrderContext.tsx";
import Menu from "./routes/menu/Menu.tsx";
import About from "./routes/about/About.tsx";
import NotFound from "./routes/not-found/NotFound.tsx";
import "./App.scss";

export default function App() {
  const [dishes, setDishes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const debounceSearchTerm = useDebounce(searchTerm, 2000);

  useEffect(() => {
    loadDishes();
  }, []);

  useEffect(() => {
    searchDish(debounceSearchTerm);
  }, [debounceSearchTerm]);

  const loadDishes = async () => {
    const allMenu = await getAll();
    setDishes(allMenu);
  };

  const searchDish = async (text: string) => {
    const { data } = await search(text);
    setDishes(data);
  };

  return (
    <>
      {
        <OrderProvider>
          <SearchBar handleOnChange={(e) => setSearchTerm(e.target.value)} />
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
