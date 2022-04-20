import React from 'react';
import { styled } from '@mui/system';
import {Container} from "@mui/material";
import Theme from "../../helper/Theme";
import Cards from "./Cards";

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px
// sx={{ backgroundColor: Theme.palette.secondary.dark }}

const StyledWrapper = styled('div')({
  backgroundColor: Theme.palette.secondary.dark,
  padding: '2rem 0',
});


const SectionCards = () => {
  return (
    <StyledWrapper>
      <Container>
        <Cards />
      </Container>
    </StyledWrapper>
  );
};

export default SectionCards;