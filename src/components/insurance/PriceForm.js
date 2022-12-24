import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';


export default function PriceForm(props) {
  const price = 30;
  return (
    <>      
      <Grid container spacing={2}>
        <Grid item container direction="column" >
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Info Details
          </Typography>
          <Grid container>
              <>
                <Grid item xs={6}>
                  <Typography gutterBottom>FirstName</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{props.firstName}</Typography>
                </Grid>
              </>
              <>
                <Grid item xs={6}>
                  <Typography gutterBottom>LastName</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{props.lastName}</Typography>
                </Grid>
              </>
              <>
                <Grid item xs={6}>
                  <Typography gutterBottom>Age</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{props.age}</Typography>
                </Grid>
              </>
              <>
                <Grid item xs={6}>
                  <Typography gutterBottom>Gender</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{props.gender}</Typography>
                </Grid>
              </>
              <>
                <Grid item xs={6}>
                  <Typography gutterBottom>Vehicle type</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{props.vtype}</Typography>
                </Grid>
              </>
              <>
                <Grid item xs={6}>
                  <Typography gutterBottom>Liscense Plate Number</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{props.liscenceN}</Typography>
                </Grid>
              </>
              <>
                <Grid item xs={6}>
                  <Typography gutterBottom>Vehicle Price</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{props.vprice}</Typography>
                </Grid>
              </>
              <>
                <Grid item xs={6}>
                  <Typography gutterBottom>District</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{props.district}</Typography>
                </Grid>
              </>
          </Grid>
        </Grid>
        <Grid item container direction="column" >
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            PRICE FOR YOU : {props.price}
          </Typography>
        </Grid>
        
      </Grid>
      
    </>
  );
}