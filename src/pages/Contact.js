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

export default function Contact() {
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
                Name
              </Typography>
              <TextField
                required
                id="outlined-basic"
                placeholder="Insert your name"
                helperText="Required*"
                fullWidth
              />
            </div>
          </Grid>

          <Grid item xs={12} sm={6} sx = {{paddingLeft: 5, paddingTop: 2, paddingRight: 5,}}>
            <div>
              <Typography sx = {{fontWeight: 'bold'}}>
                Surname
              </Typography>
              <TextField
                required
                fullWidth
                id="outlined-required"
                placeholder="Insert your surname"
                helperText="Required*"
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
                id="outlined-required"
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
                id="outlined-multiline-static"
                placeholder="Insert your message here"
                helperText="Required*"
                multiline
                rows={4}
              />
            </div>
          </Grid>

              <Grid item xs={12} sx = {{marginLeft: 5, marginTop: 2, marginRight: 5}}>
                <Button variant="contained" endIcon={<SendIcon />}>
                  Send
                </Button>
                </Grid>

        </Grid>
      </Box>
    </>
  )
}
