import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import './adduserform.css'
import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import '../../server-conn/postUser';
import postUser from '../../server-conn/postUser';

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

const AddUserForm = ({CloseButton}) => {
    const classes = useStyles()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('Male')
    const [status, setStatus] = useState('Inactive')
    

    const cancelForm = () => {
        CloseButton(false)
    }

    const onSubmit = async () => {
        const user = {name, email, gender, status}
        var data = await postUser(user)
        console.log(data)
        if( parseInt(data.code/100) === 2 ) {
            CloseButton(false)
        }
    }

    return (
        <div className = {classes.paper}>
            <h1 className="header">Add User Form</h1>
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
            <Button variant="contained" color = "primary" className = {classes.submitbutton} onClick = {onSubmit}>
                Submit
            </Button>
            <Button variant="contained" color = "secondary" className = {classes.cancelbutton} onClick={cancelForm} >
                Cancel
            </Button>
        </div>
    )
}

export default AddUserForm
