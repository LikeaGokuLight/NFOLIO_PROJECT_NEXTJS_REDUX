import React from 'react';
import {styled, alpha} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import theme from "../../helper/Theme";
import {ThemeProvider} from "@emotion/react";
import {Chip, Grid} from "@mui/material";
import Image from "next/image";
import LOGO from "../../public/nfolio-header.png";

import LogoutIcon from '@mui/icons-material/Logout';

const Search = styled('div')(({theme}) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: 'auto',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.main
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
}));

const SecondaryNav = () => {

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleExit = () => {
    console.info('You clicked the delete icon.');
  };


  return (
    <ThemeProvider theme={theme}>
      <Box sx={{flexGrow: 1}}>
        <AppBar position="static" color={'secondary'}>
          <Grid container sx={{py: 1, fontWeight: 'bolder'}}>
            <Grid item xs={4} sx={{display: 'flex', justifyContent: 'center'}}>
              <Image src={LOGO} alt={'NFOLIO LOGO'} height={60} width={280} />
            </Grid>
            <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Opensea link for NFT Evaluation..."
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            </Grid>
            <Grid item xs={4} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', color:'white'}}>
              <Chip
                sx={{ color: 'white' }}
                color="primary"
                label="014ADE...85PX7WD"
                onClick={handleClick}
                onDelete={handleExit}
                deleteIcon={<LogoutIcon style={{ color: 'white' }} />}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default SecondaryNav;