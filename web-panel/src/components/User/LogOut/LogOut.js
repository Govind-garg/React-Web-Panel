import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const LogOut = () => {
  const style = {
    marginTop: "10px",
    width: "100%",
  };
  const clear = () => {
    localStorage.removeItem("login");
  };
  return (
    <>
      <Link to="/login" style={{ textDecoration: "none" }}>
       
        <Button
          variant="contained"
          onClick={clear}
          style={style}
          color="secondary"
        >
          LogOut
        </Button>
      </Link>
    </>
  );
};

export default LogOut;
