import { Container, Typography, Link, Button, Grid, TextField, Stepper, Paper, Box, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import * as AuthAPI from '../../utils/AuthAPI'


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const theme = createTheme();

export default function ClaimForm() {
  const [insuranceId, setInsuranceId] = useState("");
  const [date, setDate] = useState("");
  const [loc, setLoc] = useState("");
  const [amount, setAmount] = useState(0);

  const isValid = () => {
    const flag = insuranceId && date && loc && amount;
    return flag;
  }

  const submitInfo = async() => {
    console.log('submit info')
    const data = {
        "insuranceId": insuranceId,
        "Date": date,
        "Location": loc,
        "Amount": amount,
        "userid":1,
    };
    console.log('Added data', data);
    await AuthAPI.addClaim(data).catch(
        err => console.log(err.message)
    );
}

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Claim
          </Typography>
          <Stepper sx={{ pt: 3, pb: 5 }}>
          <>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(e)=>{setInsuranceId(e.target.value)}}
                  required
                  id="insuranceId"
                  name="insuranceId"
                  label="insuranceId"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(e)=>{setDate(e.target.value)}}
                  required
                  id="date"
                  name="date"
                  label="Date"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(e)=>{setLoc(e.target.value)}}
                  required
                  id="location"
                  name="location"
                  label="Location"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={(e)=>{setAmount(e.target.value)}}
                  required
                  id="amount"
                  name="amount"
                  label="Amount"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                />
              </Grid>
              
            </Grid>
          </>
          </Stepper>
          
            <>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  variant="contained"
                  onClick={submitInfo}
                  disabled={!isValid()}
                  sx={{ mt: 3, ml: 1 }}
                >
                  Submit
                </Button>
              </Box>
            </>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}