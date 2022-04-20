import React from 'react';
import AppBar from '@mui/material/AppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TwitterIcon from '@mui/icons-material/Twitter';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Theme from "../../helper/Theme";
import { styled } from '@mui/system';

const myHeight = '2rem'

const StyledToolbar = styled(Toolbar)({
  margin:'-.3rem 0',
  height: myHeight
});

const theme = createTheme(Theme);

theme.typography.p = {
  fontSize: '1rem',
  fontWeight: 'bold',

  '@media (min-width:300px)': {
    fontSize: '.6rem',
    fontWeight: 'bold'
  },
  '@media (min-width:400px)': {
    fontSize: '.8rem',
    fontWeight: 'bold'
  },

  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
    fontWeight: 'bold'
  },
};

export default function FirstNav() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <AppBar position="static">
          <StyledToolbar variant="dense" sx={{ justifyContent: 'space-around', alignItems:'center' }}>
            <div>
              <TwitterIcon />
            </div>
            <Typography variant="p" component="div">
              NFOLIO ABOUT LUNCH.
            </Typography>
            <Typography variant="p" component="div">
              NFT FLOOR PRICE: 0.2
            </Typography>
          </StyledToolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}