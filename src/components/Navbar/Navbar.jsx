import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'
import logo from '../../assets/commerce.png'
import classes from './NavbarStyles'

const Navbar = ({ totalItems }) => {
  return (
    <>
      <AppBar position="fixed" color="inherit" sx={classes.appBar}>
        <Toolbar>
          <Typography variant='h6' color="inherit" sx={classes.title}>
            <img src={logo} alt="Commerce.js" height="25px" style={classes.image}/>
            Commerce.js
          </Typography>
          <div style={classes.grow} />
          <div style={classes.button}>
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">  {/* I think the commerce api is slow, can't get card item count in real time, needs refresh and is slow */}
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
