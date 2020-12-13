import React from 'react';
import {Container, Row, Col,Card, Button, CardGroup} from 'react-bootstrap';
import data from '../../assets/icons/data.png';
import airtime from '../../assets/icons/airtime.jpg';
import tv from '../../assets/icons/tv.jpeg';
import utilities from '../../assets/icons/utilities.jpg';
import branding from '../../assets/icons/branding.jpeg';
import webDesign from '../../assets/icons/webDesign.png';

/**
* @author
* @function CardHome
**/

const styles = {
    card: {
      borderRadius: 20,
      padding:'auto',
      marginTop: '10px',
      width: '18rem'
    },
    cardText: {
      color: 'black',
      fontSize:'15px',
    },
    cardImage: {
      height: 'auto',
      objectFit: 'cover',
      borderRadius: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
      padding:'3px 0 ',
    },
  service: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid ',
    backgroundColor:'#4c5fab',
    borderRadius: 100,
    font: 'bold 2rem sans-serif',
    marginTop: '10px',
    color: 'white',
    display: 'value',
    fontSize: '20px',
    margin: '10px auto',
  },
  
  serve: {
    border: '2px solid ',
    backgroundColor:'#4c5fab',
    width:'200px',
    borderRadius: 100,
    font: 'bold 2rem sans-serif',
    marginTop: '10px',
    color: 'white',
    display: 'value',
    fontSize: '30px',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
  };
const CardHome = (props) => {
  return(
    <div className="justify-content-md-center">

        <div className="w-auto p-3" style={{backgroundColor: "light", }}>
                <div className="text-center" >
            
                    <div class="w-100 p-3" >
                        <h2 style={styles.serve} className="container">SERVICES</h2>
                        < p>Check out our EXCEPTIONAL SERVICES below.</p>
                        </div>
                        <Container fluid className="text-center">
                            <CardGroup >
                                <Row style={{display:"flex", flexWrap:"wrap"}} className="mb-2 text-dark">
                                    <Col xs={12} md={4}>
                                        <Card border="info" className="d-block w-100" style={styles.card}>
                                            <Card.Body >
                                                <Card.Header style={styles.service}>DATA</Card.Header>
                                                    <Card.Img variant="top" src={data} style={styles.cardImage}/>
                                                <Card.Text as="h4" style={styles.cardText}>
                                                    Start enjoying this very low rates Data plan for your internet browsing databundle.
                                                </Card.Text>
                                                <Button variant="primary">Order Now</Button>
                                            </Card.Body>
                                        </Card>
                                        </Col> 
                                    <Col xs={12} md={4}>
                                        
                                        <Card border="info" className="d-block w-100" style={styles.card}>
                                            <Card.Body >
                                                <Card.Header style={styles.service}>AIRTIME TOPUP</Card.Header>
                                                 <Card.Img variant="top" src={airtime} style={styles.cardImage}/>
                                                <Card.Text as="h4" style={styles.cardText}>
                                                    Making an online recharge has become very easy and safe on Etoo Connect.
                                                </Card.Text>
                                                <Button variant="primary">Order Now</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col xs={12} md={4}>
                                        
                                        <Card border="info" className="d-block w-100" style={styles.card}>
                                            <Card.Body>
                                                <Card.Header style={styles.service}>SATALITE TV</Card.Header>
                                                    <Card.Img variant="top" src={tv} style={styles.cardImage}/>
                                                <Card.Text as="h4" style={styles.cardText}>
                                                    Instantly Activate Satalite Tv with favourable discount compare to others
                                                </Card.Text>
                                                <Button variant="primary">Order Now</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col> 
                                
                                </Row>
                            </CardGroup>
                        </Container>

                        <Container fluid className="text-center">
                            <CardGroup >
                                <Row style={{display:"flex", flexWrap:"wrap"}} className="mb-2 text-dark">
                                    <Col xs={12} md={4}>
                                        <Card border="info" className="d-block w-100" style={styles.card}>
                                            <Card.Body >
                                                <Card.Header style={styles.service}>UTILITY BILL</Card.Header>
                                                    <Card.Img variant="top" src={utilities} style={styles.cardImage}/>
                                                <Card.Text as="h4" style={styles.cardText}>
                                                Because we understand your needs, we have made bills and utilities payment more convenient.
                                                </Card.Text>
                                                <Button variant="primary">Order Now</Button>
                                            </Card.Body>
                                        </Card>
                                        </Col> 
                                    <Col xs={12} md={4}>
                                        
                                        <Card border="info" className="d-block w-100" style={styles.card}>
                                            <Card.Body >
                                                <Card.Header style={styles.service}>Branding</Card.Header>
                                                 <Card.Img variant="top" src={branding} style={styles.cardImage}/>
                                                <Card.Text as="h4" style={styles.cardText}>
                                                    Is not all about missing color and shapes to together is about getting you the perfect brand identity that seperate you from others and connect you with your customers.
                                                </Card.Text>
                                                <Button variant="primary">Order Now</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                    <Col xs={12} md={4}>
                                        
                                        <Card border="info" className="d-block w-100" style={styles.card}>
                                            <Card.Body>
                                                <Card.Header style={styles.service}>Web Design</Card.Header>
                                                    <Card.Img variant="top" src={webDesign} style={styles.cardImage}/>
                                                <Card.Text as="h4" style={styles.cardText}>
                                                    We provide you with stable and reputable presence online, A Dynamic and reponsive platform that will grow online without worries.
                                                </Card.Text>
                                                <Button variant="primary">Order Now</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col> 
                                
                                </Row>
                            </CardGroup>
                        </Container>
                    
                    
                </div>
            </div>
    </div>

  
   );

 };

export default CardHome;