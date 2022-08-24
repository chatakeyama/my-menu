import React from "react"
import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import useDebounce from "./hooks/useDebounce.js"
import { getAll } from "./services/MenuService"
import { OrderProvider } from "./contexts/OrderContext"
import Menu from "./routes/menu/Menu"
import About from "./routes/about/About"
import NotFound from "./routes/not-found/NotFound"
import Unavaiable from "./routes/unavailable/Unavailable"
import Navbar from "./components/Navbar/Navbar"
import MenuItem from "./interfaces/MenuItem.js"
import "./App.scss"

export default function App() {
  const [menuItemsToDisplay, setMenuItemsToDisplay] = useState<MenuItem[]>([])
  const [allMenuItems, setAllMenuItems] = useState<MenuItem[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [activeSearch, setActiveSearch] = useState(false)
  const debounceSearchTerm = useDebounce(searchTerm, 1000)
  const navigate = useNavigate()

  useEffect(() => {
    loadMenuItems()
  }, [])

  useEffect(() => {
    if (searchTerm.length > 0) {
      setActiveSearch(true)
    } else {
      setActiveSearch(false)
    }
    searchMenuItem(debounceSearchTerm)
  }, [debounceSearchTerm])

  const loadMenuItems = async () => {
    try {
      const allMenu = await getAll()
      setAllMenuItems(allMenu)
      setMenuItemsToDisplay(allMenu)
    } catch (exception) {
      navigate("/unavailable")
    }
  }

  const searchMenuItem = async (text: string) => {
    if (text.length > 0) {
      const result = allMenuItems.filter((item: MenuItem) => {
        let regex = new RegExp(text, "i")
        return regex.test(item.title)
      })
      setMenuItemsToDisplay(result)
      return
    }
    setMenuItemsToDisplay(allMenuItems)
  }

  const resetToInialValues = () => {
    setAllMenuItems(allMenuItems)
    setMenuItemsToDisplay(allMenuItems)
    setSearchTerm("")
    setActiveSearch(false)
  }

  const navigateToHome = () => {
    navigate("/")
    setActiveSearch(true)
    if (menuItemsToDisplay.length < 1) {
      loadMenuItems()
      return
    }
    resetToInialValues()
  }

  return (
    <>
      {
        <OrderProvider>
          <Navbar
            handleOnChange={(e) => setSearchTerm((e.target as HTMLInputElement).value)}
            searchInputValue={searchTerm}
            goHomePage={navigateToHome}
          />
          <div className="outlet-content">
            <Routes>
              <Route
                path="/"
                element={
                  <Menu
                    menuItems={menuItemsToDisplay}
                    activeSearch={activeSearch}
                    resetSearchResult={resetToInialValues}
                  />
                }
              />
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
