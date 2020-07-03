import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./NavBar.css";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: "0 20px",
    cursor: "pointer",
  },
  imageWidth: {
    width: "5%",
    cursor: "pointer",
  },
  fullImageWidth: {
    width: "107%",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.imageWidth}>
            <img src="assets/bat1.gif" className={classes.fullImageWidth} />
          </Typography>
          <Link className="link" to="/">
            <Typography variant="h6" className={classes.margin}>
              Home
            </Typography>
          </Link>
          <Link className="link" to="/task">
            <Typography variant="h6" className={classes.margin}>
              Task
            </Typography>
          </Link>
          <Link className="link" to="/user">
            <Typography variant="h6" className={classes.margin}>
              User
            </Typography>
          </Link>
          <Link className="link" to="/login">
            <Typography variant="h6" className={classes.margin}>
              Login
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
