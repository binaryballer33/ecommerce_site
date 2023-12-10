import { createTheme } from "@mui/material";

const theme = createTheme();

const classes = {
    toolbar: theme.mixins.toolbar,
    title: {
        marginTop: '5%',
        textAlign: 'center',
    },
    emptyButton: {
        minWidth: '150px',
        [theme.breakpoints.down('xs')]: {
            marginBottom: '5px',
        },
        [theme.breakpoints.up('xs')]: {
            marginRight: '20px',
        },
    },
    checkoutButton: {
        minWidth: '150px',
    },
    link: {
        textDecoration: 'none',
    },
    cardDetails: {
        display: 'flex',
        marginTop: '10%',
        width: '100%',
        justifyContent: 'space-around',
    },
    buttonContainer: {
        marginBottom: theme.spacing(2),
    }
};

export default classes;