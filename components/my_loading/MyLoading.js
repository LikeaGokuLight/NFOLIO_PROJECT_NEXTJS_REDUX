import React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Box from "@mui/material/Box";
import {Skeleton} from "@mui/material";

export function CircularLoading() {
  return (
    <Stack direction="row">
      <CircularProgress color="secondary" />
    </Stack>
  );
}

export function CardLoading() {
  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Box sx={{pt: 0.5,}}>
          <Skeleton variant="rectangular" width={210} height={118}/>
          <Skeleton width="60%"/>
          <Skeleton width="60%"/>
        </Box>
      </div>
    </>
  );
}

export function LoadingCollection() {
  return (
    <Box sx={{width: 1}}>
      <Skeleton/>
      <Skeleton animation="wave"/>
      <Skeleton animation={false}/>
    </Box>
  );
}