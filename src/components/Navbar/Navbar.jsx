import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'
import logo from '../../assets/commerce.png'
import classes from './NavbarStyles'

const Navbar = ({ totalItems }) => {
  const location = useLocation()

  return (
    <>
      <AppBar position="fixed" color="inherit" sx={classes.appBar}>
        <Toolbar>
          {/* Using component={Link} gets rid of link coloring and underline for you */}
          <Typography component={Link} to="/" variant='h6' color="inherit" sx={classes.title}>
            <img src={logo} alt="Commerce.js" height="25px" style={classes.image}/>
            Commerce.js
          </Typography>
          <div style={classes.grow} />
          { location.pathname === "/" && (
            <div style={classes.button}>
              <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                <Badge badgeContent={totalItems} color="secondary">  {/* I think the commerce api is slow, can't get card item count in real time, needs refresh and is slow */}
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
            )
          }
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
