import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './Header.scss'

const Header = () => {
    const [value, setValue] = React.useState(0);

    const categories = ['Saladas', 'Carnes', 'Peixes', 'Aves', 'Vegano', 'Sobremesa', 'Bebidas']

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
        <div className="brand">LOGO</div>
        <Box>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                aria-label="scrollable force tabs example">
                {categories.map(c => { return (<Tab key={c} label={c} />) })}
            </Tabs>
        </Box>
        </>
    )
}

export default Header;