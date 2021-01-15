// ant design
import { Row, Col } from "antd";
// styles
import styles from "./styles.module.css";

function SixDaysForecast() {
  return (
    <div className={styles.root}>
      <Row gutter={[8, 8]} className={styles.main}>
        <Col span={4}>
          <h4>day</h4>
          <div>icon</div>
          <p>25 C</p>
        </Col>
        <Col span={4}>
          <h4>day</h4>
          <div>icon</div>
          <p>25 C</p>
        </Col>
        <Col span={4}>
          <h4>day</h4>
          <div>icon</div>
          <p>25 C</p>
        </Col>
        <Col span={4}>
          <h4>day</h4>
          <div>icon</div>
          <p>25 C</p>
        </Col>
        <Col span={4}>
          <h4>day</h4>
          <div>icon</div>
          <p>25 C</p>
        </Col>
        <Col span={4}>
          <h4>day</h4>
          <div>icon</div>
          <p>25 C</p>
        </Col>
      </Row>
    </div>
  );
}

export default SixDaysForecast;
