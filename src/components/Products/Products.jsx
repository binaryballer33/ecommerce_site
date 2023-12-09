import React from 'react'
import { Box, Grid } from '@mui/material'
import Product from './Product/Product'
import classes  from './ProductsStyles'

const Products = ({ products, onAddToCart }) => {
  return (
    <Box sx={classes.content}>
      <Box sx={classes.toolbar }></Box>
        <Grid container justifyContent="center" spacing={4}>
          {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Box>
    
  )
}

export default Products
