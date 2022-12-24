import * as React from 'react';
import { Select, Checkbox, FormControlLabel, Typography, Grid, TextField, FormControl, MenuItem, InputLabel } from '@mui/material'

export default function InfoForm(props) {
  
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Your Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={(e)=>{props.handleFirstName(e.target.value)}}
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            onChange={(e)=>{props.handleLastName(e.target.value)}}
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl sx={{ minWidth: 180 }} fullWidth>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Gender"
                onChange={(e)=>{props.handleGender(e.target.value)}}
            >
                <MenuItem value={'Female'}>Female</MenuItem>
                <MenuItem value={'Male'}>Male</MenuItem>
            </Select>
            </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            onChange={(e)=>{props.handleAge(e.target.value)}}
            id="age"
            name="age"
            label="Age"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl sx={{ minWidth: 180 }} fullWidth>
            <InputLabel id="demo-simple-select-label">Vehicle type</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Vehicle type"
                onChange={(e)=>{props.handleVtype(e.target.value)}}
            >
                <MenuItem value={'Bike'}>Bike</MenuItem>
                <MenuItem value={'Van'}>Van</MenuItem>
                <MenuItem value={'Sedan'}>Sedan</MenuItem>
                <MenuItem value={'E-Scooter'}>E-Scooter</MenuItem>
                <MenuItem value={'E-Bike'}>E-Bike</MenuItem>
                <MenuItem value={'Dump truck'}>Dump truck</MenuItem>
                <MenuItem value={'Bus'}>Bus</MenuItem>
                <MenuItem value={'Armored Truck'}>Armored Truck</MenuItem>
                <MenuItem value={'Box Truck'}>Box Truck</MenuItem>
                <MenuItem value={'Beverage Truck'}>Beverage Truck</MenuItem>

            </Select>
            </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            onChange={(e)=>{props.handleLiscenceN(e.target.value)}}
            id="Liscense Plate Number"
            name="liscenceN"
            label="Liscense Plate Number"
            fullWidth
            autoComplete="Liscense Plate Number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={(e)=>{props.handleVprice(e.target.value)}}
            required
            id="Vprice"
            name="vprice"
            label="Vehicle Price"
            fullWidth
            autoComplete="Vehicle Price"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl sx={{ minWidth: 180 }} fullWidth>
            <InputLabel id="demo-simple-select-label">District</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="District"
                onChange={(e)=>{props.handleDistrict(e.target.value)}}
            >
                <MenuItem value={'MANHATTAN'}>MANHATTAN</MenuItem>
                <MenuItem value={'BRONX'}>BRONX</MenuItem>
                <MenuItem value={'BROOKLYN'}>BROOKLYN</MenuItem>
                <MenuItem value={'QUEENS'}>QUEENS</MenuItem>
                <MenuItem value={'STAEN ISLAND'}>STAEN ISLAND</MenuItem>
            </Select>
            </FormControl>
        </Grid>
      
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox checked={props.collision} onChange={props.handleCollision} name="collision" />}
            label="Have any traffic collision before?"
          />
        </Grid>
        
      </Grid>
    </>
  );
}