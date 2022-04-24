import {getDate, getHours} from "date-fns"

export const getHourAndDayNow = () => {
  const date = new Date();
  const hNow = getHours(date)
  const dNow = getDate(date)
  return { hNow, dNow };
}

export const updateDate = () => {
  const time = JSON.parse(window.localStorage.getItem("time_set_data"));

  if (time === null) return false;

  const { hNow, dNow } = getHourAndDayNow();

  if ( dNow !== time.dNow ) return false;

  const calcTime =  Math.abs(time.hNow - hNow);

  return 6 > calcTime;


}