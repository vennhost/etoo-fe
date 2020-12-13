import React from 'react';
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Holder from 'react-holder';
import image5 from '../../assets/background/5.jpg';
import image1 from '../../assets/background/1.jpg';
import image3 from '../../assets/background/3.jpg';
import image4 from '../../assets/background/4.jpg';
import image6 from '../../assets/background/6.jpg';

/**
* @author
* @function CarouselSlide
**/

const CarouselSlide = (props) => {
  return(
    <div>
         <Carousel interval={10000} keyboard={false} pauseOnHover={true}>  
      <Carousel.Item class="carousel-item active">
        <img src={image1} style={{width:"1299px", height: "300px", filter: "blur(3px)" }} className="d-block w-100" alt="TvSub"/>
            <Carousel.Caption>
              <div  style={{ marginBottom: "10px" }}>
                   <h1 style={{color:"white"  }}>Welcome to <br/> ETOO CONNECT</h1>
                  <h3 style={{color:"white" }}> We provide solutions to IT challenges and make connection easy and cheaper for you.</h3>
              </div>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item class="carousel-item active">
            <img src={image3} style={{width:"1299px", height: "300px", filter: "blur(4px)" }} className="d-block w-100" alt="TvSub"/>
                <Carousel.Caption>
                  <div  style={{ marginBottom: "10px" }}>
                      <h1 style={{color:"white"  }}>Automated <br/>Data  Bundle</h1>
                      <p style={{color:"white" }}> We offer reliable and affordable way to get your data for all Nigerian network.</p>
                  </div>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item class="carousel-item active">
                <img src={image4} style={{width:"1299px", height: "300px", filter: "blur(4px)" }} className="d-block w-100" alt="TvSub"/>
                <Carousel.Caption>
                  <div  style={{ marginBottom: "10px" }}>
                      <h1 style={{color:"white"  }}>Automated <br/>Airtime Dispenser</h1>
                      <p style={{color:"white" }}> We offer the best prices rates for Airtel, MTN, 9mobile and Glo. and also convert Airtime to cash</p>
                  </div>
                </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item class="carousel-item active">
            <img src={image4} style={{width:"1299px", height: "300px", filter: "blur(4px)" }} className="d-block w-100" alt="TvSub"/>
                <Carousel.Caption>
                  <div  style={{ marginBottom: "10px" }}>
                      <h1 style={{color:"white"  }}>Automated <br/> Satalite TV</h1>
                      <p style={{color:"white" }}> We offer you discount on all Cable Subcription with the best price in Nigeria.</p>
                  </div>
                </Carousel.Caption>
            </Carousel.Item>    
            <Carousel.Item class="carousel-item active">
            <img src={image4} style={{width:"1299px", height: "300px", filter: "blur(4px)" }} className="d-block w-100" alt="TvSub"/>
                <Carousel.Caption>
                  <div  style={{ marginBottom: "10px" }}>
                      <h1 style={{color:"white"  }}>Utility Bill Payment</h1>
                      <p style={{color:"white" }}> We offer you discount on all utility payment you process through us.</p>
                  </div>
                </Carousel.Caption>
            </Carousel.Item>    
            <Carousel.Item class="carousel-item active">
            <img src={image6} style={{width:"1299px", height: "300px", filter: "blur(4px)" }} className="d-block w-100" alt="TvSub"/>
                <Carousel.Caption>
                  <div  style={{ marginBottom: "10px" }}>
                      <h1 style={{color:"white"  }}>Branding and Graphic Design</h1>
                      <p style={{color:"white" }}> We help in creating unique brand identity that perfectly reflects your Brand or Business.</p>
                  </div>
                </Carousel.Caption>
            </Carousel.Item> 
            <Carousel.Item class="carousel-item active">
            <img src={image5} style={{width:"1299px", height: "300px", filter: "blur(5px)" }} className="d-block w-100" alt="TvSub"/>
                <Carousel.Caption>
                  <div  style={{ marginBottom: "10px" }}>
                      <h1 style={{color:"white"  }}>Web Development</h1>
                      <p style={{color:"white" }}> We encompasses different skills and methods to produce a unique and dynamic website that perfectly suit your brand.</p>
                  </div>
                </Carousel.Caption>
            </Carousel.Item> 
      </Carousel>

    </div>
   );

 };

export default CarouselSlide;