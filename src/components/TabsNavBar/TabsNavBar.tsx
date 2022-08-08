import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Category from "../../interfaces/Category";
import config from "../../config.json";
import { getCategories } from "../../services/MenuService.tsx";
import "./TabsNavBar.scss";

const apiUrl = config.apiUrl;

const TabsNavBar = () => {
  const [value, setValue] = useState(0);
    const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    const categories = await getCategories();
    setCategories(categories);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        {categories.map((category: Category[]) => {
          return <Tab key={category.id} label={category.name} />;
        })}
      </Tabs>
    </>
  );
};

export default TabsNavBar;
