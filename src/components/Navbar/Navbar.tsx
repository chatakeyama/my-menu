import React, { SyntheticEvent, useEffect, useRef, useState } from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Toolbar from "@mui/material/Toolbar"
import SearchIcon from "@mui/icons-material/Search"
import Sidebar from "./Sidebar/Sidebar"
import { Search, StyledInputBase } from "./NavbarStyle"
import { useServerErrorContext } from "../../contexts/ServerErrorContext"
import "./Navbar.scss"

const drawerWidth = 240

type NavbarProps = {
  handleOnChange: (e: SyntheticEvent) => void
  searchInputValue: string
  goHomePage: (e: SyntheticEvent) => void
  window?: () => Window
  isVisibleSearchIcon: boolean
}

export default function Navbar({
  handleOnChange,
  searchInputValue,
  goHomePage,
  window,
  isVisibleSearchIcon,
}: NavbarProps) {
  const searchInputElement = useRef<HTMLInputElement>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchInputToggle, setSearchInputToggle] = useState(false)
  const serverError = useServerErrorContext()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
    setSearchInputToggle(false)
  }

  const handleSearchToggle = () => {
    setSearchInputToggle(!searchInputToggle)
  }

  useEffect(() => {
    if (searchInputToggle)
      searchInputElement.current?.getElementsByTagName("input")[0].focus()
  }, [searchInputToggle])

  const iconSearchVisibility: React.CSSProperties =
    serverError[0] || !isVisibleSearchIcon
      ? { visibility: "hidden" }
      : { visibility: "visible" }

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <span className="logo-brand">
            <a onClick={goHomePage}>My Menu</a>
          </span>
          <SearchIcon
            onClick={handleSearchToggle}
            style={iconSearchVisibility}
          />
        </Toolbar>

        {searchInputToggle ? (
          <div className="searchInputArea">
            <Search>
              <StyledInputBase
                ref={searchInputElement}
                placeholder="Busque um item"
                inputProps={{ "aria-label": "search" }}
                onChange={handleOnChange}
                value={searchInputValue}
              />
            </Search>
          </div>
        ) : (
          ""
        )}
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Sidebar
            mobileOpen={setMobileOpen}
            searchInputToggle={setSearchInputToggle}
          />
        </Drawer>
      </Box>
    </Box>
  )
}
