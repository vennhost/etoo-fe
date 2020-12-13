import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import NavDash from '../../components/NavDash/NavDash';
import NavLog from "../../components/NavLog";
import Wallet from "../../components/Wallet";
import Airtime from "../Airtime";
import Data from "../Data";
import "./style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/**
 * @author
 * @function Dashboard
 **/

const Dashboard = (props) => {
  return (
    <div className="body">
      <Route>
        <Switch>
          <div className="menu">
            <NavLog />
            <Wallet />
          </div>

          <div className="content">
            <Route path="/Data" component={Data} />
            <Route path="/Airtime" component={Airtime} />
          </div>
        </Switch>
      </Route>
      <div>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs={12} lg={6} className="pad-down">
              <Data />
            </Col>
            <Col xs={12} lg={6} className="pad-down">
              <Airtime />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
