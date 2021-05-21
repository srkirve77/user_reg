import React from 'react'
import TableBody from '@material-ui/core/TableBody';
import { useState, useEffect } from 'react';
import fetchUsers from '../server-conn/fetchUsers';
import { TableCell, TableRow } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './tablebody.css'


const UserList = ({pageNo, getTotalPages}) => {
    const [users, setUsers] = useState()

    useEffect(() => {
        getUsers()
    })

    async function getUsers() {
            console.log("inside getUsers")
            var data = await fetchUsers(pageNo)  
            setUsers(data.data)
            getTotalPages(data.meta.pagination.pages)
    }

    return (
        <TableBody>
            {
                users && users.map( (user) => 
                (
                    <TableRow key = {user.id}>
                        <TableCell align="center">{user.id}</TableCell>
                        <TableCell align="center">{user.name}</TableCell>
                        <TableCell align="center">{user.email}</TableCell>
                        <TableCell align="center">{user.gender}</TableCell>
                        <TableCell align="center">{user.status}</TableCell>
                        <TableCell align="center"><EditIcon className = "editicon"/></TableCell>
                        <TableCell align="center"><DeleteForeverIcon className = "deleteicon"/></TableCell>
                    </TableRow>
                )
            )}            
        </TableBody>
    )
}

export default UserList
