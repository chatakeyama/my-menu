import React from "react"
import { Link } from "react-router-dom"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Divider from "@mui/material/Divider"
import Typography from "@mui/material/Typography"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Toolbar from "@mui/material/Toolbar"
import { styled } from "@mui/material/styles"

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}))

export default function Sidebar({ mobileOpen, searchInputToggle }) {
  const handleDrawerToggle = () => {
    mobileOpen()
    searchInputToggle()
  }

  return (
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
}
