import React from "react"; 
import { Container, Row, Col } from "react-bootstrap";
import RangesBar from "./components/RangeInput";
import Calculation from "./components/DetailedCalc";
import EMIChart from "./components/Charts";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container>
      <Row>
        <Col md={8}>
          <RangesBar />
        </Col>
        <Col md={4}>
          <Calculation />
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <EMIChart />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
