import React from 'react'
import { Typography, IconButton, CardMedia, CardContent, Card, CardActions } from '@mui/material'
import { AddShoppingCart } from '@mui/icons-material'
import classes from './ProductStyles'

const Product = ({ product, onAddToCart }) => {
  return (
    <Card sx={classes.card}>
      <CardMedia sx={classes.cardMedia} image={product.image.url} title={product.name} />
      <CardContent>
        <div style={classes.cardContent}>
          <Typography variant="h5" gutterBottom>{product.name}</Typography>
          <Typography variant="h5">{product.price.formatted_with_symbol}</Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" />
      </CardContent>
      <CardActions disableSpacing sx={classes.cardActions}>
        <IconButton 
        aria-label="Add to Cart"
        onClick={() => onAddToCart(product.id, 1)}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Product
