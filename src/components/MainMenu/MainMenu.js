import { useContext } from "react";
import WeatherDataContext from "../../context/WeatherDataContext";
//moment
import moment from "moment";
// ant design
import { Row, Col, Spin } from "antd";
// styles
import styles from "./styles.module.css";

const iconBase = "http://openweathermap.org/img/wn";

function MainMenu() {
  const { today, value } = useContext(WeatherDataContext);

  const icons = (iconID) => {
    return `${iconBase}/${iconID}@2x.png`;
  };

  

  return (
    <div className={styles.root}>
      {!today ? (
        <Spin />
      ) : (
        <Row className={styles.main}>
          <Col>
            <h1 className={styles.whiteColor}>{value.toUpperCase()}</h1>
          </Col>
          <Col className={styles.minMax}>
            <h5>En düşük sıcaklık</h5>
            <h5>
              {today.minTemp === undefined ? (
                <Spin />
              ) : (
                <b>{`${today.minTemp} ºC`}</b>
              )}
            </h5>
            <h5>En yüksek sıcaklık</h5>
            <h5>
              {today.maxTemp === undefined ? (
                <Spin />
              ) : (
                <b>{`${today.maxTemp} ºC`}</b>
              )}
            </h5>
          </Col>
        </Row>
      )}
      <Row className={styles.main} gutter={[8, 8]}>
        <Col span={6}>
          {today.date === undefined ? (
            <Spin />
          ) : (
            <>
              <h3 className={styles.whiteColor}>
                {moment(today.date).format("dddd").toUpperCase()}
              </h3>
              <h3 className={styles.whiteColor}>
                {moment(today.date).format("DD/MM/YYYY")}
              </h3>
              <h5 className={styles.whiteColor}>Ort. Rüzgar Hızı;</h5>
              <h5 className={styles.whiteColor}>
                {`${today.wind_speed} km/h`}
              </h5>
              <h5 className={styles.whiteColor}>{`Nem: ${today.humidity}%`}</h5>
            </>
          )}
        </Col>
        <Col span={10} className={styles.icon}>
          {today.temp === undefined ? (
            <Spin />
          ) : (
            <>
              <img src={icons(today.icon)} alt="icon" className={styles.img} />
              <div>{`${today.description}`.toUpperCase()}</div>
            </>
          )}
        </Col>
        <Col span={8} className={styles.temp}>
          {today.temp === undefined ? (
            <div className={styles.spin_temp}>
              <Spin />
            </div>
          ) : (
            <div className={styles.temp_div}>
              <p className={styles.temp_p}>Sıcaklık</p>
              <h1 className={styles.temp_h1}>{`${today.temp} ºC`}</h1>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default MainMenu;
