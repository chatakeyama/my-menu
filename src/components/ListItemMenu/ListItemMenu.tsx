import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import './ListItemMenu.scss';


const ListItemMenu = () => {

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
    };


    const getListItemPrimaryText = (text: string): any => {
        return <span className="list-item__title">{text}</span>
    }

    const getListItemSecondaryText = (text: string): any => {
        return (
            <>
                <span>{text}
                </span>
                <br />
                <span className="list-item__price">R$24,00</span>
            </>
        )
    }

    return (
        <List dense className="list">
            {[0].map((value) => {
                const labelId = `checkbox-list-secondary-label-${value}`;
                return (
                    <ListItem key={value} className="list-item"
                        secondaryAction={
                            <Checkbox
                                edge="end"
                                onChange={handleToggle(value)}
                                checked={checked.indexOf(value) !== -1}
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        }>
                        <ListItemAvatar>
                            <Avatar className="list-item__img" 
                                alt={`Avatar n°${value + 1}`}
                                src={`assets/salada_primavera.jpeg`}
                            />
                        </ListItemAvatar>
                        <ListItemText id={labelId}
                            primary={getListItemPrimaryText('Salada primavera')}
                            secondary={getListItemSecondaryText(`Agrião, rúcula, cebola, 
                            tomate cereja e molho de vinagre balsâmico.`)}
                        />
                    </ListItem>
                );
            })}
        </List>
    );

}

export default ListItemMenu

