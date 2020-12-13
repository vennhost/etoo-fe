import React from 'react';
import './style.css';
import image from '../../assets/background/2.jpg';

/**
* @author
* @function TvSub
**/

const TvSub = (props) => {
  return(
    <div className="body">
      <div className="banner-img">
        <img src={image} alt="bio"/>;
      </div>
      <div className="banner-text">
        <h1 className="welcome">Welcome to ETOO CONNECT</h1>
        <p className="note"> We provide you solution to IT challenges and make connection easy and cheap for you.</p>
        <a href="/SignUp">Sign Up</a>      
        <a href="/SignIn">Sign In</a>   
      </div>
    </div>
   );

 }

export default TvSub;