import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import ClaimForm from '../components/claim/ClaimForm'
// ----------------------------------------------------------------------

export default function AnalysisPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> $BOOK | Analysis </title>
      </Helmet>

      <ClaimForm/>
    </>
  );
}
