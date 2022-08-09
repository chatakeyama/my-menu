import React, { useEffect, useState } from "react";
import Category from "../../interfaces/Category";
import config from "../../config.json";
import { getCategories } from "../../services/MenuService.tsx";
import "./TabsNavBar.scss";

const apiUrl = config.apiUrl;

const TabsNavBar = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    const categories = await getCategories();
    setCategories(categories);
  };

  const handleChange = (categoryId: number) => {
    setSelectedCategory(categoryId);
  };

  return (
    <>
        <ul className="navbar">
          {categories.map((category: Category[]) => {
            return (
              <li className="navbar__item" key={category.id}>
                <a
                  onClick={() => handleChange(category.id)}
                  className={
                    selectedCategory == category.id
                      ? "navbar__anchor active"
                      : "navbar__anchor"
                  }
                  href={`#${category.id}`}
                >
                  {category.name}
                </a>
              </li>
            );
          })}
        </ul>
    </>
  );
};

export default TabsNavBar;
