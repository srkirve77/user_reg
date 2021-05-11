import React from 'react'
import { TableCell, TableRow } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import EditIcon from '@material-ui/icons/Edit';
import { useState, useEffect } from 'react';
import deleteUser from '../server-conn/deleteUser';
import DeleteUserPopup from '../deleteuser/deleteuserform/deleteuserpopup';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const DeleteUser = ({user}) => {
    const [openDelete, setOpenDelete] = React.useState(false);
    const [userToDelete, setUserToDelete] = useState()

    const handleOpenDelete = (user) => {
        console.log(user)
        setUserToDelete(user)
        setOpenDelete(true)
    }

    const handleCloseDelete = () => {
        setOpenDelete(false)
    }

    const handleCloseButtonFromModal = () => {
        setOpenDelete(false)
    }

    return (
        <TableCell align="center"><DeleteForeverIcon className = "deleteicon" onClick = {() => handleOpenDelete(user)}/>
                        <Modal
                            open = {openDelete}
                            onClose={handleCloseDelete}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                            >
                               <DeleteUserPopup CloseButton = {handleCloseButtonFromModal} user = {userToDelete}/>
                        </Modal>
        </TableCell>
    )
}

export default DeleteUser
