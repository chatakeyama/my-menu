import React, { useEffect, useState } from "react"
import Category from "../../interfaces/Category"
import { getCategories } from "../../services/MenuService.ts"
import "./TabsNavBar.scss"

const TabsNavBar = () => {
  const [selectedCategory, setSelectedCategory] = useState(1)
  const [categories, setCategories] = useState<Category[]>([])
  const [display, setDisplay] = useState(false)

  useEffect(() => {
    loadCategories()
  }, [])

  const loadCategories = async () => {
    try {
      const categories = await getCategories()
      setCategories(categories)
    } catch (exception) {
      setDisplay(true)
    }
  }

  const handleChange = (categoryId: number): void => {
    setSelectedCategory(categoryId)
  }

  return (
    <>
      {!display && (
        <div className="navbar">
          <div className="navbar__list">
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
