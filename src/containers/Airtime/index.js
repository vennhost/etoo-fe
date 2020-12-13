import React from 'react';
import {FormControl,Form,  InputGroup} from 'react-bootstrap';
import './style.css';

/**
* @author
* @function Airtime
**/

const Airtime = (props) => {
  return(
    <div className="auth-inner">
      <h2>Buy Airtime</h2>
      <Form>
        <Form.Group>
          <InputGroup className="mb-2">
            <InputGroup.Prepend>
              <InputGroup.Text>Phone Number</InputGroup.Text>
              </InputGroup.Prepend>
            <FormControl type="tel" size="lg" id="inlineFormInputGroup" placeholder="Enter Number" />
          </InputGroup>
        </Form.Group>

        <Form.Group controlId="exampleForm.SelectCustomSizeSm">
          <InputGroup className="mb-2">
              <InputGroup.Prepend>
                <InputGroup.Text>Network</InputGroup.Text>
                </InputGroup.Prepend>
            <Form.Control as="select" size="lg">     
              <option value="NULL">- Choose Network -</option>
              <option value="MTN">MTN</option>
              <option value="AIRTEL">AIRTEL</option>
              <option value="GLO">GLO</option>
              <option value="MOBILE">9MOBILE</option>  
            </Form.Control>
            </InputGroup>
          </Form.Group>

          <button className="btn btn-dark btn-block" autoFocus>SUBMIT</button>
      </Form>

    
    </div>
   );

 }

export default Airtime;