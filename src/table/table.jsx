import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import UserList from '../tablebody/tablebody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableHeader from './tablehead/tablehead'
import './table.css'

const useStyles = makeStyles({
  root: {
    backgroundColor : 'blue',
  },
  stickyposition : {
    position:'sticky'
  }
});

const UserTable = () => {

    const classes = useStyles();

    return (
        <div>
            <Paper className = "userpaper">
             <Table>
                <TableHeader/>    
                <UserList/>      
            </Table>
            </Paper>
        </div>
    )
}

export default UserTable
