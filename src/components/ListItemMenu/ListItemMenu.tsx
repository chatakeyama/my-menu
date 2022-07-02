import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ReceiptIcon from '@mui/icons-material/Receipt';
import './ListItemMenu.scss';


const ListItemMenu = () => {

    const dishes = [
        {
            id: 1,
            title: 'Salada primavera',
            description: 'Agrião, rúcula, cebola, tomate cereja e molho de vinagre balsâmico.',
            price: '24.00'
        },
        {
            id: 2,
            title: 'Filé mignon',
            description: 'Carne filé mignon ao molho madeira com legumes grelhados.',
            price: '80.00'
        },
        {
            id: 3,
            title: 'Salmão',
            description: 'Salmão assado com limão siciliano',
            price: '50.00'
        }
    ]

    const [checked, setChecked] = React.useState([1]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);

        console.log(newChecked)
    };


    const getListItemPrimaryText = (text: string): any => {
        return <span className="list-item__title">{text}</span>
    }

    const getListItemSecondaryText = (meal: any): any => {
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
                {dishes.map((meal) => {
                    const labelId = `checkbox-list-secondary-label-${meal.id}`;
                    return (
                        <ListItem key={meal.id} className="list-item"
                            secondaryAction={
                                <Checkbox
                                    edge="end"
                                    onChange={handleToggle(meal.id)}
                                    checked={checked.indexOf(meal.id) !== -1}
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            }>
                            <ListItemAvatar>
                                <Avatar className="list-item__img"
                                    alt={`Avatar n°${meal.id + 1}`}
                                    src={`assets/salada_primavera.jpeg`}
                                />
                            </ListItemAvatar>
                            <ListItemText id={labelId}
                                primary={getListItemPrimaryText(meal.title)}
                                secondary={getListItemSecondaryText(meal)}
                            />
                        </ListItem>
                    );
                })}
            </List>
            {checked.length > 0 &&
                <span className="order">
                    <Button variant="contained" size="medium" startIcon={<ReceiptIcon />}>
                        Ver pedido
                    </Button>
                </span>
            }
        </>
    );

}

export default ListItemMenu

