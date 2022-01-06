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
            <IconButton aria-label="open reservation details" size="small" onClick={() => setOpen(!open)}>
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
              <Typography variant="h6" gutterBottom component="div">
                Reservation Details
              </Typography>

              <Table size="small" aria-label="reservation details">
                <TableHead>
                  <TableRow>
                    <TableCell> Customer </TableCell>
                    <TableCell> Time </TableCell>
                    <TableCell> Duration </TableCell>
                    <TableCell align="right"> Total price (€) </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {row.details.map((detailsRow) => (
                    <TableRow key={detailsRow.customerId}>
                      <TableCell component="th" scope="row"> {detailsRow.customerId} </TableCell>
                      <TableCell> {detailsRow.time} </TableCell>
                      <TableCell> {detailsRow.duration} </TableCell>
                      <TableCell align="right"> {detailsRow.price} </TableCell>
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
        duration: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired
      })).isRequired})
  .isRequired}

const rows = [
  {name: 'Team Meeting', space: 'Big Blue', date: '12-01-2022', details:
    [{customerId: 11091700, time: '10:30', duration: '1 hour', price: '25€'}]},
  {name: 'Meeting with VC', space: 'Big Meeting Room', date: '14-01-2022', details:
  [{customerId: 11091700, time: '12:00', duration: '30 min', price: '45€'}]},
  {name: 'Call with Developer', space: 'Small Meeting Room', date: '17-01-2022', details:
    [{customerId: 11091700, time: '11:30', duration: '1 hour', price: '65€'}]}]

export default function Reservations() {

  /* change webpage title */
  useEffect(() => {
    document.title = "WorCo: Your reservations"
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <TableContainer id="main-content" component={Paper}>
          <Table aria-label="collapsible table with your reservations">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>
                  <Typography variant='h6'> Reservation ID </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6'> Space </Typography>
                </TableCell>
                <TableCell> 
                  <Typography variant='h6'> Date </Typography>
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