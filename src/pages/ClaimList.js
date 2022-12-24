import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
// @mui
import { Container, Typography, Grid, Card, Stack } from '@mui/material';
// components
import * as AuthAPI from '../utils/AuthAPI'

// ----------------------------------------------------------------------

export default function ClaimList() {
    const [claim, setClaim] = useState([]);
  
    useEffect(()=>{
      AuthAPI.getClaim().then(
        res => {
            setClaim(res.data);
        }
      );
    },[])
  
  
    return (
      <>
        <Helmet>
          <title> Dashboard: Claim | Minimal UI </title>
        </Helmet>
  
        <Container>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Your Claim
          </Typography>
  
          <Grid container spacing={3}>
            {claim.map((curr) => (
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
  