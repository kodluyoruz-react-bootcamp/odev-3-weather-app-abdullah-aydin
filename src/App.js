// components
import SelectMenu from "./components/SelectMenu";
import MainMenu from "./components/MainMenu";
import OtherDaysForecast from "./components/SixDaysForecast";
import HourlyForecast from "./components/HourlyForecast";
//style
import "./App.css";

function App() {
  return (
    <div className="app_root">
      <div className="app_body">
        <SelectMenu />
        <MainMenu />
        <OtherDaysForecast />
        <HourlyForecast />
      </div>
    </div>
  );
}

export default App;
