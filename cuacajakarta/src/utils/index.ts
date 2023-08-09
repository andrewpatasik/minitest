import { format, fromUnixTime } from "date-fns";

export const getDateFromUnix = (unixItem: string) => {
  let dt = format(fromUnixTime(Number.parseInt(unixItem)), 'eeee, MMM dd yyyy')
  return dt; 
};

export const isObjectEmpty = (item: Object) => {
  return Object.keys(item).length === 0 ? true : false;
};

