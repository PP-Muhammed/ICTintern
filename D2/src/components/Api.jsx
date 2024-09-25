import { TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Api = () => {
    var [user, setuser] = useState([])
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            console.log(response.data)
            setuser(response.data)
    })
  return (
      <div>
          <TableContainer>
              <TableHead>
                  <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Username</TableCell>
                      <TableCell>City</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  {user.map((val) => {
                      return(
                          <TableRow>
                              <TableCell>{val.name}</TableCell>
                              <TableCell>{val.username}</TableCell>
                              <TableCell>{val.address.city}</TableCell>
                          </TableRow>
                      )
                  })}
                  
              </TableBody>
         </TableContainer>
    </div>
  )
}

export default Api