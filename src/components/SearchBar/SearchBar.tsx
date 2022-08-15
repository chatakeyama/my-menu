import React, { SyntheticEvent } from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import SearchIcon from "@mui/icons-material/Search"
import { useLocation } from "react-router-dom"
import { Search, SearchIconWrapper, StyledInputBase } from "./SearchBarStyle.ts"
import "./SearchBar.scss"

type SearchBarProps = {
  handleOnChange: (e: SyntheticEvent) => void
}

export default function SearchAppBar({ handleOnChange }: SearchBarProps) {
  const location = useLocation()

  const showSearchInput = () => {
    if (location.pathname === "/") {
      return true
    }
    return false
  }

  return (
    <AppBar position="fixed">
      <Toolbar>
        <span className="logo-brand">
          <a href="/">My Menu</a>
        </span>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        ></Typography>
        {showSearchInput() ? (
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={handleOnChange}
            />
          </Search>
        ) : (
          ""
        )}
      </Toolbar>
    </AppBar>
  )
}
