const SET_DATA_CARDS_PAGE = "SET_DATA_CARDS_PAGE";
const SET_TOTAL_PAGES = "SET_TOTAL_PAGES";
const SET_PAGE = "SET_PAGE";
const LOADING_DETAIL = "LOADING_DETAIL";
const ERROR_MESSAGE_CARDS = "ERROR_MESSAGE";
const SORT_CARDS_NAME_AZ = "SORT_CARDS_NAME_AZ";
const SORT_CARDS_NAME_ZA = "SORT_CARDS_NAME_ZA";
const SORT_CARDS_BOUGHT_HIGH = "SORT_CARDS_BOUGHT_HIGH";
const SORT_CARDS_BOUGHT_LOW = "SORT_CARDS_BOUGHT_LOW";
const SORT_CARDS_FLOOR_HIGH = "SORT_CARDS_FLOOR_HIGH";
const SORT_CARDS_FLOOR_LOW = "SORT_CARDS_FLOOR_LOW";

const INITIAL_STATE = {
  is_loading_cards: true,
  error_message: null,
  cards_data: null,
  total_pages: 1,
  page: 1
};

export const cardsReducer = (state = INITIAL_STATE, actions) => {

  const { type, payload } = actions;

  switch (type) {
    case SET_DATA_CARDS_PAGE:
      return {
        ...state,
        cards_data: payload,
        is_loading_cards: false,
        error_message: null,
      };
    case SET_TOTAL_PAGES:
      return {
        ...state,
        total_pages: payload
      };
    case SET_PAGE:
      return {
        ...state,
        page: payload
      }
    case LOADING_DETAIL:
      return {
        ...state,
        is_loading_cards: true,
        error_message: null
      };
    case ERROR_MESSAGE_CARDS:
      return {
        ...state,
        is_loading_cards: false,
        error_message: payload
      };
    case SORT_CARDS_NAME_AZ:
      return {
        ...state,
        cards_data: payload,
        is_loading_cards: false,
        error_message: null,
      };
    case SORT_CARDS_NAME_ZA:
      return {
        ...state,
        cards_data: payload,
        is_loading_cards: false,
        error_message: null,
      };
    case SORT_CARDS_BOUGHT_HIGH:
      return {
        ...state,
        cards_data: payload,
        is_loading_cards: false,
        error_message: null,
      };
    case SORT_CARDS_BOUGHT_LOW:
      return {
        ...state,
        cards_data: payload,
        is_loading_cards: false,
        error_message: null,
      };
    case SORT_CARDS_FLOOR_HIGH:
      return {
        ...state,
        cards_data: payload,
        is_loading_cards: false,
        error_message: null,
      };
    case SORT_CARDS_FLOOR_LOW:
      return {
        ...state,
        cards_data: payload,
        is_loading_cards: false,
        error_message: null,
      };
    default:
      return { ...state };
  }

};

