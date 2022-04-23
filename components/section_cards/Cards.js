import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import {
  Button, ButtonGroup,
  CardMedia,
  Collapse,
  Container,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
  Divider
} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import {
  loadCardsData,
  loadSortCardsByBoughtHigh,
  loadSortCardsByBoughtLow,
  loadSortCardsByFloorHigh,
  loadSortCardsByFloorLow,
  loadSortCardsByNameAZ,
  loadSortCardsByNameZA
} from "../../redux/actions/cardsAction";
import {CardLoading} from "../my_loading/MyLoading";
import NoImageFound from "../../public/no-image.png";
import Stack from "@mui/material/Stack";
import MyPagination from "../pagination/Pagination";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {sortByNameAZ, sortByNameZA} from "../../helper/sort";
import Box from "@mui/material/Box";
import {ExpandLess, ExpandMore, StarBorder} from "@mui/icons-material";

const StyledContainer = styled('div')({
  minHeight: '80vh',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gridColumnGap: '.5rem',
  gridRowGap: '2rem',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  justifyContent: 'center',
  alignItems: ' center'
});

const StyledCard = styled(Card)({
  background: 'linear-gradient(180deg, rgba(34,35,40,1) 49%, rgba(49,52,56,1) 76%)',
  color: 'white',
  borderRadius: '1rem',
  overflow: 'hidden',
  maxHeight: '26rem'
});

const StyledTitle = styled('div')({
  display: 'flex', justifyContent: 'space-between', fontWeight: 'bold',

});

const StyledWrapper = styled('div')({
  backgroundColor: '#222328',
});

const StyledStack = styled(Stack)({
  backgroundColor: '#222328', display: 'flex', // alignItems:'center',
  padding: '.5rem 0', // margin: '1rem 0',
});

const PER_PAGE = 8;

const Cards = ({}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [open, setOpen] = useState(false);

  const {cards_data, is_loading_cards} = useSelector((state) => state.cards);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCardsData());
  }, [])

  const offset = currentPage * PER_PAGE;

  const pageCount = Math.ceil(cards_data?.length / PER_PAGE);

  const handleClick = (event, value) => {
    setCurrentPage(value - 1);
  }

  const handleFilterByNameAZ = () => {
    dispatch(loadSortCardsByNameAZ())
    setCurrentPage(0)
  }

  const handleFilterByNameZA = () => {
    dispatch(loadSortCardsByNameZA())
    setCurrentPage(0)
  }

  const handleFilterByBoughtHigh = () => {
    dispatch(loadSortCardsByBoughtHigh())
    setCurrentPage(0)
  }

  const handleFilterByBoughtLow = () => {
    dispatch(loadSortCardsByBoughtLow())
    setCurrentPage(0)
  }

  const handleFilterByFloorHigh = () => {
    dispatch(loadSortCardsByFloorHigh())
    setCurrentPage(0)
  }

  const handleFilterByFloorLow = () => {
    dispatch(loadSortCardsByFloorLow())
    setCurrentPage(0)
  }

  return (<>

    <Box
      sx={{
        display: 'flex',
        '& > *': {
          m: 1,
        },
        justifyContent:"space-evenly",
        alignItems: "center"
      }}
    >
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="text"
      >
        <Button onClick={handleFilterByNameAZ}>NAME AZ</Button>
        <Button onClick={handleFilterByNameZA}>NAME ZA</Button>
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="text"
      >
        <Button onClick={handleFilterByBoughtHigh}>BOUGHT HIGH</Button>
        <Button onClick={handleFilterByBoughtLow}>BOUGHT LOW</Button>
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="text"
      >
        <Button onClick={handleFilterByFloorHigh}>FLOOR HIGH</Button>
        <Button onClick={handleFilterByFloorLow}>FLOOR LOW</Button>
      </ButtonGroup>
    </Box>

    <StyledContainer>

      {is_loading_cards ? ([0, 1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (<CardLoading key={i + 1}/>))) : (<>
          {cards_data?.slice(offset, offset + PER_PAGE)
            .map((d) => (<StyledCard key={d?.id}>
              <CardMedia
                component="img"
                alt={d?.name}
                height="250"
                image={d?.img !== 'none' ? d.img : NoImageFound.src}
              />
              <CardContent>
                <StyledTitle>
                  <Typography gutterBottom variant="h5" component="div" sx={{
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    width: '120px',
                    height: '1.2em',
                    whiteSpace: 'nowrap'
                  }}>
                    {d?.name}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div" sx={{color: 'grey !important'}}>
                    #{d?.name?.split('#')[1]?.slice(0, 5)}
                  </Typography>
                </StyledTitle>

                <Grid container spacing={.5}>
                  <Grid item xs={6}>
                    <Typography gutterBottom variant="p" component="div" sx={{color: 'grey !important'}}>
                      BOUGHT FOR
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography gutterBottom variant="p" component="div" sx={{float: 'right'}}>
                      {/*{d?.bought} ETH*/}
                      {Math.round(d?.bought * 10000) / 10000} ETH
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography gutterBottom variant="p" component="div" sx={{color: 'grey !important'}}>
                      FLOOR PRICE
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography gutterBottom variant="p" component="div" sx={{float: 'right'}}>
                      {Math.round(d?.floor * 10000) / 10000} ETH
                    </Typography>
                  </Grid>

                  {d?.estimate ? (<>
                    <Grid item xs={6}>
                      <Typography gutterBottom variant="p" component="div" sx={{color: 'grey !important'}}>
                        ESTIMATE
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography gutterBottom variant="p" component="div" sx={{float: 'right'}}>
                        {d.estimate} ETH
                      </Typography>
                    </Grid>
                  </>) : (<Typography gutterBottom variant="p" component="div" sx={{color: 'grey !important'}}>
                    ESTIMATE NOT AVAILABLE
                  </Typography>)}

                </Grid>

              </CardContent>
            </StyledCard>))}
        </>


      )

      }

    </StyledContainer>

    {is_loading_cards ? null : (<MyPagination
      currentPage={currentPage ? currentPage : 1}
      handleClick={handleClick}
      pageCount={pageCount}
    />)}

  </>)
};

export default Cards;