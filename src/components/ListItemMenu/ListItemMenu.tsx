import React, { ReactNode } from "react"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import Checkbox from "@mui/material/Checkbox"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
import MenuItem from "../../interfaces/MenuItem"
import "./ListItemMenu.scss"

type ListItemMenuProps = {
  setOrder: (order: MenuItem[]) => void
  order: MenuItem[]
  menuItems: MenuItem[]
}

const ListItemMenu = ({ setOrder, order, menuItems }: ListItemMenuProps) => {
  const groupByCategory = (menu: MenuItem[]): Array<[string, MenuItem[]]> => {
    const groups = menu.reduce((groups, item) => {
      if (!groups[item.categoryName]) {
        groups[item.categoryName] = []
      }
      groups[item.categoryName].push(item)
      return groups
    }, {})
    return Object.entries(groups)
  }

  const handleToggle = (selectedMeal: MenuItem): void => {
    const currentIndex = order.findIndex((meal) => selectedMeal.id === meal.id)
    const newChecked = [...order]
    if (currentIndex === -1) {
      newChecked.push(selectedMeal)
    } else {
      newChecked.splice(currentIndex, 1)
    }
    setOrder(newChecked)
  }

  const getListItemPrimaryText = (text: string): ReactNode => {
    return <span className="list-item__title">{text}</span>
  }

  const getListItemSecondaryText = (meal: MenuItem): ReactNode => {
    return (
      <>
        <span>{meal.description}</span>
        <br />
        <span className="list-item__price">R${meal.price}</span>
      </>
    )
  }

  const groupedMenuItems = groupByCategory(menuItems)

  return (
    <>
      {groupedMenuItems.length < 1 ? (
        <p className="not-found-message">Item não encontrado.</p>
      ) : (
        ""
      )}
      <List dense className="list">
        {groupedMenuItems.map(
          ([categoryName, categoryMenuItems]: [string, MenuItem[]]) => {
            return (
              <React.Fragment key={categoryName}>
                <Typography
                  className="category-title"
                  variant="subtitle1"
                  id={categoryMenuItems[0].categoryId}
                >
                  {categoryName}
                </Typography>

                {categoryMenuItems.map((currentMeal) => {
                  const labelId = `checkbox-list-secondary-label-${currentMeal.id}`
                  return (
                    <ListItem
                      key={currentMeal.id}
                      className="list-item"
                      secondaryAction={
                        <Checkbox
                          edge="end"
                          onChange={() => handleToggle(currentMeal)}
                          checked={
                            order.findIndex(
                              (meal) => currentMeal.id === meal.id
                            ) !== -1
                          }
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      }
                    >
                      <ListItemAvatar>
                        <Avatar
                          className="list-item__img"
                          alt={`Avatar n°${currentMeal.id + 1}`}
                          src={`assets/${currentMeal.image}`}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        id={labelId}
                        primary={getListItemPrimaryText(currentMeal.title)}
                        secondary={getListItemSecondaryText(currentMeal)}
                      />
                    </ListItem>
                  )
                })}
              </React.Fragment>
            )
          }
        )}
      </List>
    </>
  )
}

export default ListItemMenu
