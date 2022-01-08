import React, { useEffect } from 'react'
import Header from '../components/Header'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useForm } from "react-hook-form"
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
import { ThemeProvider } from '@mui/material/styles'
import theme from '../components/Theme'
import EditIcon from '@mui/icons-material/Edit'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import HomeIcon from '@mui/icons-material/Home'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

export default function Profile() {

  /* change webpage title */
  useEffect(() => {
    document.title = "WorCo: Your profile"
  }, [])

  /*dialog to confirm submission of message*/
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  /*dialog to edit info*/
  const [openEdit, setOpenEdit] = React.useState(false);

  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
    
  };
  
  const { register } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small"/>}
          sx = {{ color: theme.palette.primary.main, ml: 3, mt: 1 }}>
          <Link underline="hover" href="/"> 
            {<HomeIcon sx={{ fontSize: '18px', verticalAlign: 'text-top'}}/>} 
            WorCo Home
          </Link>
          <Typography sx = {{ color: theme.palette.primary.main }}> Profile </Typography>
        </Breadcrumbs>
        
        <Box role="main" id="main-content" aria-label="main content area"
          sx={{ flexGrow: 1, mt: 3, mx: 5, mb: 2 }}>
          <Typography role="banner" variant='h1' aria-label="main content title" 
            sx = {{ mb: 3, fontSize: '24pt', fontWeight: 'bold' }}>
            Your profile
          </Typography>
          
          <Grid container spacing={6}>
            <Grid item xs={12} sm={4}>
                <img
                      src='https://images.unsplash.com/photo-1608831540955-35094d48694a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=526&q=80'
                      alt= 'Your profile headshot'
                      loading="lazy"
                      width = {'100%'}
                      sx = {{ mt: 5 }} />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant='h2' sx={{ fontWeight: 'bold', fontSize: '18pt', color: theme.palette.primary.main }}>
                Personal information
              </Typography>

              <Typography sx = {{ pt: 2 }}>
                Name Surname
              </Typography>

              <Typography sx = {{ pt: 2 }}>
                email@email.com
              </Typography>

              <Typography sx = {{ pt: 2 }}>
                Example Street, 24, City, Country
              </Typography>

              <Button 
                    variant = "contained" 
                    endIcon = {<EditIcon />}
                    onClick={handleClickOpenEdit} 
                    sx = {{ mb: 6, mt: 3, fontSize: '12pt', '&:hover': { backgroundColor: theme.palette.btnhover.main } }}
                    aria-label='Edit personal information'>
                Edit
              </Button>

              <Box component="form" onSubmit={onSubmit}>
                <Dialog
                  role="form"
                  open={openEdit}
                  onClose={handleCloseEdit}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                  aria-label='form for editing your personal information'>

                  <DialogTitle id="alert-dialog-title">
                    Insert your data
                  </DialogTitle>

                  <DialogContent>
                    <DialogContentText id="alert-dialog-name">
                      Insert your updated full name here 
                    </DialogContentText>
                    
                    <TextField
                      required
                      id="name_textfield"
                      placeholder="Full name"
                      fullWidth
                      {...register("name")} />

                    <DialogContentText id="alert-dialog-email">
                      Insert your updated email here 
                    </DialogContentText>

                    <TextField
                      required
                      id="email_textfield"
                      placeholder="Email"
                      fullWidth  
                      {...register("email")} />

                    <DialogContentText id="alert-dialog-address">
                      Insert your updated address here 
                    </DialogContentText>

                    <TextField
                      required
                      id="address_textfield"
                      placeholder="Address"
                      fullWidth
                      {...register("address")} />
                  </DialogContent>
                  
                  <DialogActions>
                    <Button onClick={handleCloseEdit} autoFocus aria-label='Cancel'
                      sx = {{ '&:hover': { backgroundColor: theme.palette.btnhoverlight.main, color: theme.palette.btnhover.main } }}>
                      Cancel
                    </Button>

                    <Button 
                        type = 'submit' 
                        variant = "contained" 
                        onClick={handleCloseEdit} 
                        autoFocus
                        aria-label='Update Information'
                        sx = {{ '&:hover': { backgroundColor: theme.palette.btnhover.main } }}>
                      Update
                    </Button>
                  </DialogActions>
                </Dialog>
              </Box>

              <Typography variant='h2' sx={{ mb: 3, fontWeight: 'bold', fontSize: '18pt', color: theme.palette.primary.main }}>
                Payment methods
              </Typography>

              <Card sx={{ maxWidth: 345, mb: 3 }}>
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
                  aria-describedby="alert-dialog-description"
                  aria-label='Payment Method Information'>

                <DialogTitle id="alert-dialog-title">
                  MasterCard xxxxxx098
                </DialogTitle>

                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    This is your present payment method. Changing it is currently not supported. 
                  </DialogContentText>
                </DialogContent>

                <DialogActions>
                  <Button 
                      onClick={handleClose} 
                      autoFocus
                      aria-label='Close payment methods dialog'
                      sx = {{ '&:hover': { backgroundColor: theme.palette.btnhoverlight.main, color: theme.palette.btnhover.main } }}>
                    Close
                  </Button>
                </DialogActions>
              </Dialog>                             
            </Grid>       
          </Grid>
        </Box>
      </ThemeProvider>          
    </>
  )
}
