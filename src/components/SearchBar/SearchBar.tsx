import React, { SyntheticEvent } from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import SearchIcon from "@mui/icons-material/Search"
import { Search, SearchIconWrapper, StyledInputBase } from "./SearchBarStyle.ts"
import "./SearchBar.scss"

type SearchBarProps = {
  handleOnChange: (e: SyntheticEvent) => void
  showSearchInput: boolean
  searchInputValue: string
  goHomePage: (e: SyntheticEvent) => void
}

export default function SearchAppBar({
  handleOnChange,
  showSearchInput,
  searchInputValue,
  goHomePage,
}: SearchBarProps) {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <span className="logo-brand">
          <a onClick={goHomePage}>My Menu</a>
        </span>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        ></Typography>
        {showSearchInput === true ? (
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={handleOnChange}
              value={searchInputValue}
            />
          </Search>
        ) : (
          ""
        )}
      </Toolbar>
    </AppBar>
  )
}
