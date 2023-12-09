import { createTheme } from "@mui/material/styles";

const theme = createTheme();

const classes = {
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    // in MUI5 theme.palette.background.default is just plain #fff white, I got the hex value from MUIv4
    backgroundColor: '#fafafa',
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
};

export default classes;