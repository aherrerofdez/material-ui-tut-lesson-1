import { useEffect } from 'react'
import Header from '../components/Header'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../components/Theme'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import HomeIcon from '@mui/icons-material/Home'

const itemData = [
  {img: 'https://images.unsplash.com/photo-1600508774634-4e11d34730e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    title: 'Big Blue Co-Working Space',
    capacity: 'six',
    stay: 'full-day'},
  {img: 'https://images.unsplash.com/photo-1600765728673-7b4aa76cc3ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Plants Co-Working Space',
    capacity: 'ten',
    stay: 'half-day'},
  {img: 'https://images.unsplash.com/photo-1604328727766-a151d1045ab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Small Co-Working Space',
    capacity: 'two', 
    stay: 'full-day'},
  {img: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Open Co-working Space',
    capacity: 'five',
    stay: 'half-day'},
  {img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    title: 'Big Meeting Room',
    capacity: 'eight',
    stay: '2 hours'},
  {img: 'https://images.unsplash.com/photo-1532916123995-50bad0fc528e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Small Meeting Room',
    capacity: 'four',
    stay: '2 hours'}]

export default function Booking() {

  /* change webpage title */
  useEffect(() => {
    document.title = "WorCo: Available spaces"
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small"/>}
          sx = {{ color: theme.palette.primary.main, ml: 3, mt: 1 }}>
          <Link underline="hover" href="https://aherrerofdez.github.io/material-ui-website/#"> 
            {<HomeIcon role="img" sx={{ fontSize: '18px', verticalAlign: 'text-top'}}/>} 
            WorCo Home
          </Link>
          <Typography sx = {{ color: theme.palette.primary.main }}> Spaces </Typography>
        </Breadcrumbs>

        <Grid role="main" id="main-content" aria-label="main content area" container spacing={0}>
          <Grid item xs={12}>  
            <Typography role="banner" variant='h1' aria-label="main content title"
              sx = {{pl: 5, py: 2, my: 1, fontSize: '24pt', fontWeight: 'bold' }} >
              Our available spaces
            </Typography>
          </Grid>
            {itemData.map((item) => (
              <Grid item xs={12} sm={6} md={4} sx = {{ px: 3 }}>
                <Typography variant='h2' sx = {{ mb: 1, fontWeight: 'bold', fontSize: '14pt', textAlign: 'center' }}>
                  {item.title} 
                </Typography>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading= 'lazy'
                  aria-hidden= "true"
                  style={{ width: "100%", height: "50%" }} />
                <Typography sx = {{ fontSize: '11pt', textAlign: 'center', pt: 1 }}>
                  Maximum capacity: {item.capacity} people.
                </Typography>
                <Typography sx = {{ fontSize: '11pt', textAlign: 'center', pt: 1 }}>
                  Maximum stay: {item.stay}.
                </Typography>
                <Typography sx = {{ fontSize: '11pt', textAlign: 'center', pt: 1, mb: 5 }}>
                  <Link href="https://aherrerofdez.github.io/material-ui-website/#/booking"
                    sx = {{ fontWeight: 'bold', py: 2 }}> Book </Link> the {item.title.toLowerCase()} now.
                </Typography>
              </Grid>
            ))}
        </Grid>
      </ThemeProvider>
    </>
  )
}