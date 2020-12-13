import React from 'react';
import './style.css';
import bio from '../../assets/connectImages/bio.JPG';


/**
* @author
* @function Logo
**/
console.log(bio.JPG);
    function Bio(){
      return(
      <bio>
        <div className="bioImage">
          <img className="bioImageContainer" src={bio} alt="bio"/>;
        </div>
        
      </bio> 
  );  
};
    


export default Bio;