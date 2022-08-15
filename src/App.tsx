import React from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import useDebounce from "./hooks/useDebounce.js"
import { search, getAll } from "./services/MenuService.ts"
import SearchBar from "./components/SearchBar/SearchBar.tsx"
import { OrderProvider } from "./contexts/OrderContext.tsx"
import Menu from "./routes/menu/Menu.tsx"
import About from "./routes/about/About.tsx"
import NotFound from "./routes/not-found/NotFound.tsx"
import Unavaiable from "./routes/unavailable/Unavailable.tsx"
import MenuItem from "./interfaces/MenuItem.js"
import "./App.scss"

export default function App() {
  const [menuItems, setMenuItem] = useState<MenuItem[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const debounceSearchTerm = useDebounce(searchTerm, 1000)
  const [showSearchInput, setShowSearchInput] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === "/") {
      setShowSearchInput(true)
      loadMenuItems()
    }
  }, [])

  useEffect(() => {
    searchMenuItem(debounceSearchTerm)
  }, [debounceSearchTerm])

  const loadMenuItems = async () => {
    try {
      const allMenu = await getAll()
      setMenuItem(allMenu)
    } catch (exception) {
      setShowSearchInput(false)
      navigate("/unavailable")
    }
  }

  const searchMenuItem = async (text: string) => {
    const { data } = await search(text)
    setMenuItem(data)
  }

  return (
    <>
      {
        <OrderProvider>
          <SearchBar
            showSearchInput={showSearchInput}
            handleOnChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="outlet-content">
            <Routes>
              <Route path="/" element={<Menu menuItems={menuItems} />} />
              <Route path="/about" element={<About />} />
              <Route path="/unavailable" element={<Unavaiable />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </OrderProvider>
      }
    </>
  )
}
