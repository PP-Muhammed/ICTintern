import { AppBar, Button,Toolbar, Typography } from '@mui/material'
import React from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
          <AppBar>
              <Toolbar>
                  <Typography variant='h6'>Myapp  </Typography>  
                  <Link to='/login'>
                      <Button variant='container' >Login</Button>
                  </Link>
                  <Link to='/signup'>
                      <Button variant='container' >SignUp</Button>
                  </Link>
                  <Link to='/state'>
                      <Button variant='container' >StateBasics</Button>
                  </Link>
              </Toolbar>
          </AppBar><br /><br /><br /><br />
    </div>
  )
}

export default Navbar