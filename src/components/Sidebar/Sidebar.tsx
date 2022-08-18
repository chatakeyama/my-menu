import * as React from "react"
import { SyntheticEvent } from "react"
import { Search, SearchIconWrapper, StyledInputBase } from "./SidebarStyle.ts"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import { styled, useTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import Divider from "@mui/material/Divider"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import MenuIcon from "@mui/icons-material/Menu"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import SearchIcon from "@mui/icons-material/Search"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import { Link } from "react-router-dom"

const drawerWidth = 240

type SidebarProps = {
  handleOnChange: (e: SyntheticEvent) => void
  showSearchInput: boolean
  searchInputValue: string
  goHomePage: (e: SyntheticEvent) => void
  window?: () => Window
}

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}))

export default function Sidebar({
  handleOnChange,
  showSearchInput,
  searchInputValue,
  goHomePage,
  window,
}: SidebarProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const theme = useTheme()

  const drawer = (
    <div>
      <Toolbar />
      <DrawerHeader>
        <Typography variant="h6">My Menu</Typography>

        <IconButton onClick={handleDrawerToggle}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Typography p={3.5}>Seja bem-vindo(a)!</Typography>
      <Divider />
      <List>
        <ListItem
          key={"a"}
          disablePadding
          component={Link}
          to="/about"
          onClick={handleDrawerToggle}
        >
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"Quem somos"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <Box sx={{ width: "100%", maxWidth: 500 }} p={3.5}>
        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 500 }}>
          Horários de funcionamento
        </Typography>
        <Typography variant="body1" gutterBottom>
          De segunda a sábado, das 11h30 às 22h30
        </Typography>
      </Box>
    </div>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
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
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}
