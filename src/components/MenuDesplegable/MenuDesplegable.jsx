import "tailwindcss/tailwind.css";
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

import { Link } from 'react-router-dom'

const MenuDesplegable = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        className='text-white font-extrabold hover:transform hover:scale-110 transition-transform normal-case'
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Categorias
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}><Link to={'/categoria/pantalones'}>Pantalones</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to={'/categoria/camisetas'}>Camisetas</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to={'/categoria/accesorios'}>Accesorios</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to={'/categoria/abrigos'}>Abrigos</Link></MenuItem>
      </Menu>
    </div>
  );
}

export default MenuDesplegable