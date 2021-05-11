import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import '../../server-conn/postUser';
import deleteUser from '../../server-conn/deleteUser';

const useStyles = makeStyles({
    paper:{
        marginLeft:600,
        marginTop:263,
        width:600,
        height: 200,
        backgroundColor:'white',
        color : 'black',
        borderRadius: '15px',
        paddingTop: '4px',
        border: '1px solid #4856FD',
    },
    submitbutton: {
        background: '#4856FD',
        color: 'white',
        width:150,
        fontWeight:'900',
        fontSize:'15px',
        marginLeft:100,
        marginTop : 20
      },
      cancelbutton: {
        color: 'white',
        width:150,
        fontWeight:'900',
        fontSize:'15px',
        marginLeft:130,
        marginTop : 20
      },
})

const DeleteUserPopup = ({CloseButton, user}) => {
    const classes = useStyles()
    const [email, setEmail] = useState(user.email)
    
    const onDelete = (id) => {        
        console.log(id)
        deleteUser(id)
        CloseButton(false)
    }   
    
    const handleCancelButton = () => {
        CloseButton(false)
    }

    return (
        <div className = {classes.paper}>
            <h2 className={classes.header} align="center">Do you really want to delete this user?<br/>({email})</h2>
          
            <Button variant="contained" color = "primary" className = {classes.submitbutton} onClick= {() => onDelete(user.id)}>
                Delete
            </Button>
            <Button variant="contained" color = "secondary" className = {classes.cancelbutton} onClick = {() => handleCancelButton()}>
                Cancel
            </Button>
        </div>
    )
}

export default DeleteUserPopup
