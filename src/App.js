import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function App() {
  const [films, setfilms] = useState([]);
    const classes = useStyles();

  useEffect(() => {
    if (films.length === 0) {
      fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(res => {
        setfilms(res)
      })
    }
  }

  );

  return (
    <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="customized table">
              <TableHead>
          <TableRow>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell align="right">Original Title</StyledTableCell>
            <StyledTableCell align="right">Director</StyledTableCell>
            <StyledTableCell align="right">Producer</StyledTableCell>
            <StyledTableCell align="right">Release Date</StyledTableCell>
            <StyledTableCell align="right">Running time</StyledTableCell>
            <StyledTableCell align="right">Rating Score</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {films.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.title}
              </StyledTableCell>
              <StyledTableCell align="right">{row.original_title}</StyledTableCell>
              <StyledTableCell align="right">{row.director}</StyledTableCell>
              <StyledTableCell align="right">{row.producer}</StyledTableCell>
              <StyledTableCell align="right">{row.release_date}</StyledTableCell>
              <StyledTableCell align="right">{row.running_time}</StyledTableCell>
              <StyledTableCell align="right">{row.rt_score}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default App;