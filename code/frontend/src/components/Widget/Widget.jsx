import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Button, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      gap: theme.spacing(2),
    },
    padding: theme.spacing(4),
  },
  imageContainer: {
    position: "relative",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      marginBottom: 0,
    },
  },
  purpleShape: {
    position: "absolute",
    bottom: "-4px",
    left: "-4px",
    width: "12rem",
    height: "12rem",
    backgroundColor: theme.palette.primary.main,
    transform: "rotate(12deg)",
    zIndex: -1,
  },
  image: {
    width: "12rem",
    height: "12rem",
    objectFit: "cover",
    borderRadius: "0.75rem",
    zIndex: 1,
  },
  content: {
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      marginTop: 0,
      marginLeft: theme.spacing(4),
    },
  },
  buttonContainer: {
    marginTop: theme.spacing(4),
    display: "flex",
    gap: theme.spacing(2),
  },
  button: {
    fontFamily: "'Spicy Rice', serif",
    fontWeight: "bold",
  },
}));

const Widget = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container className={classes.root} spacing={2} alignItems="center">
      <Grid item xs={12} md={6} className={classes.imageContainer}>
        <div className={classes.purpleShape}></div>
        <img
          className={classes.image}
          src="https://placehold.co/300x300"
          alt="Smiling person"
        />
      </Grid>
      <Grid item xs={12} md={6} className={classes.content}>
        <Typography variant="h4" className={classes.title}>
          Take control of your emotional health.
        </Typography>
        <Typography variant="body1" className={classes.description}>
          Whether it’s for you or a friend you care about, there are always
          things we can do to strengthen our emotional health and support
          others.
        </Typography>
        <div className={classes.buttonContainer}>
          <Button variant="contained" color="primary" className={classes.button}>
            FOR YOU
          </Button>
          <Button variant="outlined" color="primary" className={classes.button}>
            FOR A FRIEND
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Widget />
    </ThemeProvider>
  );
};

export default App;
