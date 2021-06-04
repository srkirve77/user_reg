import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import AddUserForm from './adduserform/adduserform';

const useStyles = makeStyles({
    root: {
      background: '#4856FD',
      color: 'white',
      width:150,
      fontWeight:'900',
      fontSize:'15px',
      marginLeft:1330,
      marginTop : -1400,
    },
    addbutton: {
        marginRight:10,
    }
    
})
const AddUser = () => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleCloseButtonFromModal = (CloseButton) => {
        setOpen(CloseButton);
    }
    
    return (
        <div>
        <Button variant="contained" color = "primary" className = {classes.root} onClick={handleOpen}>
            <AddIcon className = {classes.addbutton} />Add User
        </Button>
         <Modal
         open = {open}
         onClose={handleClose}
         aria-labelledby="simple-modal-title"
         aria-describedby="simple-modal-description"
        >
            <AddUserForm CloseButton = {handleCloseButtonFromModal}/>
       </Modal>
        </div>
    )
}

export default AddUser
