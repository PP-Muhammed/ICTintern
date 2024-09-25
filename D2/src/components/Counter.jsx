import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [a, b] = useState(0)
    const add = () => {
        b(a+1)
    }
    const sub = () => {
        b(a-1)
    }
  return (
      <div>
          <h3>Counter</h3>
          <Typography variant='h5'>Count : {a}</Typography>
          <Button variant='contained' color="success" onClick={add}> + </Button> 
          <Button variant='contained' color="error" onClick={sub}> - </Button>
      </div>
  )
}

export default Counter