import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
    return (
      <form>
            <div>
                <h1>Signup</h1>  <br />
                <TextField label="FullName" variant='standard' required/> <br /><br />
                <TextField label="email" variant='standard' type='email' required /> <br /><br />
                <TextField label="password" variant='standard' type='password'  required/> <br /><br />
                <Button variant='outlined'>SUBMIT</Button>

            </div>
        </form>
  )
}

export default Signup