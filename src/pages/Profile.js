import React from 'react'
import Header from '../components/Header'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useForm } from "react-hook-form";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'city', headerName: 'City'},
  { field: 'address', headerName: 'address'},
  { field: 'numberOfSpaces', headerName: 'Number of spaces', type: 'number'}
];

const rows = [
  { id: 1, city: 'Madrid', address: 'Calle de Henares', numberOfSpaces: 20},
  { id: 2, city: 'Madrid', address: 'Calle de Churruca', numberOfSpaces: 12},
  { id: 3, city: 'Madrid', address: 'Glorieta de Caballeros', numberOfSpaces: 8},
  { id: 4, city: 'Getafe', address: 'Calle de la Luz', numberOfSpaces: 20},
  { id: 5, city: 'Getafe', address: 'Calle de Velazquez', numberOfSpaces: 10},
  
];

export default function Profile() {

  {/*dialog to confirm submission of message*/}
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  {/*dialog to edit info*/}
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
      <Header />

      <Box sx={{ flexGrow: 1, marginTop: 5, marginLeft: 5, 
            marginBottom: 2, marginRight: 5}}>

        <Grid container spacing={6}>

        <Grid item xs={12} sm={3}>
            <img
                  src='https://images.unsplash.com/photo-1608831540955-35094d48694a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=526&q=80'
                  alt= 'Profile picture'
                  loading="lazy"
                  width = {'100%'}
                  sx = {{marginTop: 5}}
            />
        </Grid>

          <Grid item xs={12} sm={6}>
            <Typography 
                variant='h5' 
                sx = {{ffontWeight: 'bold'}}
            >
              Personal information  
            </Typography>

            <Typography 
                sx = {{paddingTop: 2}}
                id = "name"
            >
              Name Surname
            </Typography>

            <Typography sx = {{paddingTop: 2}}>
              email@email.com
            </Typography>

            <Typography sx = {{paddingTop: 2}}>
              Example Street, 24, City, Country
            </Typography>

            <Button 
                  variant = "contained" 
                  onClick={handleClickOpenEdit} 
                  autoFocus 
                  sx = {{marginBottom: 5, marginTop: 4}}
                  aria-label='Edit Personal Information'
            >
              Edit
            </Button>

            <Box
                component="form"
                onSubmit={onSubmit}
            >
              
              <Dialog
                open={openEdit}
                onClose={handleCloseEdit}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                aria-label='Information Edit Form'
              >
                <DialogTitle id="alert-dialog-title">
                  {"Insert your data"}
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
                    {...register("name")}                                          
                  />

                  <DialogContentText id="alert-dialog-email">
                    Insert your updated email here 
                  </DialogContentText>

                  <TextField
                    required
                    id="email_textfield"
                    placeholder="Email"
                    fullWidth  
                    {...register("email")}                                          
                  />

                  <DialogContentText id="alert-dialog-address">
                    Insert your updated address here 
                  </DialogContentText>

                  <TextField
                    required
                    id="address_textfield"
                    placeholder="Address"
                    fullWidth
                    {...register("email")}                                           
                  />

                </DialogContent>
                
                <DialogActions>
                  <Button 
                      onClick={handleCloseEdit} 
                      autoFocus
                      aria-label='Cancel'
                  >
                    Cancel
                  </Button>

                  <Button 
                      type = 'submit' 
                      variant = "contained" 
                      onClick={handleCloseEdit} 
                      autoFocus
                      aria-label='Update Information'
                  >
                    Update
                  </Button>

                </DialogActions>
              </Dialog>
            </Box>

            <Typography 
                variant='h5' 
                sx = {{fontWeight: 'bold', paddingTop: 2, paddingBottom: 2}}
            >
              Payment methods
            </Typography>

            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea onClick={handleClickOpen}>
                <CardMedia
                  component="img"
                  height="140"
                  src="https://images.unsplash.com/photo-1613243555978-636c48dc653c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="Credit card image"
                />

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
                aria-label='Payment Method Information'
            >
              <DialogTitle id="alert-dialog-title">
                {"MasterCard xxxxxx098"}
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
                    aria-label='Close Payment Methods Dialog'
                >
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
