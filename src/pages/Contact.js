import React from 'react'
import Header from '../components/Header'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from "react-hook-form";
import { waitFor } from '@testing-library/react';

export default function Contact() {
  {/*data registration and validation*/}
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  {/*dialog to confirm submission of message*/}
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    window.location.reload(true);
  };

  return (
    <>
      <Header />
      <Box 
        component="form"
        sx={{ '& .MuiTextField-root': {marginTop: 2 }, flexGrow: 1 }}
        onSubmit={handleSubmit(onSubmit), handleClickOpen}
        >
        
        <Typography variant='h5' sx = {{paddingLeft: 5, paddingTop: 5, paddingBottom: 2, fontWeight: 'bold', fontFamily: 'montserrat'}}>
            Contact us
        </Typography>

        <Grid container spacing={0}>

          <Grid item xs={12} sm={6} sx = {{paddingLeft: 5, paddingTop: 2, paddingRight: 5,}}>
            <div>
              <Typography sx = {{fontWeight: 'bold'}}>
                Full name
              </Typography>
              <TextField
                required
                id="name_textfield"
                placeholder="Insert your full name"
                helperText="Required*"
                fullWidth
                {...register("fullName", {required: true})}                                         
              />
            </div>
          </Grid>

          <Grid item xs={12} sm={6} sx = {{paddingLeft: 5, paddingTop: 2, paddingRight: 5,}}>
            <div>
              <Typography sx = {{fontWeight: 'bold'}}>
                Email address
              </Typography>
              <TextField
                required
                fullWidth
                id="email_textfield"
                placeholder="Insert your email address"
                helperText="Required*"
                {...register("email", {required: true})}
              />
            </div>
          </Grid>

          <Grid item xs={12} sm={6} sx = {{paddingLeft: 5, paddingTop: 2, paddingRight: 5,}}>
            <div>
              <Typography sx = {{fontWeight: 'bold'}}>
                Your message
              </Typography>
              <TextField
                required
                fullWidth
                id="message_textfield"
                placeholder="Insert your message here"
                helperText="Required*"
                multiline
                rows={4}
                {...register("message", {required: true})}
              />
            </div>
          </Grid>

          <Grid item xs={12} sx = {{marginLeft: 5, marginTop: 2, marginRight: 5}}>
            <Button type = 'submit' variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </Grid>

        </Grid>
      </Box>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"We received your message!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            We will get back to you very soon to make sure we solve all your doubts!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      
    </>
  )
}
