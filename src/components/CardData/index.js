import React from 'react';
import {Container, Row, Col, Table,Image} from 'react-bootstrap';
import mtn from '../../assets/icons/mtn.png';
import airtel from '../../assets/icons/airtel.png';
import mobile from '../../assets/icons/9mobile.png';
import glo from '../../assets/icons/glo.png';

/**
* @author
* @function CardData
**/

const Style = {
    bootCols:{     
        padding:'10px',
        margin:'0px',
        marginTop: '20px',
        color: 'white',
        display: 'value',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tadRow: {
        width:'100%',
        border:'none',
    },
    mtnStyle: {
        margin: '0 auto',
        backgroundColor:'#f0c203',
        borderRadius: 20,
        font: 'bold 2rem sans-serif',
        width: '14rem',
        border: 'none', 
        color: '#dfece9',
        display: 'value',
        fontSize: '14px',
    },
    gloStyle: {
        margin: '0 auto',
        backgroundColor:'green',
        borderRadius: 20,
        font: 'bold 2rem sans-serif',
        width: '14rem',
        border: 'none', 
        color: '#dfece9',
        display: 'value',
        fontSize: '14px',
    },
    airtelStyle: {
        margin: '0 auto',
        backgroundColor:'red',
        borderRadius: 20,
        font: 'bold 2rem sans-serif',
        width: '14rem',
        border: 'none', 
        color: '#dfece9',
        display: 'value',
        fontSize: '14px',
    },
    mobileStyle: {
        margin: '0 auto',
        backgroundColor:'rgb(3, 74, 55)',
        borderRadius: 20,
        font: 'bold 2rem sans-serif',
        width: '14rem',
        border: 'none', 
        color: '#dfece9',
        display: 'value',
        fontSize: '14px',
    },
    dataImage: {
        height: '90px',
        objectFit: 'cover',
        padding:'3px 0 ',
        display: 'block',
        margin: '0 auto',
      },
      Affordable: {
        justifyContent: 'center',
        margin: '0 auto',
        border: '2px solid ',
        backgroundColor:'#4c5fab',
        width:'310px',
        borderRadius: 100,
        font: 'bold 2rem sans-serif',
        marginTop: '10px',
        color: 'white',
        display: 'value',
        fontSize: '30px',
        
        
      },
};
const CardData = (props) => {
  return(
        <div>
            <div style={Style.Affordable} className="container">
         Affordable Data list
            </div>
            <Container fluid="md" className="text-center">
            <div >
                    <Row style={{display:"flex", flexWrap:"wrap"}} className="justify-content-lg-center">
                    <div className="col-md-6 col-lg-4 col-xl-3 " style={Style.bootCols}>
                    <Col>
                        <Table responsive="xl" style={Style.mtnStyle} striped bordered hover size="xl">
                            <thead>
                            <tr style={Style.tabRow}>
                                <th colSpan="3">
                                <Col >
                                    <Image src={mtn} roundedCircle style={Style.dataImage}/>
                                </Col>
                                </th>
                                
                            </tr>
                            </thead>
                            <tbody style={Style.tabRow}>
                            <tr>
                                <td className="col-md-3"> 1GB</td>
                                <td className="col-md-3">₦330</td>
                                <td className="col-md-3">SME(30days)</td>
                                
                            </tr>
                            <tr>
                                <td className="col-md-2"> 2GB</td>
                                <td className="col-md-3">₦660</td>
                                <td className="col-md-6">SME(30days)</td>
                                
                            </tr>
                            <tr>
                                <td className="col-md-2"> 3GB</td>
                                <td className="col-md-3">₦990</td>
                                <td className="col-md-3">SME(30days)</td>
                            
                            </tr>
                            <tr>
                            <td className="col-md-2"> 5GB</td>
                                <td className="col-md-3">₦1650</td>
                                <td className="col-md-3">SME(30days)</td>
                            </tr>
                            <tr>
                                <td className="col-md-2"> 6GB</td>
                                <td className="col-md-3">₦2325</td>
                                <td className="col-md-3">Gifting(30days)</td>
                            </tr>
                            <tr>
                                <td className="col-md-2"> 8GB</td>
                                <td className="col-md-3">₦2790</td>
                                <td className="col-md-3">Gifting(30days)</td>
                            </tr> 
                            <tr>
                                <td className="col-md-2"> 10GB</td>
                                <td className="col-md-3">₦3250</td>
                                <td className="col-md-3">Gifting(30days)</td>
                            </tr>
                            <tr>
                                <td className="col-md-2"> 15GB</td>
                                <td className="col-md-3">₦4650</td>
                                <td className="col-md-3">Gifting(30days)</td>
                            </tr>
                            <tr>
                                <td className="col-md-2"> 20GB</td>
                                <td className="col-md-3">₦5580</td>
                                <td className="col-md-3">Gifting(30days)</td>
                            </tr>
                            <tr>
                                <td className="col-md-2"> 40GB</td>
                                <td className="col-md-3">₦9300</td>
                                <td className="col-md-3">Gifting(30days)</td>
                            </tr>
                            <tr>
                                <td className="col-md-2"> 75GB</td>
                                <td className="col-md-3">₦13950</td>
                                <td className="col-md-3">Gifting(30days)</td>
                            </tr>
                            <tr>
                                <td className="col-md-2"> 110GB</td>
                                <td className="col-md-3">₦18600</td>
                                <td className="col-md-3">Gifting(30days)</td>
                            </tr>
                            </tbody>
                        </Table>
                        
                        </Col >  
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3 " style={Style.bootCols}>
                    <Col >
                        <Table responsive="xl" style={Style.airtelStyle} striped bordered hover size="xl">
                            <thead>
                            <tr style={Style.tabRow}>
                                <th colSpan="3">
                                <Col >
                                    <Image src={airtel} roundedCircle style={Style.dataImage}/>
                                </Col>
                                </th>
                                
                            </tr>
                            </thead>
                            <tbody style={Style.tabRow}>
                            <tr>
                                <td className="col-md-3"> 750MB</td>
                                <td className="col-md-3">₦450</td>
                                <td className="col-md-3">14days</td>
                                
                            </tr>
                            <tr>
                                <td className="col-md-2"> 1.5GB</td>
                                <td className="col-md-3">₦900</td>
                                <td className="col-md-6">30days</td>
                                
                            </tr>
                            <tr>
                                <td className="col-md-2"> 2GB</td>
                                <td className="col-md-3">₦1080</td>
                                <td className="col-md-3">30days</td>
                            
                            </tr>
                            <tr>
                            <td className="col-md-2"> 3GB</td>
                                <td className="col-md-3">₦1350</td>
                                <td className="col-md-3">30days</td>
                            </tr>
                            <tr>
                                <td className="col-md-2"> 4.5GB</td>
                                <td className="col-md-3">₦1800</td>
                                <td className="col-md-3">30days</td>
                            </tr>
                            <tr>
                                <td className="col-md-2"> 6GB</td>
                                <td className="col-md-3">₦2250</td>
                                <td className="col-md-3">30days</td>
                            </tr> 
                            <tr>
                                <td className="col-md-2"> 8GB</td>
                                <td className="col-md-3">₦2700</td>
                                <td className="col-md-3">30days</td>
                            </tr>
                            <tr>
                                <td className="col-md-2"> 11GB</td>
                                <td className="col-md-3">₦3600</td>
                                <td className="col-md-3">30days</td>
                            </tr>
                            <tr>
                                <td className="col-md-2"> 15GB</td>
                                <td className="col-md-3">₦4500</td>
                                <td className="col-md-3">30days</td>
                            </tr>
                            <tr>
                                <td className="col-md-2"> 40GB</td>
                                <td className="col-md-3">₦9000</td>
                                <td className="col-md-3">30days</td>
                            </tr>
                            <tr>
                                <td className="col-md-2"> 75GB</td>
                                <td className="col-md-3">₦13500</td>
                                <td className="col-md-3">30days</td>
                            </tr>
                            <tr>
                                <td className="col-md-2"> 110GB</td>
                                <td className="col-md-3">₦18000</td>
                                <td className="col-md-3">30days</td>
                            </tr>
                            </tbody>
                        </Table>
                        
                        </Col >  
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3 " style={Style.bootCols}>
                    <Col >
                        <Table responsive="xl" style={Style.gloStyle} striped bordered hover size="xl">
                            <thead>
                            <tr style={Style.tabRow}>
                                <th colSpan="3">
                                <Col >
                                    <Image src={glo} roundedCircle style={Style.dataImage}/>
                                </Col>
                                </th>
                                
                            </tr>
                            </thead>
                            <tbody style={Style.tabRow}>
                            <tr>
                                <td className="col-md-3"> 1.35GB</td>
                                <td className="col-md-3">₦450</td>
                                <td className="col-md-3">14days</td>
                                
                            </tr>
                            <tr>
                                <td className="col-md-2"> 2.9GB</td>
                                <td className="col-md-3">₦900</td>
                                <td className="col-md-6">30days</td>
                                
                            </tr>
                            <tr>
                                <td className="col-md-2"> 4.1GB</td>
                                <td className="col-md-3">₦1350</td>
                                <td className="col-md-3">30days</td>
                            
                            </tr>
                            <tr>
                            <td className="col-md-2"> 5.8GB</td>
                                <td className="col-md-3">₦1800</td>
                                <td className="col-md-3">30days</td>
                            </tr>
                            <tr>
                                <td className="col-md-2"> 7.7GB</td>
                                <td className="col-md-3">₦2250</td>
                                <td className="col-md-3">30days</td>
                            </tr>
                            <tr>
                                <td className="col-md-2"> 10GB</td>
                                <td className="col-md-3">₦2700</td>
                                <td className="col-md-3">30days</td>
                            </tr> 
                            <tr>
                                <td className="col-md-2"> 13.25GB</td>
                                <td className="col-md-3">₦3600</td>
                                <td className="col-md-3">30days</td>
                            </tr>
                            <tr>
                                <td className="col-md-2"> 18.25GB</td>
                                <td className="col-md-3">₦4500</td>
                                <td className="col-md-3">30days</td>
                            </tr>
                            <tr>
                                <td className="col-md-2"> 29.5GB</td>
                                <td className="col-md-3">₦7200</td>
                                <td className="col-md-3">30days</td>
                            </tr>
                            <tr>
                                <td className="col-md-2"> 50GB</td>
                                <td className="col-md-3">₦9000</td>
                                <td className="col-md-3">30days</td>
                            </tr>
                            <tr>
                                <td className="col-md-2"> 93GB</td>
                                <td className="col-md-3">₦13500</td>
                                <td className="col-md-3">30days</td>
                            </tr>
                            <tr>
                                <td className="col-md-2"> 119GB</td>
                                <td className="col-md-3">₦16200</td>
                                <td className="col-md-3">30days</td>
                            </tr>
                            <tr>
                                <td className="col-md-2"> 138GB</td>
                                <td className="col-md-3">₦18000</td>
                                <td className="col-md-3">30days</td>
                            </tr>
                            </tbody>
                        </Table>
                        
                        </Col >  
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-3 " style={Style.bootCols}>
                    <Col>
                        <Table responsive="xl" style={Style.mobileStyle} striped bordered hover size="xl">
                            <thead>
                            <tr style={Style.tabRow}>
                                <th colSpan="3">
                                <Col >
                                    <Image src={mobile} roundedCircle style={Style.dataImage}/>
                                </Col>
                                </th>
                                
                            </tr>
                            </thead>
                            <tbody style={Style.tabRow}>
                            <tr>
                                <td className="col-md-3"> 500MB</td>
                                <td className="col-md-3">₦400</td>
                                <td className="col-md-3">30days</td>
                                
                            </tr>
                            <tr>
                                <td className="col-md-2"> 1.5GB</td>
                                <td className="col-md-3">₦800</td>
                                <td className="col-md-6">30days</td>
                                
                            </tr>
                            <tr>
                                <td className="col-md-2"> 2GB</td>
                                <td className="col-md-3">₦960</td>
                                <td className="col-md-3">30days</td>
                            
                            </tr>
                            <tr>
                            <td className="col-md-2"> 3GB</td>
                                <td className="col-md-3">₦1200</td>
                                <td className="col-md-3">30days</td>
                            </tr>
                            <tr>
                                <td className="col-md-2"> 4.5GB</td>
                                <td className="col-md-3">₦1700</td>
                                <td className="col-md-3">30days</td>
                            </tr>
                            <tr>
                                <td className="col-md-2"> 11GB</td>
                                <td className="col-md-3">₦3200</td>
                                <td className="col-md-3">30days</td>
                            </tr> 
                            <tr>
                                <td className="col-md-2"> 15GB</td>
                                <td className="col-md-3">₦4000</td>
                                <td className="col-md-3">30days</td>
                            </tr>
                            <tr>
                                <td className="col-md-2"> 40GB</td>
                                <td className="col-md-3">₦8000</td>
                                <td className="col-md-3">30days</td>
                            </tr>
                            <tr>
                                <td className="col-md-2"> 75GB</td>
                                <td className="col-md-3">₦12000</td>
                                <td className="col-md-3">30days</td>
                            </tr>
                            </tbody>
                        </Table>
                        
                        </Col >  
                        </div>
                        
        </Row>
    </div>
    </Container>



</div>
   );

 };

export default CardData;