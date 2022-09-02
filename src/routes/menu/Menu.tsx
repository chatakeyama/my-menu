import React, { useEffect, useState } from "react"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import ListItemMenu from "../../components/ListItemMenu/ListItemMenu"
import OrderButton from "../../components/OrderButton/OrderButton"
import TabsNavBar from "../../components/TabsNavBar/TabsNavBar"
import {
  useOrderContext,
  useOrderContextUpdate,
} from "../../contexts/OrderContext"
import { useServerErrorContext } from "../../contexts/ServerErrorContext"
import MenuItem from "../../interfaces/MenuItem"
import ErrorAlert from "../../components/ErrorAlert/ErrorAlert"

type MenuItemProps = {
  menuItems: MenuItem[]
  activeSearch: boolean
  resetSearchResult: () => void
}

function Menu({ menuItems, activeSearch, resetSearchResult }: MenuItemProps) {
  const order = useOrderContext()
  const orderUpdate = useOrderContextUpdate()
  const [serverError] = useServerErrorContext()
  const [displayCategoriesNavBar, setDisplayCategoriesNavBar] = useState(true)

  useEffect(() => {
    if (activeSearch && menuItems.length > 0) {
      setDisplayCategoriesNavBar(false)
      return
    }
    setDisplayCategoriesNavBar(true)
  }, [])

  useEffect(() => {
    if (activeSearch) {
      setDisplayCategoriesNavBar(false)
      return
    }
    setDisplayCategoriesNavBar(true)
  }, [activeSearch])

  let mainContent = (
    <ListItemMenu order={order} setOrder={orderUpdate} menuItems={menuItems} />
  )
  
  if (serverError) {
    mainContent = <ErrorAlert marginTop={6} />
  }

  return (
    <>
      <TabsNavBar display={displayCategoriesNavBar} />
      <Container>
        {mainContent}
        {activeSearch && (
          <Button variant="text" onClick={resetSearchResult}>
            Voltar
          </Button>
        )}
      </Container>
      <OrderButton order={order} setOrder={orderUpdate} />
    </>
  )
}

export default Menu
