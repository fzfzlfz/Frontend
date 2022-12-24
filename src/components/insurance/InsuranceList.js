// @mui
import { Grid, Card, Stack } from '@mui/material';

// ----------------------------------------------------------------------


export default function ProductList({ products, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={3}>
          <Card>
            <Stack spacing={2} sx={{ p: 3 }}>
              kk
            </Stack>
            </Card>
        </Grid>
      ))}
    </Grid>
  );
}
