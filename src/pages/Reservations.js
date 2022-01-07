import React, { useEffect } from 'react'
import Header from '../components/Header'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../components/Theme'
import Tooltip from '@mui/material/Tooltip'

function Row(props) {
  const { row } = props
  const [open, setOpen] = React.useState(false)

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <Tooltip title="Details">
            <IconButton aria-label="open reservation details" size="large" 
              sx = {{ color: theme.palette.primary.main, '&:hover': { backgroundColor: theme.palette.btnhoverlight.main } }}
              onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </Tooltip>
        </TableCell>
        <TableCell component="th" scope="row"> {row.name} </TableCell>
        <TableCell> {row.space} </TableCell>
        <TableCell> {row.date} </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ m: 1 }}>
              <Typography variant='h3' gutterBottom 
                sx={{ fontSize: '14pt', fontWeight: 500, color: theme.palette.primary.main }} >
                Reservation Details
              </Typography>

              <Table size="small" aria-label="reservation details">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography variant='h4' sx={{ fontSize: '11pt', fontWeight: 500, color: theme.palette.primary.main }} >
                        Customer
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h4' sx={{ fontSize: '11pt', fontWeight: 500, color: theme.palette.primary.main }} >
                        Time
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant='h4' sx={{ fontSize: '11pt', fontWeight: 500, color: theme.palette.primary.main }} >
                        Duration
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {row.details.map((detailsRow) => (
                    <TableRow key={detailsRow.customerId}>
                      <TableCell component="th" scope="row"> {detailsRow.customerId} </TableCell>
                      <TableCell> {detailsRow.time} </TableCell>
                      <TableCell> {detailsRow.duration} </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    space: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    details: PropTypes.arrayOf(
      PropTypes.shape({
        customerId: PropTypes.number.isRequired,
        time: PropTypes.string.isRequired,
        duration: PropTypes.string.isRequired
      })).isRequired})
  .isRequired}

const rows = [
  {name: 'Team Meeting', space: 'Big Blue', date: '01-12-2022', details:
    [{customerId: 11091700, time: '10:30', duration: '1 hour'}]},
  {name: 'Meeting with VC', space: 'Big Meeting Room', date: '01-14-2022', details:
  [{customerId: 11091700, time: '12:00', duration: '30 min'}]},
  {name: 'Call with Developer', space: 'Small Meeting Room', date: '01-17-2022', details:
    [{customerId: 11091700, time: '11:45', duration: '1 hour'}]}]

export default function Reservations() {

  /* change webpage title */
  useEffect(() => {
    document.title = "WorCo: Your reservations"
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Typography variant='h1' sx = {{pl: 5, py: 2, my: 1, fontSize: '24pt', fontWeight: 'bold' }} >
          Your reservations
        </Typography>
        <TableContainer role="main" id="main-content" component={Paper} sx={{ }}>
          <Table aria-label="collapsible table with your reservations">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>
                  <Typography variant='h2' sx={{ fontWeight: 'bold', fontSize: '15pt', color: theme.palette.primary.main }}>
                    Reservation ID
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h2' sx={{ fontWeight: 'bold', fontSize: '15pt', color: theme.palette.primary.main }}> Space </Typography>
                </TableCell>
                <TableCell> 
                  <Typography variant='h2' sx={{ fontWeight: 'bold', fontSize: '15pt', color: theme.palette.primary.main }}> Date </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.name} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </ThemeProvider>
    </>
  )
}