import React from 'react'
import './Volunteers.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography,TextField,Button } from '@mui/material'
function createData(
  name: string,
  blood: string,
  contact: number,
  
) {
  return { name, blood, contact};
}

const rows = [
  createData('Naru Neeraja', 'B+',9346571625 ),
  createData('Jeelakarra Yasaswitha', 'B+', 9839748694),
  createData('Panga Tulsi Ram ', 'B+', 372483857),
  createData('Aakula Pavan Kalyan ','B+', 367395736),
  
];
const Voulunteers = () => {
  return (
    <>
    <div className='heading'>
      <h1 className='search'>Search for Volunteers</h1>
      <div className='blood-type'>
      <TextField id="outlined-basic" label="Blood Type" variant="outlined" className='TextField' />
      <TextField id="outlined-basic" label="Search Location" variant="outlined" className='TextField' />
      <Button variant="contained">
       Search
      </Button>
      </div>
    </div>
    <div className='result'>
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Blood Type</TableCell>
            <TableCell align="right">Contact</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.blood}</TableCell>
              <TableCell align="right">{row.contact}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
    </div>
    </>
    
  )
}

export default Voulunteers