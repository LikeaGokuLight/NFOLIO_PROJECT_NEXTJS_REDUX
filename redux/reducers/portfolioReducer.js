const GET_PORTFOLIO_DATA = 'GET_PORTFOLIO_DATA';

const DETAIL_LOADING_PORTFOLIO = "DETAIL_LOADING";
const ERROR_MESSAGE = "ERROR_MESSAGE";

const INITIAL_STATE= {
  portfolio_data: null,
  total_floor_price: 0,
  is_loading: true,
  error_message: null,
};

export const portfolioReducer = (state = INITIAL_STATE, actions ) => {

  const { type, payload } = actions;

  switch (type) {
    case GET_PORTFOLIO_DATA:
      return {
        ...state,
        portfolio_data: payload.portfolio,
        total_floor_price: payload.floorTotal,
        is_loading: false,
        error_message: null
      };
    case DETAIL_LOADING_PORTFOLIO:
      return {
        ...state,
        is_loading: true,
        error_message: null
      };
    case ERROR_MESSAGE:
      return {
        ...state,
        is_loading: false,
        error_message: payload
      };
    default:
      return { ...state }
  }
};