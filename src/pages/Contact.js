import { useEffect } from 'react'
import Header from '../components/Header'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import { useForm } from "react-hook-form"
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../components/Theme'
import Tooltip from '@mui/material/Tooltip'
import Link from '@mui/material/Link'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import HomeIcon from '@mui/icons-material/Home'

export default function Contact() {

  /* change webpage title */
  useEffect(() => {
    document.title = "WorCo: Contact us"
  }, [])
  
  /*data registration and validation*/
  const { register } = useForm()

  const onSubmit = () => {
    alert('We received your message! We will get back to you soon!')
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
          <Typography sx = {{ color: theme.palette.primary.main }}> Contact us </Typography>
        </Breadcrumbs>

        <Box 
          role="main"
          aria-label="main content area"
          id="main-content"
          component="form"
          sx={{ '& .MuiTextField-root': { mt: 2 }, flexGrow: 1 }}
          onSubmit={onSubmit} >
          
          <Typography role="banner" aria-label="main content title" variant='h1' 
            sx = {{pl: 5, pt: 2, my: 1, fontSize: '24pt', fontWeight: 'bold' }} >
            Contact us
          </Typography>
          
          <Typography variant='h2' sx={{ px: 5, mt: 2, fontWeight: 'bold', fontSize: '18pt', color: theme.palette.primary.main }}>
              Send us a message by completing this form
          </Typography>

          <Typography sx={{ px: 5, mt: 2, mb: 4, fontSize: '12pt' }}>
            After completing the form, press the button "SEND", in order to submit your message and a confirmation notification will appear on your screen.
          </Typography>

          <Grid role="form" aria-label="form for contacting us" container spacing={0}>
            <Grid item xs={12} sm={6} sx = {{ px: 5, mb: 4 }}>
              <Typography variant='h3' sx = {{fontSize: '12pt', fontWeight: 'bold'}}> Full name </Typography>
              <TextField
                  required
                  inputProps={{ 'aria-label': 'required full name', 'aria-describedby': 'full name textfield', 'aria-required': 'true' }}
                  placeholder="Insert your full name"
                  helperText="Required*"
                  FormHelperTextProps={{ style: { color: theme.palette.helpertxt.main }}}
                  fullWidth
                  {...register("fullName", {required: true})} />
            </Grid>

            <Grid item xs={12} sm={6} sx = {{ px: 5, mb: 4 }}>
              <Typography variant='h3' sx = {{fontSize: '12pt', fontWeight: 'bold'}}> Email address </Typography>
              <TextField
                  required
                  inputProps={{ 'aria-label': 'required email address', 'aria-describedby': 'email address textfield', 'aria-required': 'true' }}
                  fullWidth
                  id="email"
                  placeholder="Insert your email address"
                  helperText="Required*"
                  FormHelperTextProps={{ style: { color: theme.palette.helpertxt.main }}}
                  {...register("email", {required: true})} />
            </Grid>

            <Grid item xs={12} sm={6} sx = {{ px: 5 }}>
              <Typography variant='h3' sx = {{fontSize: '12pt', fontWeight: 'bold'}}> Your message </Typography>
              <TextField
                  required
                  inputProps={{ 'aria-label': 'required message', 'aria-describedby': 'message textfield', 'aria-required': 'true' }}
                  fullWidth
                  id="message"
                  placeholder="Insert your message here"
                  helperText="Required*"
                  FormHelperTextProps={{ style: { color: theme.palette.helpertxt.main }}}
                  multiline
                  rows={4}
                  {...register("message", {required: true})} />
            </Grid>

            <Grid item xs={12} sx = {{ px: 5, pt: 4 }}>
              <Button type = 'submit' variant="contained" endIcon={<SendIcon role="img"/>} aria-label='Send Message'
                sx = {{ fontSize: '12pt', '&:hover': { backgroundColor: theme.palette.btnhover.main } }}>
                Send
              </Button>
            </Grid>
          </Grid>

          <Typography variant='h2' sx={{ pl: 5, mb: 3, mt: 8, fontWeight: 'bold', fontSize: '20pt', color: theme.palette.primary.main }}>
            Find us on social media: 
          </Typography>

          <Grid role="region" aria-label="links to social media" container spacing={0}>
            <Grid item xs={12} sx = {{ mx: 5, mb: 5, ml: 3}}>
              <Tooltip title="Instagram">
                <Button href="https://www.instagram.com/accounts/login/" aria-label='Instagram'
                  sx = {{ '&:hover': { backgroundColor: theme.palette.btnhoverlight.main, color: theme.palette.btnhover.main } }}>
                  <InstagramIcon role="img" fontSize="large" aria-hidden='false' />
                </Button>
              </Tooltip>

              <Tooltip title="Facebook">
                <Button href="https://m.facebook.com/home.php" aria-label='Facebook'
                  sx = {{ '&:hover': { backgroundColor: theme.palette.btnhoverlight.main, color: theme.palette.btnhover.main } }}>
                  <FacebookIcon role="img" fontSize="large" aria-hidden='false' />
                </Button>
              </Tooltip>

              <Tooltip title="Linkedin">
                <Button href="https://www.linkedin.com/" aria-label='LinkedIn'
                  sx = {{ '&:hover': { backgroundColor: theme.palette.btnhoverlight.main, color: theme.palette.btnhover.main } }}>
                  <LinkedInIcon role="img" fontSize="large" aria-hidden='false' />
                </Button>
              </Tooltip>

              <Tooltip title="Twitter">
                <Button href="https://mobile.twitter.com/login" aria-label='Twitter' 
                  sx = {{ '&:hover': { backgroundColor: theme.palette.btnhoverlight.main, color: theme.palette.btnhover.main } }}>
                  <TwitterIcon role="img" fontSize="large" aria-hidden='false' />
                </Button>
                </Tooltip>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  )
}
