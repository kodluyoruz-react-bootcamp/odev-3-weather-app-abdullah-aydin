import { createContext, useState } from "react";

const WeatherDataContext = createContext(null);

export const WeatherProvider = ({ children }) => {
    const [value, setValue] = useState();
    
  
    const values = {
      value,
      setValue
    };
  
 
  
    return (
      <WeatherDataContext.Provider value={values}>
        {children}
      </WeatherDataContext.Provider>
    );
  };
  
  export default WeatherDataContext;