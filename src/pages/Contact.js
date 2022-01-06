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
        <Box id="main-content"
            component="form"
            sx={{ '& .MuiTextField-root': { mt: 2 }, flexGrow: 1 }}
            onSubmit={onSubmit} >
          
          <Typography variant='h5' sx = {{ pl: 5, pt: 5, pb: 2, fontWeight: 'bold' }}>
              Contact us
          </Typography>
          <Typography variant='h6' sx = {{ pl: 5, pb: 2, fontWeight: 'bold' }}>
              Send us a message: 
          </Typography>

          <Grid container spacing={0}>
            <Grid item xs={12} sm={6} sx = {{ px: 5, pt: 2 }}>
              <Typography sx = {{ fontWeight: 'bold' }}> Full name </Typography>
              <TextField
                  required
                  id="name_textfield"
                  placeholder="Insert your full name"
                  helperText="Required*"
                  fullWidth
                  {...register("fullName", {required: true})} />
            </Grid>

            <Grid item xs={12} sm={6} sx = {{ px: 5, pt: 2 }}>
              <Typography sx = {{ fontWeight: 'bold' }}> Email address </Typography>
              <TextField
                  required
                  fullWidth
                  id="email_textfield"
                  placeholder="Insert your email address"
                  helperText="Required*"
                  {...register("email", {required: true})} />
            </Grid>

            <Grid item xs={12} sm={6} sx = {{ px: 5, pt: 2 }}>
              <Typography sx = {{ fontWeight: 'bold' }}> Your message </Typography>
              <TextField
                  required
                  fullWidth
                  id="message_textfield"
                  placeholder="Insert your message here"
                  helperText="Required*"
                  multiline
                  rows={4}
                  {...register("message", {required: true})} />
            </Grid>

            <Grid item xs={12} sx = {{ mx: 5, mt: 2 }}>
              <Button type = 'submit' variant="contained" endIcon={<SendIcon />} aria-label='Send Message'
                sx = {{ '&:hover': { backgroundColor: theme.palette.btnhover.main } }}>
                Send
              </Button>
            </Grid>

            <Grid item xs={12} sx = {{ mx: 5, mt: 2 }}>
              <Typography variant='h6' sx = {{ mb: 2, mt: 5, fontWeight: 'bold' }}>
                Find us on social media: 
              </Typography>
            </Grid>

            <Grid item xs={12} sx = {{ mx: 5, mb: 5 }}>
              <Button href="https://www.instagram.com/accounts/login/" aria-label='Instagram'
                sx = {{ '&:hover': { backgroundColor: theme.palette.btnhoverlight.main, color: theme.palette.btnhover.main } }}>
                <InstagramIcon fontSize="large"/>
              </Button>

              <Button href="https://m.facebook.com/home.php" aria-label='Facebook'
                sx = {{ '&:hover': { backgroundColor: theme.palette.btnhoverlight.main, color: theme.palette.btnhover.main } }}>
                <FacebookIcon fontSize="large" />
              </Button>

              <Button href="https://www.linkedin.com/" aria-label='LinkedIn'
                sx = {{ '&:hover': { backgroundColor: theme.palette.btnhoverlight.main, color: theme.palette.btnhover.main } }}>
                <LinkedInIcon fontSize="large" />
              </Button>

              <Button href="https://mobile.twitter.com/login" aria-label='Twitter'
                sx = {{ '&:hover': { backgroundColor: theme.palette.btnhoverlight.main, color: theme.palette.btnhover.main } }}>
                <TwitterIcon fontSize="large" />
              </Button>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  )
}
