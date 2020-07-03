import React, { useEffect, useState } from "react";
import {
  Container,
  Paper,
  Table,
  makeStyles,
  TableContainer,
  TablePagination,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@material-ui/core";
import TableHeader from "../TableHeader/TableHeader";
import { useFullPageLoader } from "../FullPageLoader/useFullPageLoader";
import TableRowData from "../TableRowData/TableRowData";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginTop: "30px",
  },
  container: {
    maxHeight: "460px",
  },
});

const TableData = () => {
  const [data, setData] = useState([]);
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [commited, setCommited] = useState({
    name: "",
    radio: "",
  });
  const classes = useStyles();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCommited((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getData = () => {
    showLoader();
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        hideLoader();
        for (let i of result) {
          if (i.completed == true) {
            i.completed = "True";
          } else if (i.completed == false) {
            i.completed = "False";
          }
        }
        localStorage.setItem("notes", JSON.stringify(result));
        setData(JSON.parse(localStorage.getItem("notes")));
      });
  };

  let url = "http://jsonplaceholder.typicode.com/todos";
  useEffect(() => {
    if (
      !isEmpty(localStorage.getItem("notes")) &&
      JSON.parse(localStorage.getItem("notes")).length > 0
    )
      setData(JSON.parse(localStorage.getItem("notes")));
    else {
      getData();
    }
  }, []);

  const isEmpty = (val) => {
    if (val == "" || val == undefined) return true;
    else return false;
  };

  const submit = (e) => {
    if (isEmpty(commited.name)) {
      alert("Tilte will not be empty");
      return;
    }
    if (isEmpty(commited.radio)) {
      alert("Radio will not be empty");
      return;
    }

    let obj = {};
    obj.title = commited.name;
    obj.completed = commited.radio;
    data.unshift(obj);
    localStorage.setItem("notes", JSON.stringify(data));
    setData(JSON.parse(localStorage.getItem("notes")));
    setCommited("");
    handleClose();
  };
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      data.splice(id, 1);
      localStorage.setItem("notes", JSON.stringify(data));
      setData(JSON.parse(localStorage.getItem("notes")));
    } else {
      return;
    }
  };

  return (
    <>
      <Container fixed style={{ marginTop: "30px" }}>
        <Button
          onClick={handleClickOpen}
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
        >
          Add Task
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Task</DialogTitle>
          <DialogContent style={{ marginTop: "-20px" }}>
            <TextField
              margin="dense"
              style={{ marginBottom: "30px" }}
              id="name"
              label="Add Title"
              type="text"
              fullWidth
              onChange={handleChange}
              name="name"
              value={commited.name || ""}
            />
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Task is Completed ot Not :{" "}
              </FormLabel>
              <RadioGroup
                aria-label="gender"
                id="radio"
                name="radio"
                value={commited.radio || ""}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="True"
                  control={<Radio />}
                  label="True"
                />
                <FormControlLabel
                  value="False"
                  control={<Radio />}
                  label="False"
                />
              </RadioGroup>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={submit} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHeader />
              <TableRowData
                commentsData={data}
                page={page}
                rowsPerPage={rowsPerPage}
                handleDelete={handleDelete}
              />
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 100]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </Container>
      {loader}
    </>
  );
};

export default TableData;
