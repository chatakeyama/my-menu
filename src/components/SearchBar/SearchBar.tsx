import React, { SyntheticEvent } from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import SearchIcon from "@mui/icons-material/Search"
import "./SearchBar.scss"
import { Search, SearchIconWrapper, StyledInputBase } from "./SearchBarStyle.ts"

type SearchBarProps = {
  handleOnChange: (e: SyntheticEvent) => void
}

export default function SearchAppBar({ handleOnChange }: SearchBarProps) {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <span className="logo-brand">My Menu</span>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        ></Typography>
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
      </Toolbar>
    </AppBar>
  )
}
