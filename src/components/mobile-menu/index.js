import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import './styles.scss';

const MobileMenu = ({ lang }) => {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem key={'Home'} disablePadding>
          <ListItemButton>
            <Link to="/" className="menu-link-mobile">
              {lang === 'ukr' && 'Головна'}
              {lang === 'eng' && 'Home'}
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem key={'Home'} disablePadding>
          <ListItemButton>
            <Link to="/about" className="menu-link-mobile">
              {lang === 'ukr' && 'Про нас'}
              {lang === 'eng' && 'About'}
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem key={'Home'} disablePadding>
          <ListItemButton>
            <Link to="/services" className="menu-link-mobile">
              {lang === 'ukr' && 'Послуги'}
              {lang === 'eng' && 'Services'}
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem key={'Home'} disablePadding>
          <ListItemButton>
            <Link to="/contacts" className="menu-link-mobile">
              {lang === 'ukr' && 'Контакти'}
              {lang === 'eng' && 'Contacts'}
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={'right'}>
        <Button onClick={toggleDrawer('right', true)}>
          <MenuIcon
            fontSize="large"
            sx={{
              color: '#76777a',
            }}
          />
        </Button>
        <SwipeableDrawer
          anchor={'right'}
          open={state}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list('right')}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
};

export default MobileMenu;
