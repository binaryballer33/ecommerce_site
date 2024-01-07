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

// media query event handler for mobile view using javascript
window.addEventListener('resize', function() {
  if (window.matchMedia('(max-width: 400px)').matches) {
      // Apply styles for screens smaller than or equal to 600px
      classes.content.padding = theme.spacing(1);
  }
}, false);

export default classes;