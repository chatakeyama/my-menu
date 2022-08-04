import React from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { search } from "./services/filterService.tsx";
import SearchBar from "./components/SearchBar/SearchBar.tsx";
import { OrderProvider } from "./contexts/OrderContext.tsx";
import Menu from "./routes/menu/Menu.tsx";
import About from "./routes/about/About.tsx";
import NotFound from "./routes/not-found/NotFound.tsx";
import config from "./config.json";
import "./App.scss";

const apiEndpoint = config.apiUrl;

export default function App() {
  const loadDishes = async () => {
    const promise = axios.get(`${apiEndpoint}/dishes`);
    const { data } = await promise;
    setDishes(data);
  };

  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    loadDishes();
  }, []);

  const searchDish = async (e: any) => {
    const result = await search(e.target.value);
    const {data} = result
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
