import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardHome from '../../components/CardHome';
import CardData from '../../components/CardData';
import CarouselSlide from '../../components/Carousel';
import Bar from '../../components/Navbar';




const Home = (props) => {
  return(
    <div >  
      <Bar/>
      <CarouselSlide/>
      <CardHome/>
      <CardData/>
    </div>
    
);
};

export default Home;