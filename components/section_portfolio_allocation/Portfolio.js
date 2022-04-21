import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Grid} from "@mui/material";
import {styled} from '@mui/system';
import {useSwitch} from '@mui/base/SwitchUnstyled';
import clsx from 'clsx';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import Image from "next/image";
import {CircularLoading} from "../my_loading/MyLoading";
import PORTFOLIOVALUEIMAGE from "../../public/portfoliotfinal.png";
import REALIZEDPROFITSIMAGE from "../../public/profits.png";
import GASSPENTIMAGE from "../../public/gasspent2.png";
import TOTALSPENTMAGE from "../../public/totalspent.png";
import {loadPortfolioData} from "../../redux/actions/portfolioAction";



const mainColor = {
  500: '#ff2dbc',
};

const grey = {
  400: '#BFC7CF',
  500: '#AAB4BE',
  600: '#6F7E8C',
};

const BasicSwitchRoot = styled('span')(
  ({theme}) => `
  font-size: 0;
  float: right;
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin: 10px;
  background: ${theme.palette.mode === 'dark' ? grey[600] : grey[400]};
  border-radius: 10px;
  cursor: pointer;

  &.Switch-disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &.Switch-checked {
    background: ${mainColor[500]};
  }
  `,
);

const BasicSwitchInput = styled('input')`
  cursor: inherit;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
  margin: 0;
`;

const BasicSwitchThumb = styled('span')`
  display: block;
  width: 14px;
  height: 14px;
  top: 3px;
  left: 3px;
  border-radius: 16px;
  background-color: #fff;
  position: relative;
  transition: all 200ms ease;

  &.Switch-focusVisible {
    background-color: ${grey[500]};
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.Switch-checked {
    left: 22px;
    top: 3px;
    background-color: white;
  }
`;

const CustomAlignItems = styled('div')`
  display: flex;
  color: white;


  svg {
    color: white;
    font-size: 3.5rem;
    padding:0;
    margin: 0;
  }
`

const CustomAlignItemsBottom = styled('div')`
  display: flex;
  color: white;

  svg {
    color: white;
    font-size: 1.5rem;
    align-self: center;
  }
`

const PortfolioData = (props) => {
  const portfolio = useSelector( (state) => state.portfolio);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPortfolioData());
  }, []);

  const {getInputProps, checked, disabled, focusVisible} = useSwitch(props);

  const stateClasses = {
    'Switch-checked': checked,
    'Switch-disabled': disabled,
    'Switch-focusVisible': focusVisible,
  };

  return (
    <>
      <Card
        sx={{
          minWidth: 275,
          borderRadius: '1rem',
          background: `linear-gradient(142deg, rgba(17,127,203,1) 31%, rgba(154,223,183,1) 80%)`,
        }}>
        <CardContent>
          <Grid container>
            <Grid item xs={10}>
              <Grid container>
                <Grid item xs={2} sx={{display: 'flex', alignItems: 'center'}}>
                  <Image src={PORTFOLIOVALUEIMAGE} alt={'Portfolio Value Image'} width={80} height={80}/>
                </Grid>
                <Grid item xs={10}>
                  <Typography variant="h5" fontWeight={500} component="div" sx={{color: 'white'}}>
                    PORTFOLIO VALUE
                  </Typography>

                  <CustomAlignItems>
                    <ViewHeadlineIcon/>
                    {
                      portfolio.is_loading
                        ? (
                          <CircularLoading />
                        )
                        : (
                          <Typography variant="h3" component="div" fontWeight={500}>
                            { Math.round(portfolio?.total_floor_price * 10000) / 10000  }
                          </Typography>
                        )
                    }
                  </CustomAlignItems>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={2} sx={{display: 'flex', alignItems: 'center'}}>
                  <Image src={REALIZEDPROFITSIMAGE} alt={'REALIZED PROFITS IMAGE'} width={80} height={80}/>
                </Grid>
                <Grid item xs={10}>
                  <Typography variant="h5" component="div" fontWeight={500} sx={{color: 'white'}}>
                    REALIZED PROFITS
                  </Typography>

                  <CustomAlignItems>
                    <ViewHeadlineIcon/>
                    {
                      portfolio.is_loading
                        ? (
                          <CircularLoading />
                        )
                        : (
                          <Typography variant="h3" component="div" fontWeight={500}>
                            { Math.round(portfolio?.total_floor_price * 10000) / 10000  }
                          </Typography>
                        )
                    }
                  </CustomAlignItems>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <BasicSwitchRoot className={clsx(stateClasses)}>
                <BasicSwitchThumb className={clsx(stateClasses)}/>
                <BasicSwitchInput {...getInputProps()} aria-label="Demo switch"/>
              </BasicSwitchRoot>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Grid container spacing={1}>
        <Grid item xs={6} sx={{my: 1, pl:5}}>

          <Grid container>
            <Grid item xs={3} sx={{display: 'flex', alignItems: 'center', pl:2.5}}>
              <Image src={GASSPENTIMAGE} alt={'Gas Spent'} width={70} height={70}/>
            </Grid>
            <Grid item xs={9} >
              <Typography variant="h6" fontWeight={500} component="div" sx={{color: 'lightGrey'}}>
                GAS SPENT
              </Typography>

              <CustomAlignItemsBottom>
                <ViewHeadlineIcon/>
                {
                  portfolio.is_loading
                    ? (
                      <CircularLoading />
                    )
                    : (
                      <Typography variant="h5" component="div" fontWeight={500}>
                        {portfolio.portfolio_data.gas_spent !== null ? portfolio.portfolio_data.gas_spent : 0}
                      </Typography>
                    )
                }
              </CustomAlignItemsBottom>
            </Grid>
          </Grid>

        </Grid>
        <Grid item xs={6} sx={{my: 1}}>

          <Grid container>
            <Grid item xs={2} sx={{display: 'flex', alignItems: 'center'}}>
              <Image src={TOTALSPENTMAGE} alt={'Total Spent'}/>
            </Grid>
            <Grid item xs={10} sx={{ pl: 1 }}>
              <Typography variant="h6" fontWeight={500} component="div" sx={{color: 'lightGrey'}}>
                TOTAL SPENT
              </Typography>

              <CustomAlignItemsBottom>
                <ViewHeadlineIcon/>
                {
                  portfolio.is_loading
                    ? (
                      <CircularLoading />
                    )
                    : (
                      <Typography variant="h5" component="div" fontWeight={500}>
                        {/*{portfolio?.portfolio_data?.eth_spent ? portfolio.portfolio_data.eth_spent.toString().slice(0, 5) : 0}*/}
                        { Math.round(portfolio?.portfolio_data?.eth_spent * 10000) / 10000  }
                      </Typography>
                    )
                }
              </CustomAlignItemsBottom>
            </Grid>
          </Grid>

        </Grid>
      </Grid>


    </>
  );
}


export default PortfolioData;