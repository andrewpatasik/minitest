import axios from "axios";
import { useEffect, useState } from "react";
import dummyWeather from '../dummy_weather.json';

const BASE_URL = import.meta.env.VITE_WEATHER_ENDPOINT;
const KEY = import.meta.env.VITE_API_KEY;
const LAT_CODE = "-6.1753942";
const LON_CODE = "106.827183";
const EXCLUDE_ITEM = "current,hourly,minutely,alerts";
const UNIT = "metric";

export const useFetch = () => {
  const [weatherData, setWeatherData] = useState<any>({});

  useEffect(() => {
    async function fetchData() {
      try {
        let { status, data } = await axios.get(
          `${BASE_URL}lat=${LAT_CODE}&lon=${LON_CODE}&exclude=${EXCLUDE_ITEM}&units=${UNIT}&appid=${KEY}`
        );

        if (status !== 200) throw "error occured";

        return data;
      } catch (error) {
        return dummyWeather[0];
      }
    }

    fetchData()
      .then((res) => {
        setWeatherData({ ...res });
      })
      .catch((dummy) => {
        setWeatherData({ ...dummy}) 
      });
  }, []);
  return [weatherData]
}