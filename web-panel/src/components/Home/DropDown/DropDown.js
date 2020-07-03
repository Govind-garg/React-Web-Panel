import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import CardA from "../Cards/CardA";
import CardB from "../Cards/CardB";
import CardC from "../Cards/CardC";
import "./DropDown.css";
import NoData from "../Cards/NoData";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function DropDown() {
  const classes = useStyles();
  const [card, setCard] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setCard(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const renderSelectedCard = (card) => {
    if (!card) {
      return <NoData />;
    } else if (card == 10) {
      return <CardA />;
    } else if (card == 20) {
      return <CardB />;
    } else if (card == 30) {
      return <CardC />;
    }
  };
  return (
    <Container className="flex" fixed>
      <Button className={classes.button} onClick={handleOpen}>
        Select Course
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Course</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={card}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Full Stack Developer</MenuItem>
          <MenuItem value={20}>Java Developer</MenuItem>
          <MenuItem value={30}>Data Science</MenuItem>
        </Select>
      </FormControl>
      <section>
        <div className="top">{renderSelectedCard(card)}</div>
      </section>
    </Container>
  );
}
