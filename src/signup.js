import React from 'react'
import  './signup.css';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/material/Icon';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';


// import { DateField } from '@mui/x-date-pickers/DateField';
const Signup = () => {
    const paperStyle = { padding: 20, width: 300, margin: "10 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 4 }
    const loginFormStyle={marginTop:'30px'}

    return (
        <Grid>
            <Paper  style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                
                    <TextField fullWidth label='Name' style={loginFormStyle} placeholder="Enter your name" />
                    <TextField fullWidth label='Email' style={loginFormStyle} placeholder="Enter your email" />
                    {/* <DateField label="Basic date field" /> */}
                    {/* <DatePicker label="Basic date picker" /> */}
                    <TextField select id="countrySelect" style={loginFormStyle} label ='City' size="" onchange="makeSubmenu(this.value)">
                    <option value="City" >City</option>
                        <option>Odisha</option>
                        <option>Maharashtra</option>
                        <option>Kerala</option>
                        |</TextField>
                        <TextField fullWidth label='Pincode' style={loginFormStyle} placeholder="Enter your Pincode" maxlength='5'/>
                        {/* < input name="pincode" type="text" class="pincode" inputmode="numeric" maxlength="6"/> */}
                    
                    <Button type='submit' style={loginFormStyle} variant='contained' color='primary'>Sign up</Button>
                
            </Paper>
        </Grid>
    )
}

export default Signup;