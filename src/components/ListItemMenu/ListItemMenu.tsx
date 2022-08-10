import React, { useEffect, useRef } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Dish from "../../interfaces/Dish";
import "./ListItemMenu.scss";

const ListItemMenu = ({ setOrder, order, dishes }) => {

  const categoryRef = useRef();

  const groupByCategory = (menu: Dish[]): Array<[string, Dish[]]> => {
    const groups = menu.reduce((groups, item) => {
      if (!groups[item.categoryName]) {
        groups[item.categoryName] = [];
      }
      groups[item.categoryName].push(item);
      return groups;
    }, {});
    return Object.entries(groups);
  };

  const handleToggle = (selectedMeal: Dish) => {
    const currentIndex = order.findIndex((meal) => selectedMeal.id === meal.id);
    const newChecked = [...order];
    if (currentIndex === -1) {
      newChecked.push(selectedMeal);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setOrder(newChecked);
  };

  const getListItemPrimaryText = (text: string): any => {
    return <span className="list-item__title">{text}</span>;
  };

  const getListItemSecondaryText = (meal: Dish): any => {
    return (
      <>
        <span>{meal.description}</span>
        <br />
        <span className="list-item__price">R${meal.price}</span>
      </>
    );
  };

  const groupedDishes = groupByCategory(dishes);

  return (
    <>
      <List dense className="list">
        {groupedDishes.map(([categoryName, categoryDishes]) => {
          return (
            <React.Fragment key={categoryName}>
              <Typography
                className="category-title"
                ml={2} mt={3} mb={1}
                variant="subtitle1"
                id={categoryDishes[0].categoryId}
                ref={categoryRef}
              >
                {categoryName}
              </Typography>

              {categoryDishes.map((currentMeal) => {
                const labelId = `checkbox-list-secondary-label-${currentMeal.id}`;
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
                );
              })}
            </React.Fragment>
          );
        })}
      </List>
    </>
  );
};

export default ListItemMenu;
