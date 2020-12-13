import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import Bio from '../Bio';


/**
* @author
* @function AboutUs
**/
             
const AboutUs = (props) => {
  return(
      <div className="bio">
        <div>
          <h1>About Us</h1>
        </div>
            <Card >
                <div className="cardHeader">
                    <h3>About CEO</h3>
                </div>
                  <Bio/>
                <div className="cardBody">
                    <p className="personalBio">My name is Rizwan  Khan I am a software developer specialization in Front end developement....:)</p>
                </div>
            </Card>

            <Card >
                <div className="cardHeader">
                    <h3>Who Are We</h3>
                </div>
                <div className="cardBody">
                    <p className="personalBio">Etoo Connect is a 21st century graphic designing team, emanating from the western part of Nigeria. The founder, Oladumiye Omotolase Emmanueal (a.k.a SirEtoo) created the team some years back with the aim of giving graphic solution to numerous people who need it knowing that graphic surrounds us every day. We are here for you!</p>
                </div>
            </Card>

            <Card >
                <div className="cardHeader">
                    <h3>Our Mission</h3>
                </div>
                <div className="cardBody">
                    <p className="personalBio">Everyone needs graphic, directly or indirectly, we all need to create awareness of any thing, we all want to be known for something, we all strive to get something going. Our mission is to get in touch with all who need graphical solution, representation of their idea in a picture or a design. We want to help your brand known by its uniqueness you have longed for. We are, we will and we want to help out. </p>
                </div>
            </Card>

            <Card >
                <div className="cardHeader">
                    <h3>Our Aim</h3>
                </div>
                <div className="cardBody">
                    <p className="personalBio">Simplicity. We aimed at creating simple but unique graphical solutions to everyone we encounter, we want to give your establishment that simple uniqueness to be shown to your consumers. </p>
                </div>
            </Card>
         
      </div>
    
   )

 }

export default AboutUs;


