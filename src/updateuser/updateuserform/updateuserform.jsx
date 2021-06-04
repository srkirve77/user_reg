import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import './updateuserform.css'
import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import '../../server-conn/postUser';
import putUser from '../../server-conn/putUser';

const useStyles = makeStyles({
    paper:{
        marginLeft:600,
        marginTop:263,
        width:600,
        height:430,
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

const UpdateUserForm = ({CloseButton, user}) => {
    const classes = useStyles()
    const [id, setUserId] = useState(user.id)
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [gender, setGender] = useState(user.gender)
    const [status, setStatus] = useState(user.status)
    

    const cancelForm = () => {
        CloseButton(false)
    }

    const onSubmit = async () => {
        const user = {id, name, email, gender, status}
        var data = await putUser(user)
        if(  data.code === 200 ) {
            CloseButton(false)
        }
    }

    return (
        <div className = {classes.paper}>
            <h1 className="header">Update User Form</h1>
            <div className = "formfield">
                <label className = "inputlabel">Name</label>
                <input type='text' className="nameinputfield" placeholder='enter your name'
                onChange = {(e) => setName(e.target.value)}
                value = {name}
                />
            </div>
            <br/>
            <div className = "formfield">
                <label className = "inputlabel">Email</label>
                <input type='text' className="emailinputfield" placeholder='enter your email'
                onChange = {(e) => setEmail(e.target.value)}
                value = {email}
                />
            </div>
            <br/>
            <div className = "formfield">
                <label className = "inputlabel">Gender</label>
                <select className="genderinputfield"
                        value={gender} 
                        onChange={(e) => setGender(e.target.value)}                 
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                </select>
            </div>
            <br/>
            <div className = "formfield">
                <label className = "inputlabel">Status</label>
                <select className="statusinputfield"
                        value={status} 
                        onChange={(e) => setStatus(e.target.value)} 
                    >
                        <option value="Inactive">Inactive</option>
                        <option value="Active">Active</option>
                </select>
            </div>
            <Button variant="contained" id = "savebutton" color = "primary" className = {classes.submitbutton} onClick = {onSubmit}>
                Save
            </Button>
            <Button variant="contained" id = "cancelbutton" color = "secondary" className = {classes.cancelbutton} onClick={cancelForm} >
                Cancel
            </Button>
        </div>
    )
}

export default UpdateUserForm
