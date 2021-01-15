import { useContext, useState, useEffect } from "react";
import WeatherDataContext from "../../context/WeatherDataContext";
//moment
import moment from "moment";
// ant design
import { Row, Col } from "antd";
// styles
import styles from "./styles.module.css";

const iconBase = "http://openweathermap.org/img/wn";

function MainMenu() {
  const { today, forecasts, value } = useContext(WeatherDataContext);
  // const [today, setToday] = useState([]);

  // useEffect(() => {
  //   setTimeout(() => setToday(forecasts.data), 50);
  // }, [forecasts]);

  const icons = (iconID) => {
    return `${iconBase}/${iconID}@2x.png`;
  };

  console.log(today);
  return (
    <div className={styles.root}>
      <Row className={styles.main}>
        <Col>
          <h1 className={styles.whiteColor}>{value.toUpperCase()}</h1>
        </Col>
        <Col className={styles.minMax}>
          <h5>{`En düşük sıcaklık: ${today.minTemp} ºC`}</h5>
          <h5>{`En yüksek sıcaklık: ${today.maxTemp} ºC`}</h5>
        </Col>
      </Row>

      <Row className={styles.main} gutter={[8, 8]}>
        <Col span={8}>
          <h3 className={styles.whiteColor}>
            {moment(today.date).format("dddd").toUpperCase()}
          </h3>
          <h3 className={styles.whiteColor}>
            {moment(today.date).format("DD/MM/YYYY")}
          </h3>
          <h5 className={styles.whiteColor}>Ort. Rüzgar Hızı;</h5>
          <h5 className={styles.whiteColor}>{`${today.wind_speed} km/h`}</h5>
          <div>{`Nem: ${today.humidity}%`}</div>
        </Col>
        <Col span={8}>
          <img src={icons(today.icon)} alt="" width={100} height={100} />
          <div>{`${today.description}`.toUpperCase()}</div>
        </Col>
        <Col span={8} className={styles.temp}>
          <h1 className={styles.temp_h1}>{`${today.temp} ºC`}</h1>
        </Col>
      </Row>
    </div>
  );
}

export default MainMenu;
