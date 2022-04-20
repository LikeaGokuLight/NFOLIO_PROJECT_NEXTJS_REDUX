import {fetchCardsDataPage, fetchOwnedData} from "../../helper/fetch_data";


export const loadCardsData = (page = 1) => async (dispatch) => {

  dispatch({ type: "LOADING_DETAIL" });

  const cardsPageData = await fetchCardsDataPage(page);

  console.log(cardsPageData.length, 'cardsPageData')
  console.log(typeof(cardsPageData), cardsPageData.name)

  dispatch({
    type: "SET_DATA_CARDS_PAGE",
    payload: cardsPageData
  });

};

export const loadTotalPages = () => async (dispatch) => {

  const res = await fetchOwnedData();

  const total_pages = Math.ceil(res.total / 8);

  dispatch({
    type: "SET_TOTAL_PAGES",
    payload: total_pages
  });

}

export const setPage = (page) => async (dispatch) => {
  dispatch({
    type: "SET_PAGE",
    payload: page
  });

}

