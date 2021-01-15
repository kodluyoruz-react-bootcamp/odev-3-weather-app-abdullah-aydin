//context
import { useContext } from "react";
import WeatherDataContext from "../../context/WeatherDataContext";
//cities
import cities from "../../constant/CitiesOfTurkey.json";
// ant design
import { Select } from "antd";

const { Option } = Select;

function SelectMenu() {
  const { value, setValue } = useContext(WeatherDataContext);

  return (
    <Select
      defaultValue={value}
      style={{ width: 120 }}
      onChange={(value) => setValue(value)}
    >
      {cities.map((city) => (
        <Option value={city.name} key={city.id}>
          {city.name}
        </Option>
      ))}
    </Select>
  );
}

export default SelectMenu;
