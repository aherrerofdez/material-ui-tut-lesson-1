import React, { useEffect } from 'react'
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
import AdapterDayjs from '@mui/lab/AdapterDayjs'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'
import TimePicker from '@mui/lab/TimePicker';

export default function Booking() {

  /* change webpage title */
  useEffect(() => {
    document.title = "WorCo: Booking a space"
  }, [])

  /* spaces radiobuttons */
  const [space, setSpace] = React.useState('')

  const handleChangeSpace = (event) => {
    setSpace(event.target.value)
  }

  /* handling the date picker */
  const [date, setDate] = React.useState(new Date());

  /* handling the time picker */
  const [time, setTime] = React.useState(new Date());
  
  /* basic selection for duration */
  const [duration, setDuration] = React.useState('')

  const handleChangeDuration = (event) => {
    setDuration(event.target.value)
  }

  /*data registration and validation*/
  const { register } = useForm();

  const onSubmit = (e) => {
    e.preventDefault()
    var flagD = true
    var flagT = true
    if (date['$d'] == 'Invalid Date') {
      flagD = false
      alert("The date format is not correct. Please, follow MM/DD/YYYY")
      return false
    }
    if (time['$d'] == 'Invalid Date') {
      flagT = false
      alert("The time format is not correct. Please, follow HH:MM AM or HH:MM PM")
      return false
    }
    if (flagD && flagT) {
      alert('Your reservation has been added!')
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Box
          role="main"
          id="main-content"
          component="form" 
          sx={{ '& .MuiTextField-root': { mt: 2 }, flexGrow: 1 }}
          onSubmit={(e) => {onSubmit(e)}} >
          
          <Typography variant='h5' sx = {{ pl: 5, pt: 5, pb: 2, fontWeight: 'bold' }}>
              Book a space
          </Typography>

          <Grid role="form" container spacing={0}>
            <Grid item xs={12} sm={4} sx = {{ px: 5, pt: 2 }}>
              <Typography sx = {{fontWeight: 'bold'}}>
                Reservation name
              </Typography>
              <TextField 
                required id="name"
                placeholder="Insert a name for your reservation"
                helperText="Required*"
                FormHelperTextProps={{ style: { color: theme.palette.helpertxt.main }}}
                fullWidth
                {...register("fullName", {required: true})} />
            </Grid>

            <Grid item xs={12} sm={4} sx = {{ px: 5, pt: 2 }}>
              <Typography sx = {{ fontWeight: 'bold' }}>
                Select a space
              </Typography>
              <Box sx={{ display: 'flex' }}>
                <FormControl required component="fieldset" sx={{ mt: '5px', mb: 2 }} variant="standard">
                  <RadioGroup aria-label="space" name="space" value={space} 
                    onChange={handleChangeSpace} >
                    <FormControlLabel value="big_blue" control={<Radio required={true}/>} label="Big Blue Co-Working Space" />
                    <FormControlLabel value="plants" control={<Radio required={true}/>} label="Plants Co-Working Space" />
                    <FormControlLabel value="small_space" control={<Radio required={true}/>} label="Small Co-Working Space" />
                    <FormControlLabel value="open_space" control={<Radio required={true}/>} label="Open Co-Working Space" />
                    <FormControlLabel value="big_meeting" control={<Radio required={true}/>} label="Big Meeting Room" />
                    <FormControlLabel value="small_meeting" control={<Radio required={true}/>} label="Small Meeting Room" />
                  </RadioGroup>
                  <FormHelperText sx={{ color: theme.palette.helpertxt.main }}> Required* </FormHelperText>
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4} sx = {{ px: 5, pt: 2 }}>
              <Typography sx = {{fontWeight: 'bold'}}>
                Select the date
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={date}
                  onChange={(newValue) => {setDate(newValue)}}
                  inputProps={{ 'aria-label': 'required date', 'aria-describedby': 'date picker' }}
                  renderInput={params => <TextField {...params} required 
                  helperText="Required*" FormHelperTextProps={{ style: { color: theme.palette.helpertxt.main }}}
                  {...register("date")} />}/>
              </LocalizationProvider>
            </Grid>

            <Grid item xs={12} sm={4} sx = {{ px: 5, pt: 2 }}>
              <Typography sx = {{fontWeight: 'bold'}}>
                Select the starting time
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs} >
                <TimePicker 
                  value={time}
                  onChange={(newValue) => {setTime(newValue)}}
                  inputProps={{ 'aria-label': 'required time', 'aria-describedby': 'time picker' }}
                  renderInput={(params) => <TextField {...params} 
                    required fullWidth 
                    helperText="Required*" FormHelperTextProps={{ style: { color: theme.palette.helpertxt.main }}}
                    {...register("time")}/>} />
              </LocalizationProvider>
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
                    {...register("duration")}
                    onChange={handleChangeDuration}
                    inputProps={{ 'aria-label': 'required duration' }}>
                    <MenuItem value={'30 minutes'}> 30 minutes </MenuItem>
                    <MenuItem value={'1 hour'}> 1 hour </MenuItem>
                    <MenuItem value={'1 hour 30 minutes'}> 1 hour 30 minutes </MenuItem>
                    <MenuItem value={'2 hours'}> 2 hours </MenuItem>
                  </Select>
                  <FormHelperText sx = {{ color: theme.palette.helpertxt.main }}> Required* </FormHelperText>
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4} sx = {{ px: 5, py: 7 }}>
              <Button type = 'submit' variant="contained" aria-label='Book space' 
                sx = {{ height: 56, width: 100, fontSize: '12pt', mb: 5,
                  '&:hover': { backgroundColor: theme.palette.btnhover.main } }}>
                Book
              </Button>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  )
}