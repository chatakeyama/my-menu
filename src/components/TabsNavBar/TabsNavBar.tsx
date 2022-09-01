import React, { useEffect, useState } from "react"
import Category from "../../interfaces/Category"
import { getCategories } from "../../services/MenuService"
import "./TabsNavBar.scss"

const TabsNavBar = ({ display }) => {
  const [selectedCategory, setSelectedCategory] = useState(1)
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    loadCategories()
  }, [display])

  const loadCategories = async () => {
    const categories = await getCategories()
    setCategories(categories)
  }

  const handleChange = (categoryId: number): void => {
    setSelectedCategory(categoryId)
  }

  return (
    <>
      {categories.length > 0 && (
        <div className="navbar">
          <div
            className="navbar__list"
            style={
              display ? { visibility: "visible" } : { visibility: "hidden" }
            }
          >
            {categories &&
              categories.map((category: Category) => {
                return (
                  <div className="navbar__item" key={category.id}>
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
                  </div>
                )
              })}
          </div>
        </div>
      )}
    </>
  )
}

export default TabsNavBar
