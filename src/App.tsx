import React from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import useDebounce from "./hooks/useDebounce.js"
import { getAll } from "./services/MenuService.ts"
import { OrderProvider } from "./contexts/OrderContext.tsx"
import Menu from "./routes/menu/Menu.tsx"
import About from "./routes/about/About.tsx"
import NotFound from "./routes/not-found/NotFound.tsx"
import Unavaiable from "./routes/unavailable/Unavailable.tsx"
import Sidebar from "./components/Sidebar/Sidebar.tsx"
import MenuItem from "./interfaces/MenuItem.js"
import "./App.scss"

export default function App() {
  const [menuItemsToDisplay, setMenuItemsToDisplay] = useState<MenuItem[]>([])
  const [allMenuItems, setAllMenuItems] = useState<MenuItem[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [activeSearch, setActiveSearch] = useState(false)
  const debounceSearchTerm = useDebounce(searchTerm, 1000)
  const [showSearchInput, setShowSearchInput] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    loadMenuItems()
  }, [])

  useEffect(() => {
    if (location.pathname === "/") {
      setShowSearchInput(true)
    }
  })

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
      setShowSearchInput(false)
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

  const resetMenuItemsToInialValues = () => {
    setAllMenuItems(allMenuItems)
    setMenuItemsToDisplay(allMenuItems)
    setSearchTerm("")
  }

  const navigateToHome = () => {
    navigate("/")
    setActiveSearch(true)
    if (menuItemsToDisplay.length < 1) {
      loadMenuItems()
      return
    }
    resetMenuItemsToInialValues()
  }

  return (
    <>
      {
        <OrderProvider>
          <Sidebar
            showSearchInput={showSearchInput}
            handleOnChange={(e) => setSearchTerm(e.target.value)}
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
                    resetSearchResult={resetMenuItemsToInialValues}
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
