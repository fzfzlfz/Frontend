import { Helmet } from 'react-helmet-async';
// @mui
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';
// ----------------------------------------------------------------------
import Checkout from '../components/insurance/Checkout'

export default function DashboardApp() {
  
  const theme = createTheme({
    typography: {
      // Tell MUI what the font-size on the html element is.
      htmlFontSize: 5,
      fontFamily: 'Raleway, Arial',
    },
  });

  return (
    <>
      <Helmet>
        <title> $BOOK | Main </title>
      </Helmet>

      <Container>
        <ThemeProvider theme={theme}>
          <Typography>
              Fill the Form to see the Insurance Price for U car!
          </Typography>
          <Checkout/>
        </ThemeProvider>
      </Container>
    </>
  );
}
