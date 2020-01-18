import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import './style.scss';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: 'white',
    color: '#39586B',
    fontSize: 15,
    fontFamily: "'Roboto', sans-serif",
    letterSpacing: 0,
    borderTop: '1px solid #C8C8C8',
    borderBottom: '1px solid #C8C8C8',
  },
  body: {
    fontSize: 14,
    color: '#000000',
    fontFamily: "'Roboto', sans-serif",
    letterSpacing: 0,
    paddingTop: 15,
    paddingBottom: 15,
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
});

export default function CustomizedTables(props) {
  const classes = useStyles();

  return (
    <TableContainer>
      <p
        style={{
          textAlign: 'left',
          fontFamily: "'Roboto', sans-serif",
          letterSpacing: 0,
          fontWeight: 600,
          fontSize: 15,
          color: '#FFC70C',
        }}
      >
        {props.heading}
      </p>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            {props.ths.map(th => (
              <StyledTableCell align="left">{th}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(props.trs).map((tr, index) => (
            <TableRow key={index}>
              {props.trs[index].map(row => (
                <StyledTableCell component="th" scope="row">
                  {row.type === 'text' ? (
                    row.data
                  ) : row.type === 'image' ? (
                    <>
                      <img src={row.data.url} style={{ width: 25 }} />
                      &nbsp;&nbsp;
                      <span>{row.data.text}</span>
                    </>
                  ) : (
                    ''
                  )}
                </StyledTableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
