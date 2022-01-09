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
import TimePicker from '@mui/lab/TimePicker'
import Link from '@mui/material/Link'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import HomeIcon from '@mui/icons-material/Home'

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
      e.currentTarget.submit()
      alert('Your reservation has been added!')
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small"/>}
          sx = {{ color: theme.palette.primary.main ,ml: 3, mt: 1 }}>
          <Link underline="hover" href="/"> 
            {<HomeIcon role="img" sx={{ fontSize: '18px', verticalAlign: 'text-top'}}/>} 
            WorCo Home
          </Link>
          <Typography> Booking </Typography>
        </Breadcrumbs>

        <Box
          role="main"
          aria-label="main content area"
          id="main-content"
          sx={{ '& .MuiTextField-root': { mt: 2 }, flexGrow: 1 }}
          onSubmit={(e) => {onSubmit(e)}} >

          <Typography role="banner" variant='h1' aria-label="main content title"
            sx = {{pl: 5, pt: 2, my: 1, fontSize: '24pt', fontWeight: 'bold' }}>
            Book a space
          </Typography>

          <Typography variant='h2' sx={{ px: 5, mt: 2, fontWeight: 'bold', fontSize: '18pt', color: theme.palette.primary.main }}>
            Complete the following form to book a space
          </Typography>

          <Typography sx={{ px: 5, mt: 2, mb: 4, fontSize: '12pt' }}>
            After completing the form, press the button "BOOK", in order to submit your booking request and a successful message will appear.
          </Typography>

          <Grid role="form" component="form" aria-label="form for booking a space" container spacing={0}>
            <Grid item xs={12} sm={4} sx = {{ px: 5, mb: 5 }}>
              <Typography variant='h3' sx = {{fontSize: '12pt', fontWeight: 'bold'}}>
                Reservation name
              </Typography>
              <TextField 
                required
                id="name"
                inputProps={{ 'aria-label': 'required reservation name', 'aria-describedby': 'reservation name textfield', 'aria-required': 'true' }}
                placeholder="Insert a name for your reservation"
                helperText="Required*"
                FormHelperTextProps={{ style: { color: theme.palette.helpertxt.main }}}
                fullWidth
                {...register("reservationName", {required: true})} />
            </Grid>

            <Grid item xs={12} sm={4} sx = {{ px: 5, mb: 5 }}>
              <Typography variant='h3' sx = {{fontSize: '12pt', fontWeight: 'bold', mb: 1 }}>
                Select a space
              </Typography>
              <Box sx={{ display: 'flex' }}>
                <FormControl required sx={{ mt: '5px' }} variant="standard">
                  <RadioGroup required name="space" value={space} onChange={handleChangeSpace}
                    aria-describedby="radiogroup for selecting the space" aria-required="true">
                    <FormControlLabel value="big_blue" label="Big Blue Co-Working Space"
                      control={<Radio required={true}
                        inputProps={{ 'aria-label': 'big blue co-working space', 'aria-describedby': 'big blue space radio button' }} />} />
                    <FormControlLabel value="plants" label="Plants Co-Working Space"
                      control={<Radio required={true}
                        inputProps={{ 'aria-label': 'plants co-working space', 'aria-describedby': 'plants space radio button' }} />} />
                    <FormControlLabel value="small_space" label="Small Co-Working Space"
                      control={<Radio required={true}
                        inputProps={{ 'aria-label': 'small co-working space', 'aria-describedby': 'small space radio button' }} />} />
                    <FormControlLabel value="open" label="Open Co-Working Space" 
                      control={<Radio required={true}
                        inputProps={{ 'aria-label': 'open co-working space', 'aria-describedby': 'open space radio button' }} />} />
                    <FormControlLabel value="big_meeting" label="Big Meeting Room"
                      control={<Radio required={true}
                        inputProps={{ 'aria-label': 'big meeting room', 'aria-describedby': 'big meeting room radio button' }} />} />
                    <FormControlLabel value="small_meeting" label="Small Meeting Room"
                      control={<Radio required={true}
                        inputProps={{ 'aria-label': 'small meeting room', 'aria-describedby': 'small meeting room radio button' }} />} />
                  </RadioGroup>
                  <FormHelperText sx={{ color: theme.palette.helpertxt.main }}> Required* </FormHelperText>
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4} sx = {{ px: 5, mb: 5 }}>
              <Typography variant='h3' sx = {{fontSize: '12pt', fontWeight: 'bold'}}>
                Select the date
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{p:2}}
                  value={date}
                  onChange={(newValue) => {setDate(newValue)}}
                  inputProps={{ 'aria-label': 'required date', 'aria-describedby': 'date picker', 'aria-required': 'true' }}
                  renderInput={params => <TextField {...params} required 
                  helperText="Required*" FormHelperTextProps={{ style: { color: theme.palette.helpertxt.main }}}
                  {...register("date")} />}/>
              </LocalizationProvider>
            </Grid>

            <Grid item xs={12} sm={4} sx = {{ px: 5, mb: 5 }}>
              <Typography variant='h3' sx = {{fontSize: '12pt', fontWeight: 'bold'}}>
                Select the starting time
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs} >
                <TimePicker 
                  value={time}
                  onChange={(newValue) => {setTime(newValue)}}
                  inputProps={{ 'aria-label': 'required time', 'aria-describedby': 'time picker', 'aria-required': 'true' }}
                  renderInput={(params) => <TextField {...params} 
                    required fullWidth 
                    helperText="Required*" FormHelperTextProps={{ style: { color: theme.palette.helpertxt.main }}}
                    {...register("time")}/>} />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={12} sm={4} sx = {{ px: 5 }}>
              <Typography variant='h3' sx = {{fontSize: '12pt', fontWeight: 'bold', mb: 2 }}>
                Select the duration 
              </Typography>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <Select
                    required
                    id="duration-selector"
                    value={duration}
                    aria-describedby='required duration combobox'
                    displayEmpty
                    {...register("duration")}
                    onChange={handleChangeDuration}>
                    <MenuItem value='30 minutes'> half an hour </MenuItem>
                    <MenuItem value='1 hour'> one hour </MenuItem>
                    <MenuItem value='1 hour 30 minutes'> one hour and a half </MenuItem>
                    <MenuItem value='2 hours'> two hours </MenuItem>
                  </Select>
                  <FormHelperText sx = {{ color: theme.palette.helpertxt.main }}> Required* </FormHelperText>
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4} sx = {{ px: 5, pt: 5, mt: '3px', mb: 3 }}>
              <Button type = 'submit' variant="contained" aria-label='Book space' 
                sx = {{ fontSize: '12pt', mb: 5,
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