import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
// @mui
import { Container, Typography, Grid, Card, Stack } from '@mui/material';
// components
import * as AuthAPI from '../utils/AuthAPI'

// ----------------------------------------------------------------------

export default function InsuranceList() {
  const [insurance, setInsurance] = useState([]);
  useEffect(()=>{
    AuthAPI.getInsurance().then(
      res => {
        setInsurance(res.data);
      }
    );
  },[])


  return (
    <>
      <Helmet>
        <title> Dashboard: Insurance | Minimal UI </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Your Insurance
        </Typography>

        <Grid container spacing={3}>
          {insurance.map((curr) => (
            <Grid item xs={12} sm={6} md={3}>
              <Card>
                <Stack spacing={2} sx={{ p: 3 }}>
                  {curr.id}
                </Stack>
                </Card>
            </Grid>
          ))}
        </Grid>

      </Container>
    </>
  );
}
