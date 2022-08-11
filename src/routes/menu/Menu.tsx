import ListItemMenu from "../../components/ListItemMenu/ListItemMenu.tsx";
import OrderButton from "../../components/OrderButton/OrderButton.tsx";
import TabsNavBar from "../../components/TabsNavBar/TabsNavBar.tsx";
import {
  useOrderContext,
  useOrderContextUpdate,
} from "../../contexts/OrderContext.tsx";

function Menu({ menuItems }) {
  const order = useOrderContext();
  const orderUpdate = useOrderContextUpdate();

  return (
    <>
      <TabsNavBar />
      <ListItemMenu
        order={order}
        setOrder={orderUpdate}
        menuItems={menuItems}
      />
      <OrderButton order={order} setOrder={orderUpdate} />
    </>
  );
}

export default Menu;
