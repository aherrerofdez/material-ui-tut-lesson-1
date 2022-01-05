import React from 'react'
import Header from '../components/Header'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { Button, CardActionArea } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

export default function Profile() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    window.location.reload(true)
  }

  return (
    <>
      <Header />

      <Box sx={{ flexGrow: 1, marginTop: 5, marginLeft: 5, marginBottom: 2, marginRight: 5 }}>

        <Grid container spacing={6}>

          <Grid item xs={12} sm={3}>
            <img
              src='https://images.unsplash.com/photo-1608831540955-35094d48694a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=526&q=80'
              alt='Profile picture'
              loading="lazy"
              width={'100%'}
              sx={{ marginTop: 5 }} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
              Name Surname
            </Typography>

            <Typography sx={{ paddingTop: 2 }}>
              email@email.com
            </Typography>

            <Typography sx={{ paddingTop: 2 }}>
              Example Street, 24, City, Country
            </Typography>

            <Typography variant='h6' sx={{ paddingTop: 2 }}>
              Payment methods
            </Typography>

            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea onClick={handleClickOpen}>
                <CardMedia
                  component="img"
                  height="140"
                  src="https://images.unsplash.com/photo-1613243555978-636c48dc653c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="Credit card image"/>

                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    MasterCard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Prepaid xxxxxx098
                  </Typography>
                </CardContent>

              </CardActionArea>
            </Card>

            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description">

              <DialogTitle id="alert-dialog-title">
                {"MasterCard xxxxxx098"}
              </DialogTitle>

              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  This is your present payment method. Changing it is currently not supported.
                </DialogContentText>
              </DialogContent>

              <DialogActions>
                <Button onClick={handleClose} autoFocus>
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}