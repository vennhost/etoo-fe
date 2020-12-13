import React from 'react';
import {Container, Row, Col, Table,Image} from 'react-bootstrap';
import './style.css';

/**
* @author
* @function Wallet
**/

const Wallet = (props) => {
  return(
    <div className="auth-wrapper">
        <Container>
            <Row  className="justify-content-md-center" >
                
                <Col  md={3} xs={10} className="auth-inner" >
                    Wallet Bal:
                </Col>
                <Col  md={3} xs={10} className="auth-inner" >
                    Sales No:</Col>
                <Col  md={3} xs={10} className="auth-inner" >
                Sales (NGN):
                </Col>
            </Row>
        </Container>
    </div>
   )

 }

export default Wallet