import axios from "axios";

////////////////////////////////////////////////// FETCH PORTFOLIO DATA -- done
export const fetchPortfolioData = async () => {
  try {
    // IF WE HAVE DATA IN LOCAL STORAGE, DO IF STATEMENT
    const checkDataStorage = Boolean(window.localStorage.getItem('portfolio_data'));
    if ( checkDataStorage ) {
      return JSON.parse(localStorage.getItem("portfolio_data"));
    }

    const res = await axios.get(`https://api.nfolio.io/account/general/0x17f8dc174935fd109fa45e00843e106b4c3f8385`, {
      headers: {
        "api-key": process.env.NEXT_PUBLIC_API_KEY
      }
    });
    const {data} = await res;

    localStorage.setItem("portfolio_data", JSON.stringify(data));

    return data;
  } catch (err) {
    console.log('ERROR: ', err);
  }
};

// FETCH OPEN SEA DATA -- done
const fetchAdditionalData = async (token_address, token_id) => {
  try {
    const res = await axios.get(`https://api.opensea.io/api/v1/asset/${token_address}/${token_id}/?include_orders=false`);
    const {data} = await res;
    return data;
  } catch (err) {
    console.log('ERROR: ', err);
  }
};

////////////////////////////////////////////////// FETCH OWNED DATA -- done
export const fetchOwnedData = async () => {

  try {
    const res = await axios.get(`https://api.nfolio.io/account/owned_nfts/0x17f8dc174935fd109fa45e00843e106b4c3f8385/?page=1&size=100`, {
      headers: {
        "api-key": process.env.NEXT_PUBLIC_API_KEY
      }
    });
    const {data} = await res;

    if ( data.total > data.size ) {
      console.log('FETCH THE REST OF DATA OWNED');
    }

    return data;
  } catch (err) {
    console.log('ERROR: ', err);
  }
};

function createTokenIdAddress(tokenAddress, tokenID) {
  return {tokenAddress, tokenID}
}

////////////////////////////////////////////////// FETCH TOTAL FLOOR PRICE -- done
export const fetchFloorPrice = async () => {
  // IF WE HAVE DATA IN LOCAL STORAGE, DO IF STATEMENT
  const checkDataStorage = Boolean(window.localStorage.getItem('total_floor_price'));
  if ( checkDataStorage ) {
    return JSON.parse(localStorage.getItem("total_floor_price"));
  }

  const tokenIdAddress = [];
  const totalFloorPriceArray = [];
  // FETCHING DATA ITEMS
  const { items } = await fetchOwnedData();

  // CREATE AN ARRAY OF OBJECTS token_address and token_id
  items.map(d => {
    tokenIdAddress.push(createTokenIdAddress(d.token_address, d.token_id))
  })

  // FETCH DATA FROM OPEN SEA WITH MY ARRAY OF OBJECTS token_address and token_id ALL DATA PUSH IN totalFloorPriceArray
  await Promise.all(tokenIdAddress.map(async (d) => {
    const floor = await fetchAdditionalData(d.tokenAddress, d.tokenID);

    // floor.collection.stats.floor_price
    // floor.collection.stats.num_reports
    // floor.collection.stats.one_day_average_price
    totalFloorPriceArray.push(floor.collection.stats.one_day_average_price);
  }))

  const allTotalFloorPriceData = totalFloorPriceArray.reduce((pv, cv) => pv + cv, 0);

  localStorage.setItem("total_floor_price", JSON.stringify(allTotalFloorPriceData));
  return allTotalFloorPriceData;
};

////////////////////////////////////////////////// FETCH SOLD DATA -- done
export const fetchSoldData = async () => {

  // IF WE HAVE DATA IN LOCAL STORAGE, DO IF STATEMENT
  const checkDataStorage = Boolean(window.localStorage.getItem('sold_data'));
  if ( checkDataStorage ) {
    return JSON.parse(localStorage.getItem("sold_data"));
  }

  try {
    const res = await axios.get(`https://api.nfolio.io/account/sold_nfts/0x17f8dc174935fd109fa45e00843e106b4c3f8385`, {
      headers: {
        "api-key": process.env.NEXT_PUBLIC_API_KEY
      }
    });
    const {data} = await res;

    if ( data.total > data.size ) {
      console.log('FETCH THE REST OF DATA SOLD');
    }

    localStorage.setItem("sold_data", JSON.stringify(data));

    return data;
  } catch (err) {
    console.log('ERROR: ', err);
  }
};

////////////////////////////////////////////////// FETCH OWNED DATA || BY PAGE -- done
const fetchOwnedDataByPageAndSize = async (page = 1, size = 8) => {
  try {
    const res = await axios.get(`https://api.nfolio.io/account/owned_nfts/0x17f8dc174935fd109fa45e00843e106b4c3f8385/?page=${page}&size=${size}`, {
      headers: {
        "api-key": process.env.NEXT_PUBLIC_API_KEY
      }
    });
    const {data} = await res;

    if ( data.total > data.size ) {
      console.log('FETCH THE REST OF DATA OWNED');
    }

    return data;
  } catch (err) {
    console.log('ERROR: ', err);
  }
};

////////////////////////////////////////////////// FETCH AND CREATE CARD'S DATA
const createCardsData = (id, name, img, bought, floor, estimate) => {
  return { id, name, img, bought, floor, estimate };
}

////////////////////////////////////////////////// FETCH DATA CARDS PAGE
export const fetchCardsDataPage = async (page = 1, size = 100) => {
  // IF WE HAVE DATA IN LOCAL STORAGE, DO THIS IF STATEMENT
  const checkDataStorage = Boolean(window.localStorage.getItem('cards_data'));
  if ( checkDataStorage ) {
    return JSON.parse(localStorage.getItem("cards_data"));
  }

  const cards_data_page = [];
  const data = await fetchOwnedDataByPageAndSize(page, size);

  await Promise.all(
    data.items.map(async (d) => {
      const data = await fetchAdditionalData(d.token_address, d.token_id);

      const floor = data?.collection?.stats?.one_day_average_price

      console.log(typeof(data.image_url))

      cards_data_page.push(createCardsData(
        d.token_address ? d.token_address + d.token_id : 'none',
        data.name ? data.name : 'none',
        data.image_url ? data.image_url : 'none',
        d.eth_value ? d.eth_value : 0,
        floor !== null ? floor : 0,
        d.estimated_price ? d.estimated_price : null,
      ))
    })
  )

  localStorage.setItem("cards_data", JSON.stringify(cards_data_page));
  return cards_data_page;
}

