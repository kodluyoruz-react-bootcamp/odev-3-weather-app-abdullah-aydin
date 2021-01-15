import { createContext, useState, useEffect } from "react";
//axios
import axios from "axios";
//cities
import cities from "../constant/CitiesOfTurkey.json";

const WeatherDataContext = createContext(null);

const API_BASE = "https://api.openweathermap.org/data/2.5";
const API_KEY = process.env.REACT_APP_APIKEY;

export const WeatherProvider = ({ children }) => {
  const [value, setValue] = useState("İstanbul");
  const [lat, setLat] = useState("41.0053"); // initial value; Istanbul
  const [lon, setLon] = useState("28.9770"); // initial value; Istanbul
  const units = "metric";

  // if there is changed value, set again lon & lat
  useEffect(() => {
    cities.forEach((city) => {
      city.name === value && setLat(city.latitude);
      setLon(city.longitude);
    });
  }, [value]);

  //if there is changed lon & lat, fetch again data
  useEffect(() => {
    axios
      .get(
        `${API_BASE}/onecall?lat=${lat}84&lon=${lon}&exclude=minutely&units=${units}&lang=tr&appid=${API_KEY}`
      )
      .then((res) => console.log(res))
      .catch((err) => console.err(err));
  }, [lat, lon]);

  const values = {
    value,
    setValue,
    setLat,
    setLon,
  };

  return (
    <WeatherDataContext.Provider value={values}>
      {children}
    </WeatherDataContext.Provider>
  );
};

export default WeatherDataContext;
