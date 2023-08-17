import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material'
import { Checkbox } from '@mui/material';
 
import LockOutlinedIcon from '@mui/material/Icon';
import FormControlLabel from '@mui/material/Icon';
// import Checkbox from '@mui/material/core/Checkbox';
const Login=()=>{

    const paperStyle={padding :20,height:'73vh',width:300, margin:"0 auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const loginFormStyle={marginTop:'30px'}

        return(
            <Grid>
                <Paper  style={paperStyle}>
                    <Grid align='center'>
                         <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                        <h2>Sign In</h2>
                    </Grid>
                    <TextField label='Username' placeholder='Enter username' fullWidth required/>
                    <TextField label='Password' style={loginFormStyle} placeholder='Enter password' type='password' fullWidth required/>
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                        }
                        label="Remember me"
                     />
                    <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                    <Typography >
                         <Link href="#" >
                            Forgot password ?
                    </Link>
                    </Typography>
                    <Typography > Do you have an account ?
                         <Link href="#" >
                            Sign Up 
                    </Link>
                    </Typography>
                </Paper>
            </Grid>
        )
    }
    
    export default Login;