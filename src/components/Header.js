import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import Link from '@mui/material/Link'
import { ThemeProvider } from '@mui/material/styles'
import theme from './Theme'

const pages = ['#/Spaces', '#/Booking', '#/Contact Us']
const settings = ['#/Profile', '#/My Reservations']

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <ThemeProvider theme={theme}>
      <Link href="#main-content" sx={{ left:'-999px', position:'absolute',
        '&:focus': { color: '#fff', backgroundColor:'#000', left: 'auto', top: 'auto',
          width: '20%', height: 'auto', overflow:'auto', my: '20px', mx: '40%', p:'5px', borderRadius: '5px',
          textAlign:'center'}}}> Skip to content </Link>
      <AppBar role="navigation" position="static" aria-label="menu bar and settings">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Displays LOGO in desktop version */}
            <Tooltip title="Home">
              <Link key="home" href="/">
                <Typography
                  variant="h6"
                  color="common.white"
                  noWrap
                  component="div"
                  sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, 
                    '&:hover': {textDecoration: 'underline', textUnderlineOffset: '0.2em' } }} >
                  WorCo
                </Typography>
              </Link>
            </Tooltip>

            {/* Displays MENU in desktop version */}
            <Box sx={{ flexGrow: 1, display: { xs:'none', md:'flex' }, ml:'10px'}}>
              {pages.map((page) => (
                <Button
                  key={page.slice(2)}
                  onClick={handleCloseNavMenu}
                  href={page.toLowerCase().replace(/\s/g, '-')}
                  sx={{ my: 2, color: 'white', mr:'10px', pt:'9px',  
                      '&:hover': {bgcolor: '#ffffff', color: theme.palette.primary.main }}} >
                  {page.slice(2)}
                </Button>
              ))}
            </Box>

            {/* Displays MENU in mobile version */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <Tooltip title="Open menu">
                <IconButton
                  size="large"
                  aria-label="menu"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit" >
                  <MenuIcon role="img"/>
                </IconButton>
              </Tooltip>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }} >
            
                {pages.map((page) => (
                  <Link key={page.slice(2)} href={page.toLowerCase().replace(/\s/g, '-')}>
                    <MenuItem onClick={handleCloseNavMenu}
                      sx = {{ '&:hover': { backgroundColor: theme.palette.btnhoverlight.main, color: theme.palette.btnhover.main } }} >
                      <Typography textAlign="center"> {page.slice(2)} </Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>

            {/* Displays LOGO in mobile version */}
            <Tooltip title="Home">
              <Link key="home-mobile" href="/" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
                <Typography variant="h6" color="common.white" noWrap component="div">
                  WorCo
                </Typography>
              </Link>
            </Tooltip>

            {/* Displays SETTINGS in desktop and mobile version */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton 
                  aria-label="settings"
                  aria-controls="settings-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenUserMenu}
                  sx={{ p: 1 }}>
                  <Avatar role="img" sx={{ backgroundColor: 'common.white', color: theme.palette.primary.main, fontWeight: 'bold',
                    '&:hover': { backgroundColor: theme.palette.btnhoverlight.main } }} />
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: '45px' }}
                id="settings-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu} >

                {settings.map((setting) => (
                  <Link key={setting} href={setting.toLowerCase().replace(/\s/g, '-')}>
                    <MenuItem onClick={handleCloseNavMenu} 
                      sx = {{ '&:hover': { backgroundColor: theme.palette.btnhoverlight.main, color: theme.palette.btnhover.main } }}>
                      <Typography textAlign="center"> {setting} </Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  )
}

export default ResponsiveAppBar;