import React from 'react'
import { Typography, Button, Card, CardMedia, CardContent, CardActions } from '@mui/material'
import classes from './CartItemStyles'

const CartItem = ({ item, handleUpdateCartQty, handleRemoveFromCart }) => {
  return (
    <Card sx={classes.card}>
      <CardMedia image={item.image.url} alt={item.name} sx={classes.cardMedia} />
      <CardContent sx={classes.cardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions sx={classes.cartActions}>
        <div style={classes.buttons}>
          <Button type="button" size="large" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)} sx={classes.fontSize}>-</Button>
          <Typography sx={classes.fontSize}>{item.quantity}</Typography>
          <Button type="button" size="large" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)} sx={classes.fontSize}>+</Button>
        </div>
        <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
      </CardActions>
    </Card>
  )
}

export default CartItem
