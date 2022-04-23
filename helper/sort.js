export const sortByNameAZ = (array) => {
  return array.sort((a, b) => (a.name > b.name ? 1 : -1));
}

export const sortByNameZA = (array) => {
  return array.sort((a, b) => (a.name < b.name ? 1 : -1));
}

export const sortByPriceBoughtLowToHigh = (array) => {
  return array.sort((a, b) => (Math.floor(a.bought) > Math.floor(b.bought) ? 1 : -1));
}

export const sortByPriceBoughtHighToLow = (array) => {
  return array.sort((a, b) => (Math.floor(a.bought) < Math.floor(b.bought) ? 1 : -1));

}

export const sortByFloorLowToHigh = (array) => {
  return array.sort((a, b) => (a.floor > b.floor ? 1 : -1));
}

export const sortByFloorHighToLow = (array) => {
  return array.sort((a, b) => (a.floor < b.floor ? 1 : -1));
}