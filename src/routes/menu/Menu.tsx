import React from "react"
import ListItemMenu from "../../components/ListItemMenu/ListItemMenu.tsx"
import OrderButton from "../../components/OrderButton/OrderButton.tsx"
import TabsNavBar from "../../components/TabsNavBar/TabsNavBar.tsx"
import {
  useOrderContext,
  useOrderContextUpdate,
} from "../../contexts/OrderContext.tsx"
import MenuItem from "../../interfaces/MenuItem"

type MenuItemProps = {
  menuItems: MenuItem[]
}

function Menu({ menuItems }: MenuItemProps) {
  const order = useOrderContext()
  const orderUpdate = useOrderContextUpdate()

  return (
    <>
      {menuItems.length > 0 && <TabsNavBar />}
      <ListItemMenu
        order={order}
        setOrder={orderUpdate}
        menuItems={menuItems}
      />
      <OrderButton order={order} setOrder={orderUpdate} />
    </>
  )
}

export default Menu
