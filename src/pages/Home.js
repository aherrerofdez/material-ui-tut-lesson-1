import Header from '../components/Header'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Link from '@mui/material/Link'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../components/Theme'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import HomeIcon from '@mui/icons-material/Home'

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Breadcrumbs aria-label="breadcrumb" 
          sx = {{ color: theme.palette.primary.main, ml: 3, mt: 1 }}>
          <Link underline="hover" href="/"> 
            {<HomeIcon sx={{ fontSize: '18px', verticalAlign: 'text-top'}}/>} 
            WorCo Home
          </Link>
        </Breadcrumbs>

        <Box role="main" id="main-content" sx={{ flexGrow: 1, mt: 5, mx: 5, mb: 2 }}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6}>
              <Typography role="banner" variant='h1' sx={{ fontWeight: 'bold', fontSize: '18pt' }}>
                Welcome to <br></br>
                <span style={{ color: theme.palette.primary.main, fontSize: '37pt' }}> WorCo </span>
              </Typography>

              <Typography sx = {{ pt: 5 }}>
                We offer amazing co-working spaces that will meet everyone's needs. 
                <br></br>
                <br></br>
                Come see with your own eyes the potential of co-working. You'll never feel lonely again!   
              </Typography>
            </Grid>
              
            <Grid item xs={12} sm={6}>
              <img
                    src='https://images.unsplash.com/photo-1600508774634-4e11d34730e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                    alt= 'Big Blue Co-Working Space'
                    loading="lazy"
                    width = {'100%'}
                    sx = {{ mt: 5 }}
                    aria-hidden = "true" />
            </Grid>

            <Grid item xs={12}>
              <Typography variant='h2' sx={{ fontWeight: 'bold', fontSize: '20pt', color: theme.palette.primary.main, mt: 4, textAlign: 'center' }}>
                Why WorCo ?
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography variant='h3' sx = {{ textAlign: 'center', color: theme.palette.primary.main, fontWeight: 'bold', fontSize: '16pt', mb: 1 }}>
                Flexible  
              </Typography>
              <Typography sx = {{ textAlign: 'center' }}>
                You can book a space in any of our locations. Then, you just need to show up!  
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4}>           
              <Typography variant='h3' sx = {{ textAlign: 'center', color: theme.palette.primary.main, fontWeight: 'bold', fontSize: '16pt', mb: 1 }}>
                Secure  
              </Typography>
              <Typography sx = {{ textAlign: 'center' }}>
                Our spaces are controlled and checked on. But don't worry, no privacy issues here!  
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Typography variant='h3' sx = {{ textAlign: 'center', color: theme.palette.primary.main, fontWeight: 'bold', fontSize: '16pt', mb: 1 }}>
                Well-equipped  
              </Typography>
              <Typography sx = {{ textAlign: 'center' }}>
                All of our spaces have top-speed wifi connection, screens and projectors and a coffee machine.   
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} sx={{ mt: 4 }}>
              <img 
                src='https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
                alt= 'Big Meeting Room'
                loading="lazy"
                width = {'100%'}
                sx = {{ mt: 5 }}
                aria-hidden = "true" />
            </Grid>

            <Grid item xs={12} sm={6} sx={{ mt: 4 }}>
              <Typography variant='h2' sx = {{ fontWeight: 'bold', fontSize: '20pt', color: theme.palette.primary.main, mb: 2 }}>
                What we offer 
              </Typography>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header">
                  <Typography variant='h3' sx = {{ color: theme.palette.primary.main, fontWeight: 500, fontSize: '12pt' }}>
                    Spaces for all needs
                  </Typography>
                </AccordionSummary>
                
                <AccordionDetails>
                  <Typography>
                    In WorCo, you can find large meeting rooms, small and intimate places 
                    to work alone, rooms for collaboration and much more.
                    <br></br><br></br>
                    Check out all of our <Link href="/spaces">spaces</Link>.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header">
                  <Typography variant='h3' sx = {{ color: theme.palette.primary.main, fontWeight: 500, fontSize: '12pt' }}>
                    Fast Internet connection
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography>
                    WorCo spaces provide fast Internet access, both through
                    wifi connection and Ethernet cables, which are provided in all of the rooms. 
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header">
                  <Typography variant='h3' sx = {{ color: theme.palette.primary.main, fontWeight: 500, fontSize: '12pt' }}>
                    Easy reservation process
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography>
                    To book a space, you will only need a couple of clicks on this website. You
                    choose the date and the time you need the space, insert your details and 
                    then just show up and be sure you will find the space waiting for you!
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4a-content"
                  id="panel4a-header">
                  <Typography variant='h3' sx = {{ color: theme.palette.primary.main, fontWeight: 500, fontSize: '12pt' }}>
                    Conferencing equipment
                  </Typography>
                </AccordionSummary>
                
                <AccordionDetails>
                  <Typography>
                    Whether you need to project slides, connect your computer to a screen,
                    record a presentation or simply listen to something, we got you covered. 
                    We are ready to provide top-quality equipment for your needs. 
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>    
    </>
  )
}