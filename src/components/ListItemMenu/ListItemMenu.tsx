import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import './ListItemMenu.scss';

import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const ListItemMenu = () => {
    return (
        <List className="list" sx={{ bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start" className="list__item">
                <ListItemAvatar className="list__image">
                    <Avatar alt="Remy Sharp" src="/assets/salada_primavera.jpeg"
                        sx={{ width: 80, height: 80 }} />
                </ListItemAvatar>
                <ListItemText className="list__title"
                    primary="Salada primavera"
                    secondary={
                        <>
                            <Typography
                                color="text.primary"
                                variant="body2">
                                Entrada: Salada porteña ou empanada de carne. Principal: 1/2 galeto desossado com purê de
                                 batata e arroz com brócolis. Sobremesa: Pudim de leite, Churros ou fruta do dia.
                            </Typography>
                            <Typography
                                sx={{ display: 'inline' }}
                                variant="body1"
                                color="text.primary">
                                R$25,00
                            </Typography>
                        </>
                    }
                />
                <Checkbox {...label} />
            </ListItem>
        </List>
    );
}
export default ListItemMenu

