import React from 'react'
import { TableCell, TableRow } from '@material-ui/core';
import UpdateUserForm from './updateuserform/updateuserform'
import Modal from '@material-ui/core/Modal';
import EditIcon from '@material-ui/icons/Edit';
import { useState, useEffect } from 'react';

const UpdateUser = ({user}) => {
    const [userToUpdate, setUserToUpdate] = useState()
    const [openUpdate, setOpenUpdate] = React.useState(false);

    const handleUpdate = () => {
        setUserToUpdate(user)
        setOpenUpdate(true);
    }

    const handleCloseUpdate = () => {
        setOpenUpdate(false)
    }

    return (
            <TableCell align="center"><EditIcon className = "editicon" onClick = {() => handleUpdate()}/>
                <Modal
                    open = {openUpdate}
                    onClose={handleCloseUpdate}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    >
                        <UpdateUserForm CloseButton = {handleCloseUpdate} user = {userToUpdate}/>
                </Modal>
            </TableCell>
    )
}

export default UpdateUser