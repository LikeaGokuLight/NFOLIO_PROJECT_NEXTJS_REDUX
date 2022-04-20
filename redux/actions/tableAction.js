import {fetchSoldData} from "../../helper/fetch_data";


export const loadTableData = () => async (dispatch) => {

  dispatch({ type: "SET_LOADING_TABLE_TRUE" });


  const tableData = await fetchSoldData();

  // Generate Order Data
  function createData(id, collection, tokenID, boughtFor, soldFor, totGas, profit, roi, transaction, address) {
    return {id, collection, tokenID, boughtFor, soldFor, totGas, profit, roi, transaction, address};
  }

  const rows = [];

  const createTable = (data) => {
    return data?.map((d) => rows.push(createData(
        d.token_id ? d.token_id : 'none',
        d.collection_name ? d.collection_name : 'Collection name not found',
        d.token_id ? d.token_id : 'none',
        d.eth_value && d.eth_value.toString().slice(0, 6),
        d.sold_eth_value ? d.sold_eth_value.toString().slice(0, 5) : 0,
        d.gas_fee ? d.gas_fee + d.sold_gas_fee : '-',
        d.profit ? d.profit.toString().slice(0, 5) : 0,
        d.ROI !== 'inf' ? parseInt(d.ROI) * 100 : 0,
        d.transaction_hash ? d.transaction_hash : 0,
        d.token_address ? d.token_address : 0,
      ))
    );
  }

  createTable(tableData.items)

  dispatch({
    type: "GET_DATA_TABLE",
    payload: rows
  });

}

export const setLoadingFalse = () => (dispatch) => {
  dispatch({ type: "SET_LOADING_TABLE_FALSE" });
}












