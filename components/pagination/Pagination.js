import React from 'react';
import styled from "@emotion/styled";
import Stack from "@mui/material/Stack";
import {Container, Pagination} from "@mui/material";
import {ThemeProvider} from "@emotion/react";
import Theme from "../../helper/Theme";

const StyledWrapper = styled('div')({
  backgroundColor: '#222328',
});

const StyledStack = styled(Stack)({
  backgroundColor: '#222328',
  display: 'flex',
  // alignItems:'center',
  padding: '.5rem 0',
  // margin: '1rem 0',
});

const MyPagination = ({ handleClick, pageCount }) => {

  return (
    <ThemeProvider theme={Theme}>
      <StyledWrapper>
        {/*<Container>*/}
          {/* Pagination */}
          <StyledStack spacing={2}>
            <Pagination
              count={pageCount}
              variant="outlined"
              shape="rounded"
              color={'primary'}
              onChange={handleClick}
            />
          </StyledStack>
        {/*</Container>*/}

      </StyledWrapper>
    </ThemeProvider>
  );
};

export default MyPagination;