import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    // var name='PPMHD'
    var [fname, setfname] = useState("PP")
    var[oldname,newname]=useState()
    const handleinput = (e) => {
        console.log(e.target.value)
        setfname(e.target.value)
        
    }
    const handle = () => {
        newname(fname)
    }
    return (
      <div>
      <Typography variant='h4'>Welcome {oldname}</Typography>
            <TextField variant='outlined' onChange={handleinput} />
            <Button variant='outlined' onClick={handle}>Click</Button>
        </div>
  )
}

export default StateBasics