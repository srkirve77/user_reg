import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import './tablehead.css'

const useStyles = makeStyles({
    root: {
      background: '#4856FD',
      color: 'white',
      fontWeight:'900'
    }
  });

const TableHeader = () => {

    const classes = useStyles()

    return (
        <TableHead>
            <TableRow>
                <TableCell className = {classes.root} align="center">Id</TableCell>
                <TableCell className = {classes.root} align="center">Name</TableCell>
                <TableCell className = {classes.root} align="center">Email</TableCell>
                <TableCell className = {classes.root} align="center">Gender</TableCell>
                <TableCell className = {classes.root} align="center">Status</TableCell>
                <TableCell className = {classes.root} align="center">Edit</TableCell>
                <TableCell className = {classes.root} align="center">Delete</TableCell>
            </TableRow>
        </TableHead>  
    )
}

export default TableHeader
