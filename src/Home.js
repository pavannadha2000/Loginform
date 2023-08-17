import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Signup from './signup';
import Login from './login';

const SignInOut=()=> {
    const [value,setValue]=React.useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    
      const paperStyle={width:340,margin:"20px auto"}
      function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
      

  return (
    <Paper  style={paperStyle}>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example">
        <Tab label="Sign In" />
     
        <Tab label="Sign Up" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Login/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Signup/>
      </TabPanel>
    </Paper>
  );
}


export default SignInOut;
