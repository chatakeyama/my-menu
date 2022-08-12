import React from "react"
import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import useDebounce from "./hooks/useDebounce.js"
import { search, getAll } from "./services/MenuService.tsx"
import SearchBar from "./components/SearchBar/SearchBar.tsx"
import { OrderProvider } from "./contexts/OrderContext.tsx"
import Menu from "./routes/menu/Menu.tsx"
import About from "./routes/about/About.tsx"
import NotFound from "./routes/not-found/NotFound.tsx"
import "./App.scss"
import MenuItem from "./interfaces/MenuItem.js"

export default function App() {
  const [menuItems, setMenuItem] = useState<MenuItem[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  const debounceSearchTerm = useDebounce(searchTerm, 1000)

  useEffect(() => {
    loadMenuItems()
  }, [])

  useEffect(() => {
    searchMenuItem(debounceSearchTerm)
  }, [debounceSearchTerm])

  const loadMenuItems = async () => {
    const allMenu = await getAll()
    setMenuItem(allMenu)
  }

  const searchMenuItem = async (text: string) => {
    const { data } = await search(text)
    setMenuItem(data)
  }

  return (
    <>
      {
        <OrderProvider>
          <SearchBar handleOnChange={(e) => setSearchTerm(e.target.value)} />
          <div className="outlet-content">
            <Routes>
              <Route path="/" element={<Menu menuItems={menuItems} />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </OrderProvider>
      }
    </>
  )
}
