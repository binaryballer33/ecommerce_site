import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Typography, Button, Grid, Box } from '@mui/material'
import CartItem from './CartItem/CartItem'
import classes from './CartStyles'

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
  const isEmpty = !cart?.line_items?.length // if cart is empty

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart,
      <Link to="/" style={classes.link}>start adding some!</Link>
    </Typography>
  )

  const FilledCart = () => (
    <>
    <Grid container spacing={3}>
      {cart?.line_items?.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <CartItem item={item} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} />
        </Grid>
      ))}
    </Grid>
    <Box sx={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal: { cart.subtotal.formatted_with_symbol}
        </Typography>
        <div style={classes.buttonContainer}>
          <Button variant="contained" color="secondary" size='large' type='button' onClick={handleEmptyCart} sx={classes.emptyButton}>
            EmptyCart
          </Button>
          <Button variant="contained" color="primary" size='large' type='button' sx={classes.checkoutButton}>
            Checkout
          </Button>
        </div>
    </Box> 
    </>
  )

  return (
    <Container>
      <Box sx={classes.toolbar}></Box>
      <Typography variant="h3"  gutterBottom sx={classes.title}>Your Shopping Cart</Typography>
      { isEmpty ? <EmptyCart /> : <FilledCart handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart}/>}
    </Container>
  )
}

export default Cart
