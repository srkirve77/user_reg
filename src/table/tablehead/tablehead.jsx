import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './tablehead.css'

const TableHeader = () => {
    return (
        <TableHead className = "tablehead">
            <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Gender</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Edit</TableCell>
                <TableCell align="center">Delete</TableCell>
            </TableRow>
        </TableHead>  
    )
}

export default TableHeader
