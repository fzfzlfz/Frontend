import { Container, Typography, Link, Button, StepLabel, Step, Stepper, Paper, Box, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import InfoForm from './InfoForm';
import PriceForm from './PriceForm';
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

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [vtype, setVtype] = useState("");
  const [liscenceN, setLiscenceN] = useState("");
  const [vprice, setVprice] = useState(0);
  const [district, setDistrict] = useState("");
  const [collision, setCollision] = useState(false);
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [price, setPrice] = useState("");

  const handleFirstName = (val) => {
    setFirstName(val);
  }

  const handleLastName = (val) => {
    setLastName(val);
  } 

  const handleGender = (val) => {
    setGender(val);
  }

  const handleAge = (val) => {
    setAge(val);
  }

  const handleVtype = (val) => {
    setVtype(val);
  }

  const handleVprice = (val) => {
    setVprice(val);
  }

  const handleLiscenceN = (val) => {
    setLiscenceN(val);
  }

  const handleDistrict = (val) => {
    setDistrict(val);
  }

  const handleCollision = () => {
    setCollision(!collision)
  }
  const getCurrPrice = async() => {
    const data = {
      "firstName": firstName,
      "lastName": lastName,
      "gender": gender,
      "age": age,
      "vprice": vprice,
      "vtype": vtype,
      "liscenceN":liscenceN,
      "district":district,
      "collision":collision,
      "userid":1,
  };
  console.log('Added data', data);
  const obj = await AuthAPI.getPrice(data).catch(
      err => console.log(err.message)
  );
  setPrice(obj.data);
  }
  const submitInfo = async() => {
      console.log('submit info')
      const data = {
          "firstName": firstName,
          "lastName": lastName,
          "gender": gender,
          "age": age,
          "vprice": vprice,
          "vtype": vtype,
          "liscenceN":liscenceN,
          "district":district,
          "collision":collision,
          "userid":1,
      };
      console.log('Added data', data);
      await AuthAPI.buyInsurance(data).catch(
          err => console.log(err.message)
      );
  }
  const handleNext = () => {
    setActiveStep(activeStep + 1);
    if(activeStep === 1) {
      submitInfo();
    } else if (activeStep === 0) {
      getCurrPrice();
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const isValid = () => {
    const flag = firstName && lastName && gender && age && vprice && vtype && liscenceN && district;
    return flag;
  }

  const steps = ['Your Information', 'Review Your Information'];

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <InfoForm 
                handleCollision={handleCollision}
                handleFirstName={handleFirstName}
                handleLastName={handleLastName}
                handleGender={handleGender}
                handleAge={handleAge}
                handleLiscenceN={handleLiscenceN}
                handleDistrict={handleDistrict}
                handleVprice={handleVprice}
                handleVtype={handleVtype}
                collision={collision}
              />;
      case 1:
        return <PriceForm 
                firstName={firstName} 
                lastName={lastName}
                age={age}
                gender={gender}
                vtype={vtype}
                vprice={vprice}
                district={district}
                collision={collision}
                liscenceN={liscenceN}
                price={price}
              />;
      default:
        throw new Error('Unknown step');
    }
  }


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Insurance Price
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>

            </>
          ) : (
            <>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  disabled={!isValid()}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              </Box>
            </>
          )}
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}