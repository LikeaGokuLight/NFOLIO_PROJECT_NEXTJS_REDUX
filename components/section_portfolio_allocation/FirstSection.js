import React from 'react';
import {Container, Grid, Paper} from "@mui/material";
import Allocation from "./Allocation";
import Portfolio from "./Portfolio";
import Theme from "../../helper/Theme";
import styled from "@emotion/styled";

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px
// sx={{ backgroundColor: Theme.palette.secondary.dark }}

const StyledWrapper = styled('div')({
  backgroundColor: Theme.palette.secondary.dark,
  padding: '3rem 0',
});

const FirstSection = () => {
  return (
    <StyledWrapper>
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={7} md={7} xs={12} pt={5}>
            <Paper
              sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: 300,
                borderRadius: '1rem',
                overflow: 'hidden',
                backgroundColor: Theme.palette.secondary.light
              }}
            >
              <Portfolio/>
            </Paper>
          </Grid>
          <Grid item lg={5} md={5} xs={12}>
            <Paper
              sx={{
                display: 'flex',
                flexDirection: 'column',
                maxHeight: 300,
                borderRadius: '1rem',
                overflow: 'hidden',
                backgroundColor: Theme.palette.secondary.light
              }}
            >
              <Allocation/>
            </Paper>
          </Grid>
        </Grid>
      </Container>

    </StyledWrapper>
  );
};

export default FirstSection;