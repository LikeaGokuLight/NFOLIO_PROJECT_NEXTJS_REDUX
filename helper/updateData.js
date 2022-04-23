import { getHours } from "date-fns"

export const getHourNow = () => {
  const date = new Date();
  return getHours(date);
}

export const updateDate = (hour) => {

  console.log(hour, 'hour')

  if ( typeof(hour) !== 'number' ) return false;

  const date = new Date();
  const hours = getHours(date)
  const checkTime = Math.abs( hour - hours )

  return 6 > checkTime;

}