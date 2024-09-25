import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import axios from 'axios';

const Poke = () => {
    var [image, setinfo] = useState([])
    axios.get("https://dummyapi.online/api/pokemon")
        .then((resp) => {
            console.log(resp.data)
            setinfo(resp.data)
        })
    return (
        <div>
            <Grid container spacing={2}>
                {image.map((pok) => {
                    return (
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={pok.image_url}
                                />
                                <CardContent>
                                    <Typography>{pok.pokemon}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                    )
                })}
            </Grid>
        </div>
    )
}

export default Poke