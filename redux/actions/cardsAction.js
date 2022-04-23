import {fetchCardsDataPage} from "../../helper/fetch_data";
import {
  sortByFloorHighToLow, sortByFloorLowToHigh,
  sortByNameAZ,
  sortByNameZA,
  sortByPriceBoughtHighToLow,
  sortByPriceBoughtLowToHigh
} from "../../helper/sort";


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

export const loadSortCardsByNameAZ = () => async (dispatch) => {

  dispatch({ type: "LOADING_DETAIL" });

  const cardsPageData = await fetchCardsDataPage();

  const dataCardsSorted = sortByNameAZ(cardsPageData);

  dispatch({
    type: "SORT_CARDS_NAME_AZ",
    payload: dataCardsSorted
  });

};

export const loadSortCardsByNameZA = () => async (dispatch) => {

  dispatch({ type: "LOADING_DETAIL" });

  const cardsPageData = await fetchCardsDataPage();

  const dataCardsSorted = sortByNameZA(cardsPageData);

  dispatch({
    type: "SORT_CARDS_NAME_ZA",
    payload: dataCardsSorted
  });

};

export const loadSortCardsByBoughtHigh = () => async (dispatch) => {

  dispatch({ type: "LOADING_DETAIL" });

  const cardsPageData = await fetchCardsDataPage();

  const dataCardsSorted = sortByPriceBoughtHighToLow(cardsPageData);

  dispatch({
    type: "SORT_CARDS_BOUGHT_HIGH",
    payload: dataCardsSorted
  });

};

export const loadSortCardsByBoughtLow = () => async (dispatch) => {

  dispatch({ type: "LOADING_DETAIL" });

  const cardsPageData = await fetchCardsDataPage();

  const dataCardsSorted = sortByPriceBoughtLowToHigh(cardsPageData);

  dispatch({
    type: "SORT_CARDS_BOUGHT_LOW",
    payload: dataCardsSorted
  });

};

export const loadSortCardsByFloorHigh = () => async (dispatch) => {

  dispatch({ type: "LOADING_DETAIL" });

  const cardsPageData = await fetchCardsDataPage();

  const dataCardsSorted = sortByFloorHighToLow(cardsPageData);

  dispatch({
    type: "SORT_CARDS_FLOOR_HIGH",
    payload: dataCardsSorted
  });

}

export const loadSortCardsByFloorLow = () => async (dispatch) => {

  dispatch({ type: "LOADING_DETAIL" });

  const cardsPageData = await fetchCardsDataPage();

  const dataCardsSorted = sortByFloorLowToHigh(cardsPageData);

  dispatch({
    type: "SORT_CARDS_FLOOR_LOW",
    payload: dataCardsSorted
  });

}

