const GET_DATA_TABLE = 'GET_DATA_TABLE';

const SET_LOADING_TABLE_TRUE = "SET_LOADING_TABLE_TRUE";
const SET_LOADING_TABLE_FALSE = "SET_LOADING_TABLE_FALSE";
const ERROR_MESSAGE = "ERROR_MESSAGE";

const INITIAL_STATE= {
  table_data: [],
  is_loading: true,
  error_message: null,
};

export const tableReducer = (state = INITIAL_STATE, actions ) => {

  const { type, payload } = actions;

  switch (type) {
    case GET_DATA_TABLE:
      return {
        ...state,
        table_data: payload,
        is_loading: false,
        error_message: null
      };
    case SET_LOADING_TABLE_TRUE:
      return {
        ...state,
        is_loading: true,
        error_message: null
      };
    case SET_LOADING_TABLE_FALSE:
      return {
        ...state,
        is_loading: false,
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