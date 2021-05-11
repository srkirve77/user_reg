import React from 'react'
import TableBody from '@material-ui/core/TableBody';
import { useState, useEffect } from 'react';
import fetchUsers from '../server-conn/fetchUsers';
import deleteUser from '../server-conn/deleteUser';
import { TableCell, TableRow } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './tablebody.css'
import Modal from '@material-ui/core/Modal';
import UpdateUserForm from '../updateuser/updateuserform/updateuserform';
import Button from '@material-ui/core/Button';
import UpdateUser from '../updateuser/updateuser'
import DeleteUser from '../deleteuser/deleteuser'

const UserList = ({pageNo, getTotalPages}) => {
    const [users, setUsers] = useState()

    useEffect(() => {
    //  setInterval(() => {
    //      getUsers()
    //  }, 3000);
        getUsers()
    })

    async function getUsers() {
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
                        <UpdateUser user = {user}/>
                        <DeleteUser user = {user}/>
                    </TableRow>
                )
            )}      
            
        </TableBody>
    )
}

export default UserList
