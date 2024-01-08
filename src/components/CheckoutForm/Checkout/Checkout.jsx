import React, { useState } from 'react'
import { CssBaseline, Box, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button, Toolbar } from "@mui/material";
import classes from './CheckoutStyles'

const steps = ['Shipping address', 'Payment details']

const Checkout = () => {
    const [activeStep, setActiveStep] = useState(0)
    
    return (
        <>
            <CssBaseline />
            <Box sx={classes.toolbar} />
            <Box sx={classes.layout}>
                <Paper sx={classes.paper}>
                    <Typography variant="h4" align="center">Checkout</Typography>
                    <Stepper activeStep={activeStep} sx={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Paper>
            </Box>
        </>
    )
}

export default Checkout