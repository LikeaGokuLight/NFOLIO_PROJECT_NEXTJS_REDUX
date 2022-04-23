const SET_ALLOCATION_DATA = "SET_ALLOCATION_DATA";

const INITIAL_STATE = {
  is_loading_allocation: true,
  data: []
};

export const allocationReducer = (state = INITIAL_STATE, actions) => {

  const { type, payload } = actions;

  switch (type) {
    case SET_ALLOCATION_DATA:
      return {
        ...state,
        is_loading_allocation: false,
        data: payload
      }
    default:
      return state;
  }

};