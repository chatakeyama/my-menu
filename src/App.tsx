import React from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import useDebounce from './hooks/useDebounce'
import menuService from './services/MenuService'
import Menu from './routes/menu/Menu'
import About from './routes/about/About'
import NotFound from './routes/not-found/NotFound'
import Unavaiable from './routes/unavailable/Unavailable'
import Navbar from './components/Navbar/Navbar'
import MenuItem from './interfaces/MenuItem.js'
import { useServerErrorContext } from './contexts/ServerErrorContext'
import './App.scss'

export default function App() {
  const [menuItemsToDisplay, setMenuItemsToDisplay] = useState<MenuItem[]>([])
  const [allMenuItems, setAllMenuItems] = useState<MenuItem[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [activeSearch, setActiveSearch] = useState(false)
  const debounceSearchTerm = useDebounce(searchTerm, 1000)
  const [isVisibleSearchIcon, setIsVisibleSearchIcon] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const [, updateServerError] = useServerErrorContext()

  useEffect(() => {
    loadMenuItems()
  }, [])

  useEffect(() => {
    if (location.pathname === '/') {
      setIsVisibleSearchIcon(true)
    } else {
      setIsVisibleSearchIcon(false)
    }
  }, [location.pathname])

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
      const allMenu = await menuService.getAll()
      setAllMenuItems(allMenu)
      setMenuItemsToDisplay(allMenu)
      updateServerError(false)
    } catch (exception) {
      updateServerError(true)
    }
  }

  const searchMenuItem = async (text: string) => {
    if (text.length > 0) {
      const result = allMenuItems.filter((item: MenuItem) => {
        let regex = new RegExp(text, 'i')
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
    setSearchTerm('')
    setActiveSearch(false)
  }

  const navigateToHome = () => {
    navigate('/')
    if (menuItemsToDisplay.length < 1) {
      loadMenuItems()
      return
    }
    resetToInialValues()
  }

  return (
    <>
      <Navbar
        handleOnChange={(e) =>
          setSearchTerm((e.target as HTMLInputElement).value)
        }
        searchInputValue={searchTerm}
        goHomePage={navigateToHome}
        isVisibleSearchIcon={isVisibleSearchIcon}
      />
      <div className='outlet-content'>
        <Routes>
          <Route
            path='/'
            element={
              <Menu
                menuItems={menuItemsToDisplay}
                activeSearch={activeSearch}
                resetSearchResult={resetToInialValues}
              />
            }
          />
          <Route path='/about' element={<About />} />
          <Route path='/unavailable' element={<Unavaiable />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}
