import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link}  from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar(props) {
  const classes = useStyles();

  if (props.page === "admin") {
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Admin Page
            </Typography>
            <Button component={ Link } to='/asignin' color="inherit">Sign Out</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              URL Shortener
            </Typography>
            <Button component={ Link } to='/home' color="inherit">Home</Button>
            <Button component={ Link } to='/analytics' color="inherit">Link Analytics</Button>
            <Button component={ Link } to='/signin' color="inherit">Sign Out</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }  
}