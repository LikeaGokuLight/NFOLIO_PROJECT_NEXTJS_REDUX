
import {fetchFloorPrice, fetchPortfolioData} from "../../helper/fetch_data";

export const loadPortfolioData = () => async (dispatch) => {

  const portfolioData = await fetchPortfolioData();
  const floorTotalPrice = await fetchFloorPrice();

  dispatch({
    type: "GET_PORTFOLIO_DATA",
    payload: {
      portfolio: portfolioData,
      floorTotal: floorTotalPrice
    }
  });

};
