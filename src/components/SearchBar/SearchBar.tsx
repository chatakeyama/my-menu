import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.scss";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./SearchBarStyle.ts";

export default function SearchAppBar({ handleOnChange }) {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <span className="logo-brand">LOGO</span>
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
  );
}
