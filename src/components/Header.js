import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Grid';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import About from './About';
import { useTranslation, withTranslation, Trans } from 'react-i18next';

export default function Header() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Button component={RouterLink} to="/" variant="contained" disableElevation>
          {t('home')}
        </Button>
        <Button component={RouterLink} to="/about" variant="contained" disableElevation>
          {t('about')}
        </Button>
        <Grid container direction="row" justifyContent="flex-end">
          <Button id="fi" variant="contained" disableElevation onClick={() => changeLanguage('fi')}>
            fi
          </Button>
          <Button id="en" variant="contained" disableElevation onClick={() => changeLanguage('en')}>
            en
          </Button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
