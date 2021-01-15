//context
import { useContext } from "react";
import WeatherDataContext from "../../context/WeatherDataContext";
// ant design
import { Row, Col } from "antd";
// styles
import styles from "./styles.module.css";

function MainMenu() {
  const { value } = useContext(WeatherDataContext);

  return (
    <div className={styles.root}>
      <Row className={styles.main}>
        <Col>
          <h2>{value}</h2>
        </Col>
        <Col>
          <div>15 20</div>
        </Col>
      </Row>
      <Row className={styles.main}>
        <Col>
          <div>today</div>
        </Col>
        <Col>
          <div>icon</div>
        </Col>
        <Col>
          <div>22 C</div>
        </Col>
      </Row>
    </div>
  );
}

export default MainMenu;
