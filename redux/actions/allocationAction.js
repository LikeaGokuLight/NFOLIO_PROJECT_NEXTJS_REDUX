import {fetchAllocationData} from "../../helper/fetch_data";


export const loadAllocationData = () => async (dispatch) => {

  const { total_floor_price, allocation_data } = await fetchAllocationData();

  const createTotalCollection = Object.values(allocation_data.reduce((r, e) => {
    let k = `${e.collection}|${e.floor}`;
    if(!r[k]) r[k] = {...e, count: 1}
    else r[k].count += 1;
    return r;
  }, {}));

  console.log(createTotalCollection)

  const calculateTotalCollection = createTotalCollection.map(d => {
    // ((floor * count) / portfolio_value ) * 100
    // const totalFloorRounded = Math.round((total_floor_price * 10000) / 10000);
    // console.log( ((d.floor * d.count) / totalFloorRounded) * 100 )
    // console.log( d.floor, d.count, totalFloorRounded, 100 )
    console.log(total_floor_price)
    return { collection: d.collection, total: ((d.floor * d.count) / total_floor_price) * 100}
  })

  console.log(calculateTotalCollection)

  dispatch({
    type: "SET_ALLOCATION_DATA",
    payload: calculateTotalCollection
  });

}