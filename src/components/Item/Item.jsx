import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Item = ({ item }) => {
  const { tipo, precio, imagen, descripcion} = item
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={imagen}
          alt="Imágen de referencia"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {tipo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {precio}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {descripcion}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Item