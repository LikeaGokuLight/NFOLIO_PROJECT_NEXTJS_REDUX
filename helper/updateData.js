import {getDate, getHours} from "date-fns"

export const getHourAndDayNow = () => {
  const date = new Date();
  const hourNow = getHours(date)
  const dayNow = getDate(date)
  return { hourNow, dayNow };
}

export const updateDate = (h, d) => {
  const { hourNow, dayNow  } = getHourAndDayNow();

  if ( dayNow !== d ) return false;

  console.log(h, d, 'hour, day')
  console.log(hourNow, dayNow, 'getHourAndDayNow')

  if ( typeof(h) !== 'number' && typeof(d) !== 'number' ) return false;

  const date = new Date();
  const checkTime = Math.abs( h - hourNow )

  return 6 > checkTime;

}