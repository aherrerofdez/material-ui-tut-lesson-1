import React from 'react'
import Header from '../components/Header'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Contact() {
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
        sx={{ '& .MuiTextField-root': {marginTop: 2 }, flexGrow: 1 }}>
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
              />
            </div>
          </Grid>

          <Grid item xs={12} sx = {{marginLeft: 5, marginTop: 2, marginRight: 5}}>
            <Button variant="contained" endIcon={<SendIcon />} onClick={handleClickOpen}>
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
