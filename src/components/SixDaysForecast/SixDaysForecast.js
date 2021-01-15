//context
import { useContext } from "react";
import WeatherDataContext from "../../context/WeatherDataContext";
// ant design
import { Row, Col } from "antd";
// styles
import styles from "./styles.module.css";
//moment
import moment from "moment";

const iconBase = "http://openweathermap.org/img/wn";

function SixDaysForecast() {
  const { forecasts } = useContext(WeatherDataContext);

  // remove today from daily array
  if (forecasts.data?.daily.length > 7) {
    forecasts.data?.daily.shift();
    forecasts.data?.daily.pop();
  }

  const icons = (iconID) => {
    return `${iconBase}/${iconID}@2x.png`;
  };

  return (
    <div className={styles.root}>
      <Row gutter={[8, 8]} className={styles.main}>
        {forecasts.data?.daily.map((day) => (
          <Col span={4} key={day?.dt} className={styles.col}>
            <div>{moment(day?.dt * 1000).format("dddd")}</div>
            <img
              src={icons(day?.weather[0].icon)}
              alt=""
              width={75}
              height={75}
            />
            <p>{`${day.temp.day} ºC`}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default SixDaysForecast;
