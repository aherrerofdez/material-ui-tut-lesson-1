import * as React from 'react'
import Header from '../components/Header'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useForm } from "react-hook-form"
import FormControl from '@mui/material/FormControl'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Radio from '@mui/material/Radio'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../components/Theme'

export default function Booking() {

  /* spaces radiobuttons*/
  const [value, setValue] = React.useState('big_blue');

  const handleChangeSpace = (event) => {
    setValue(event.target.value)
  }

  /*basic selection for time and duration*/
  const [time, setTime] = React.useState('')

  const handleChangeTime = (event) => {
    setTime(event.target.value)
  };

  const [duration, setDuration] = React.useState('')

  const handleChangeDuration = (event) => {
    setDuration(event.target.value)
  };

  /*data registration and validation*/
  const { register } = useForm();

  const onSubmit = () => {
    alert('Your reservation has been added!')
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Box
          component="form" 
          sx={{ '& .MuiTextField-root': { mt: 2 }, flexGrow: 1 }}
          onSubmit={onSubmit} >
          
          <Typography variant='h5' sx = {{ pl: 5, pt: 5, pb: 2, fontWeight: 'bold' }}>
              Book a space
          </Typography>

          <Grid container spacing={0}>
            <Grid item xs={12} sm={4} sx = {{ px: 5, pt: 2 }}>
              <Typography sx = {{fontWeight: 'bold'}}>
                Reservation name
              </Typography>
              <TextField 
                required id="name"
                placeholder="Insert a name for your reservation"
                helperText="Required*"
                fullWidth
                {...register("fullName", {required: true})} />
            </Grid>

            <Grid item xs={12} sm={4} sx = {{ px: 5, pt: 2 }}>
              <Typography sx = {{ fontWeight: 'bold' }}>
                Select a space
              </Typography>
              <Box sx={{ display: 'flex' }}>
                <FormControl required component="fieldset" sx={{ m: 3, m: 0 }} variant="standard">
                  <RadioGroup aria-label="space" name="controlled-radio-buttons-group" value={value} 
                    onChange={handleChangeSpace}>
                    <FormControlLabel value="big_blue" control={<Radio />} label="Big Blue Co-Working Space" />
                    <FormControlLabel value="plants" control={<Radio />} label="Plants Co-Working Space" />
                    <FormControlLabel value="small_space" control={<Radio />} label="Small Co-Working Space" />
                    <FormControlLabel value="open_space" control={<Radio />} label="Open Co-Working Space" />
                    <FormControlLabel value="big_meeting" control={<Radio />} label="Big Meeting Room" />
                    <FormControlLabel value="small_meeting" control={<Radio />} label="Small Meeting Room" />
                  </RadioGroup>
                  <FormHelperText>Required*</FormHelperText>
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4} sx = {{ px: 5, pt: 2 }}>
              <Typography sx = {{fontWeight: 'bold'}}>
                Select the date
              </Typography>
              <TextField
                required
                fullWidth
                id="date"
                placeholder="Insert the date"
                helperText="Required*"
                {...register("message", {required: true})} />
            </Grid>

            <Grid item xs={12} sm={4} sx = {{ px: 5, pt: 2 }}>
              <Typography sx = {{fontWeight: 'bold', mb: 2}}>
                Select the starting time
              </Typography>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth required>
                  <Select
                    id="time"
                    value={time}
                    displayEmpty
                    onChange={handleChangeTime}
                    inputProps={{ 'aria-label': 'required time' }}>
                    <MenuItem value={10.00}> 10:00</MenuItem>
                    <MenuItem value={10.30}> 10:30</MenuItem>
                    <MenuItem value={11.00}> 11:00</MenuItem>
                    <MenuItem value={11.30}> 11:30 </MenuItem>
                    <MenuItem value={12.00}> 12:00 </MenuItem>
                    <MenuItem value={12.30}> 12:30 </MenuItem>
                    <MenuItem value={13.00}> 13:00 </MenuItem>
                    <MenuItem value={13.30}> 13:30 </MenuItem>
                    <MenuItem value={14.00}> 14:00 </MenuItem>
                    <MenuItem value={14.30}> 14:30 </MenuItem>
                    <MenuItem value={15.00}> 15:00 </MenuItem>
                    <MenuItem value={15.30}> 15:30 </MenuItem>
                    <MenuItem value={16.00}> 16:00 </MenuItem>
                    <MenuItem value={16.30}> 16:30 </MenuItem>
                    <MenuItem value={17.00}> 17:00 </MenuItem>
                    <MenuItem value={17.30}> 17:30 </MenuItem>
                    <MenuItem value={18.00}> 18:00 </MenuItem>
                    <MenuItem value={18.30}> 18:30 </MenuItem>
                    <MenuItem value={19.00}> 19:00 </MenuItem>
                    <MenuItem value={19.30}> 19:30 </MenuItem>
                  </Select>
                  <FormHelperText>Required*</FormHelperText>
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4} sx = {{ px: 5, pt: 2 }}>
              <Typography sx = {{ fontWeight: 'bold', mb: 2 }}>
                Select the duration 
              </Typography>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth required>
                  <Select
                    id="duration"
                    value={duration}
                    displayEmpty
                    onChange={handleChangeDuration}
                    inputProps={{ 'aria-label': 'required duration' }}>
                    <MenuItem value={'30 minutes'}> 30 minutes </MenuItem>
                    <MenuItem value={'1 hour'}> 1 hour </MenuItem>
                    <MenuItem value={'1 hour 30 minutes'}> 1 hour 30 minutes </MenuItem>
                    <MenuItem value={'2 hours'}> 2 hours </MenuItem>
                  </Select>
                  <FormHelperText>Required*</FormHelperText>
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4} sx = {{ px: 5, py: 7 }}>
              <Button type = 'submit' variant="contained" aria-label='Book space' 
                sx = {{ height: 56, width: 100, fontSize: '12pt', '&:hover': { backgroundColor: theme.palette.btnhover.main } }}>
                Book
              </Button>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  )
}