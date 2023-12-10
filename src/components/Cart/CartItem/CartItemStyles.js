import { createTheme } from "@mui/material";

const theme = createTheme();

const classes = {
    card: {
        height: '600px'
    },
    cardMedia: {
        width: '320px',
        height: '320px',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cartActions: {
        justifyContent: 'space-around',
    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
    },
    fontSize: {
        fontSize: 'x-large',
    }
};

export default classes;