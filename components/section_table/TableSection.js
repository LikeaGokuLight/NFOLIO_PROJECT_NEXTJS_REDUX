import React from 'react';
import {Container, Paper} from "@mui/material";
import Theme from "../../helper/Theme";
import styled from "@emotion/styled";
import PaginationTable from "./Table";


const StyledWrapper = styled('div')({
  backgroundColor: Theme.palette.secondary.dark,
  padding: '2rem 0',
});

const SectionTable = () => {
  return (
    <StyledWrapper>
      <Container>
        <Paper
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: 'auto',
            borderRadius: '1rem',
            overflow: 'hidden',
            backgroundColor: Theme.palette.secondary.light
          }}
        >
          <PaginationTable />
        </Paper>
      </Container>

    </StyledWrapper>
  );
};

export default SectionTable;