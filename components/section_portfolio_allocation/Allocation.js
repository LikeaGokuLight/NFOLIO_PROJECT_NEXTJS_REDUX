import React from 'react';
import {Container} from "@mui/material";
import {Divider, LinearProgress, Typography} from "@mui/material";
import AllInboxIcon from '@mui/icons-material/AllInbox';
import Box from "@mui/material/Box";
import {createTheme} from "@mui/material/styles";
import Theme from "../../helper/Theme";
import {ThemeProvider} from "@emotion/react";

const myTestArray = [
  {title: 'The Dodge Pound', percentage: 8},
  {title: 'Ruggenesis Nft', percentage: 16},
  {title: 'Habbo Avatars', percentage: 13},
  {title: 'Nifty Portal', percentage: 32},
  {title: 'CAmeo PAss', percentage: 7},
  {title: 'Nifty Portal', percentage: 28},
];

const LinearProgressWithLabel = (props) => {
  return (
    <Box sx={{display: 'flex', alignItems: 'center'}}>
      <Box sx={{width: '100%', mr: 1}}>
        <LinearProgress color={'info'} variant="determinate" {...props} />
      </Box>
      <Box sx={{minWidth: 35}}>
        <Typography variant="body2" color="white">
          {`${Math.round(
            props.value,
          )}%`}</Typography>
      </Box>
    </Box>
  );
}

const theme = createTheme(Theme);

theme.typography.p = {
  fontSize: '1rem',
  fontWeight: 'lighter',

  '@media (min-width:300px)': {
    fontSize: '.6rem',
    fontWeight: 'lighter'
  },
  '@media (min-width:400px)': {
    fontSize: '.8rem',
    fontWeight: 'lighter'
  },

  [theme.breakpoints.up('md')]: {
    fontSize: '1.1rem',
    fontWeight: 'lighter',
  },
};

const Allocation = () => {

  const arraySorted = myTestArray.sort((a, b) => (a.percentage < b.percentage ? 1 : -1));

  return (
    <ThemeProvider theme={theme}>
      <Container>

        <div style={{display: 'flex', margin: 0, paddingTop: '1rem', color: 'white'}}>
          <AllInboxIcon/>NFT Allocations
        </div>
        <Divider sx={{width: '100%', mx: 'auto', my: 1, backgroundColor: '#DFDFDE'}}/>
        <div>
          {
            arraySorted.map((data, i) => (
              <div key={i} style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '.9rem 0 .5rem 0',
              }}>

                <Box sx={{width: '50%', alignSelf:'center'}}>
                  <Typography variant="p" gutterBottom component="span" color={'white'}>
                    {data.title}
                  </Typography>
                </Box>

                <Box sx={{width: '50%', alignSelf:'center'}}>
                  <LinearProgressWithLabel value={data.percentage}/>
                </Box>

              </div>
            ))
          }
        </div>

      </Container>
    </ThemeProvider>
  );
};

export default Allocation;