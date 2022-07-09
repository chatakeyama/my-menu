import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import './ListItemMenu.scss';
import Dish from '../../interfaces/Dish';


const ListItemMenu = ({ setOrder, order }) => {

    const dishes: Dish[] = [
        {
            id: 10,
            title: 'Salada primavera',
            description: 'Agrião, rúcula, cebola, tomate cereja e molho de vinagre balsâmico.',
            price: 24.00
        },
        {
            id: 12,
            title: 'Filé mignon',
            description: 'Carne filé mignon ao molho madeira com legumes grelhados.',
            price: 80.00
        },
        {
            id: 43,
            title: 'Salmão',
            description: 'Salmão assado com limão siciliano',
            price: 50.00
        }
    ]

    const handleToggle = (selectedMeal: Dish) => {
        const currentIndex = order.findIndex(meal => selectedMeal.id === meal.id);
        const newChecked = [...order];
        if (currentIndex === -1) {
            newChecked.push(selectedMeal);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setOrder(newChecked);
    };

    const getListItemPrimaryText = (text: string): any => {
        return <span className="list-item__title">{text}</span>
    }

    const getListItemSecondaryText = (meal: Dish): any => {
        return (
            <>
                <span>{meal.description}</span>
                <br />
                <span className="list-item__price">R${meal.price}</span>
            </>
        )
    }

    return (
        <>
            <List dense className="list">
                {dishes.map((currentMeal: Dish) => {
                    const labelId = `checkbox-list-secondary-label-${currentMeal.id}`;
                    return (
                        <ListItem key={currentMeal.id} className="list-item"
                            secondaryAction={
                                <Checkbox
                                    edge="end"
                                    onChange={() => handleToggle(currentMeal)}
                                    checked={order.findIndex(meal => currentMeal.id === meal.id) !== -1}
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            }>
                            <ListItemAvatar>
                                <Avatar className="list-item__img"
                                    alt={`Avatar n°${currentMeal.id + 1}`}
                                    src={`assets/salada_primavera.jpeg`}
                                />
                            </ListItemAvatar>
                            <ListItemText id={labelId}
                                primary={getListItemPrimaryText(currentMeal.title)}
                                secondary={getListItemSecondaryText(currentMeal)}
                            />
                        </ListItem>
                    );
                })}
            </List>
        </>
    );

}

export default ListItemMenu

