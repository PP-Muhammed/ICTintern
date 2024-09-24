import React from 'react'
import { Button, TextField } from '@mui/material'

const Login = () => {
  return (
<form>
          <div><h1>Login page</h1> <br /><br />
              <TextField label="email" variant='standard' type='email' required /> <br /><br />
              <TextField label="password" variant='standard' type='password' required /> <br /><br />
                  <Button variant='outlined'>SUBMIT</Button>   <Button variant='outlined'>SignUp</Button>
          </div>
      </form>   
  )
}

export default Login