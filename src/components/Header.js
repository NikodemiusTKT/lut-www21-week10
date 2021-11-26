import * as React from 'react';
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

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button component={RouterLink} to="/" variant="contained" disableElevation>
            home
          </Button>
          <Button component={RouterLink} to="/about" variant="contained" disableElevation>
            about
          </Button>
          <Grid container direction="row" justifyContent="flex-end">
            <Button component={RouterLink} to="/about" variant="contained" disableElevation>
              fi
            </Button>
            <Button component={RouterLink} to="/about" variant="contained" disableElevation>
              en
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
