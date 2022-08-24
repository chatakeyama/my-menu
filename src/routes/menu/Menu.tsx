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
import MenuItem from "../../interfaces/MenuItem"

type MenuItemProps = {
  menuItems: MenuItem[]
  activeSearch: boolean
  resetSearchResult: () => void
}

function Menu({ menuItems, activeSearch, resetSearchResult }: MenuItemProps) {
  const order = useOrderContext()
  const orderUpdate = useOrderContextUpdate()
  const [displayCategoriesNavBar, setDisplayCategoriesNavBar] = useState(true)

  useEffect(() => {
    if (activeSearch && menuItems.length > 0) {
      setDisplayCategoriesNavBar(false)
      return
    }
    setDisplayCategoriesNavBar(true)
  }, [])

  useEffect(() => {
    if(activeSearch){
      setDisplayCategoriesNavBar(false)
      return
    }
    setDisplayCategoriesNavBar(true)
  }, [activeSearch])

  return (
    <>
      <TabsNavBar display={displayCategoriesNavBar} />
      <Container>
        <ListItemMenu
          order={order}
          setOrder={orderUpdate}
          menuItems={menuItems}
        />
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
