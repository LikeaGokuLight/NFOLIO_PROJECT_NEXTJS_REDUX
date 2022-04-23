import React, {useEffect} from 'react';
import {Container} from "@mui/material";
import {Divider, LinearProgress, Typography} from "@mui/material";
import AllInboxIcon from '@mui/icons-material/AllInbox';
import Box from "@mui/material/Box";
import {createTheme} from "@mui/material/styles";
import Theme from "../../helper/Theme";
import {ThemeProvider} from "@emotion/react";
import {useDispatch, useSelector} from "react-redux";
import {loadAllocationData} from "../../redux/actions/allocationAction";
import {LoadingCollection} from "../my_loading/MyLoading";

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
          )}%`}
        </Typography>
      </Box>
    </Box>
  );
}

const theme = createTheme(Theme);

theme.typography.p = {
  fontSize: '1rem',
  fontWeight: 'lighter',

  '@media (max-width:300px)': {
    fontSize: '.8rem',
    fontWeight: 'lighter',
    width: '50px !important',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  '@media (max-width:400px)': {
    fontSize: '1.1rem',
    fontWeight: 'lighter',
  },

  [theme.breakpoints.up('md')]: {
    fontSize: '1.1rem',
    fontWeight: 'lighter',
    width: '170px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
};

const Allocation = () => {

  const { data, is_loading_allocation } = useSelector((state) => state.allocation)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllocationData());
  }, []);


  const arraySorted = data?.sort((a, b) => (a.total < b.total ? 1 : -1)).slice(0,6);

  return (
    <ThemeProvider theme={theme}>
      <Container>

        <div style={{display: 'flex', margin: 0, paddingTop: '1rem', color: 'white'}}>
          <AllInboxIcon/>NFT Allocations
        </div>
        <Divider sx={{width: '100%', mx: 'auto', my: 1, backgroundColor: '#DFDFDE'}}/>
        <div>
          {
            is_loading_allocation
              ? (
                <>
                  <Box sx={{width: '100%', alignSelf:'center'}}>
                    <LoadingCollection />
                    <LoadingCollection />
                  </Box>

                  <Box sx={{width: '100%', alignSelf:'center'}}>
                    <LoadingCollection />
                    <LoadingCollection />
                  </Box>
                </>

              )
              : (
                arraySorted.map((data, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    margin: '.9rem 0 .5rem 0',
                  }}>

                    <Box sx={{width: '50%', alignSelf:'center'}}>
                      <Typography
                        variant="p"
                        gutterBottom
                        noWrap
                        component="span"
                        color={'white'}
                      >
                        <div style={{
                          width: '170px',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}>
                          {data.collection}
                        </div>

                      </Typography>
                    </Box>

                    <Box sx={{width: '50%', alignSelf:'center'}}>
                      <LinearProgressWithLabel value={data.total}/>
                    </Box>

                  </div>
                ))
              )


          }
        </div>

      </Container>
    </ThemeProvider>
  );
};

export default Allocation;