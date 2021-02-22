import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { Form, Col, Button } from "react-bootstrap";

const columns = [
  { id: "name", label: "Subject Description", minWidth: 170 },
  { id: "code", label: "Matric\u00a0Number", minWidth: 100 },
  {
    id: "subject",
    label: "Subject",
    minWidth: 170,
    align: "center",
  },
  {
    id: "score",
    label: "Score\u00a0(%)",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "unit",
    label: "Credit Unit",
    minWidth: 170,
    align: "center",
  },
];

function createData(name, code, subject, score, unit) {
  return { name, code, subject, score, unit };
}

const rows = [
  createData("Fluid Mechanices", "13/30GB072", "MAT 101", 70, 3),
  createData("Introduction to Applied Physics", "13/30GB072", "MAT 101", 70, 3),
  createData("Fluid Mechanices", "13/30GB073", "MAT 101", 70, 3),
  createData("Introduction to Applied Physics", "13/30GB072", "MAT 101", 70, 3),
  createData("Fluid Mechanices", "13/30GB074", "MAT 101", 70, 3),
  createData("Introduction to Applied Physics", "13/30GB072", "MAT 101", 70, 3),
  createData("Fluid Mechanices", "13/30GB075", "MAT 101", 70, 3),
  createData("Introduction to Applied Physics", "13/30GB072", "MAT 101", 70, 3),
  createData("Fluid Mechanices", "13/30GB076", "MAT 101", 70, 3),
  createData("Introduction to Applied Physics", "13/30GB072", "MAT 101", 70, 3),
  createData("Fluid Mechanices", "13/30GB077", "MAT 101", 70, 3),
  createData("Introduction to Applied Physics", "13/30GB072", "MAT 101", 70, 3),
  createData("Fluid Mechanices", "13/30GB078", "MAT 101", 70, 3),
  createData("Introduction to Applied Physics", "13/30GB072", "MAT 101", 70, 3),
  createData("Fluid Mechanices", "13/30GB079", "MAT 101", 70, 3),
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function Result() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Form>
        <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
          <Form.Label>Academic Year</Form.Label>
          <Form.Control as="select">
            <option>2014</option>
            <option>2015</option>
            <option>2015</option>
            <option>2016</option>
            <option>2017</option>
          </Form.Control>
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          style={{ marginLeft: "15px", marginBottom: "10px" }}
        >
          Submit
        </Button>
      </Form>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
